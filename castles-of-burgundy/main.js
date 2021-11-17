//***AUDIO***//
var rollSound = new Audio();
rollSound.src = "./audio/roll-sound.mp3";
var pointSound = new Audio();
pointSound.src = "./audio/point-sound.mp3";
var silverSound = new Audio();
silverSound.src = "./audio/silver-sound.mp3";

//***GLOBALS SET WHEN STARTING NEW GAME***//
var _pl = 0; // number of players (2-4)
var _wdr = false; // tests if white die has been rolled to determine player order
var _plo; // player order (1-4)
var _silver = 1; // total silverlings (1)*modified during gameplay
var _workers; // total workers (1-4)*modified during gameplay
var _unsold = 3; // total unsold goods (3)*modified during gameplay
var _color; // dice color
var _boardsIndex; // which board group to choose from (0-3)

//***GLOBALS SET DURING DICE ROLLS***//
var _rollct = 0; // roll count (1-25)
var _ph; // phase (A-E)
var _phFactor = 0; // phase factor for point calculation (0-4)
var _rd = 0; // round (1-5)
var _d1; // last roll of dice 1
var _d2; // last roll of dice 2
var _d3; // last roll of dice 3 (white die)

//***GLOBALS SET DURING ACTIONS***//
var _pts = 0; // total points
var _mines = 0; // mines on estate (0-3)
var _sold = 0; // total sold goods
var _bonus = 0; // number of bonus tiles earned
var _turn = 0; // position on turn order track
var _la; // stores latest activity for game restore
var _laColor; // stores latest activity font color
var _al; // stores current activity log for game restore
var _knum; // knowledge tile number
var _k = {
    k2: false,
    k3: false,
    k4: false,
    k13: false,
    k14: false,
    k15: false,
    k16_23: false,
    k24: false,
    k25: false,
    k26: false,
    ke2b: false,
    ke5: false
}; // tests whether certain knowledge tiles are on estate

//***GLOBALS SET AT GAME END***//
var _ts = false; // test if totalScore function has been called
var _epl; // stores end point log for game restore

//***GLOBALS FOR UNDO***//
var _undoFunc; // function to undo
var _undoDesc; // description of undo action for log
var _undoPts; // points or other incremented numbers to undo
var _undoLimit = true; // test if undo limit has been reached

//***GENERAL FUNCTIONS***//
function pageLinks(i) {
    var links = [
        "documentation.pdf",
        "setup.html",
        "expansion.html"
    ];
    window.open(links[i],"_blank");
};
function info(i) {
    var info = [
        "number of unsold goods",
        "number of sold goods",
        "number of bonus tiles",
        "number of turn-order moves"
    ];
    alert(info[i]);
};

//***CSS FUNCTIONS***
function tileResize() {
    x = document.getElementById("tile-sizer").value;
    var tiles = document.getElementsByClassName("tile-button");
    var numbers = document.getElementsByClassName("number-button");
    for (i = 0; i < tiles.length; i++) {
        tiles[i].style.height = x+"px";
        tiles[i].style.width = x+"px";
    };
    for (i = 0; i < numbers.length; i++) {
        numbers[i].style.height = x+"px";
        numbers[i].style.width = x+"px";
    };
};
function hide(x) {
    if (document.getElementById("roll-" + x + "-div").style.visibility == "visible") {
        document.getElementById("roll-" + x + "-div").style.visibility = "hidden";
    } else {
        document.getElementById("roll-" + x + "-div").style.visibility = "visible";
    };
};

//***LOCALSTORAGE FUNCTIONS***//
function zeroNullVariables() {
    var strings = ["_pts","_mines","_sold","_bonus","_turn"];
    for (i = 0; i < strings.length; i++) {
        if (!localStorage.getItem(strings[i])) {
            localStorage.setItem(strings[i],0);
        };
    };
}; // sets any null globals to 0 to avoid NaN innerHTML upon game restore
function zeroVariables() {
    if (window.confirm("Are you sure you want to reset the game?")) {
        var strings = ["_pl","_rollct","_phFactor","_rd","_pts","_mines","_sold","_bonus","_turn"];
        for (i = 0; i < strings.length; i++) {
            localStorage.setItem(strings[i],0);
        };
        localStorage.setItem("_al","");
        localStorage.setItem("_epl","");
        localStorage.setItem("_ts","");
        for (var key in _k) {
            _k[key] = false;
        };
        localStorage.setItem("_k",JSON.stringify(_k));
        location.reload();
    };
}; // sets ALL globals to default values for game reset
function restoreVariables() {
    if (!localStorage.getItem("_rollct") || localStorage.getItem("_rollct") == 0) {
        alert("nothing to restore");
        return;
    };
    _pl = parseInt(localStorage.getItem("_pl"));
    _silver = parseInt(localStorage.getItem("_silver"));
    _workers = parseInt(localStorage.getItem("_workers"));
    _unsold = parseInt(localStorage.getItem("_unsold"));
    _color = localStorage.getItem("_color");
    _rollct = parseInt(localStorage.getItem("_rollct"));
    _ph = localStorage.getItem("_ph");
    _phFactor = parseInt(localStorage.getItem("_phFactor"));
    _rd = parseInt(localStorage.getItem("_rd"));
    _d1 = parseInt(localStorage.getItem("_d1"));
    _d2 = parseInt(localStorage.getItem("_d2"));
    _d3 = parseInt(localStorage.getItem("_d3"));
    _pts = parseInt(localStorage.getItem("_pts"));
    _mines = parseInt(localStorage.getItem("_mines"));
    _sold = parseInt(localStorage.getItem("_sold"));
    _bonus = parseInt(localStorage.getItem("_bonus"));
    _turn = parseInt(localStorage.getItem("_turn"));
    _la = localStorage.getItem("_la");
    _laColor = localStorage.getItem("_laColor");
    _al = localStorage.getItem("_al");
    _ts = localStorage.getItem("_ts");
    _epl = localStorage.getItem("_epl");
    if (localStorage.getItem("_ts")) {
        document.getElementById("set").style.display = "none";
        document.getElementById("undo").style.display = "none";
        document.getElementById("pu-epl").style.display = "block";
    };
    if (JSON.parse(localStorage.getItem("_k"))) {
        _k = JSON.parse(localStorage.getItem("_k"));
        for (var key in _k) {
            if (_k[key] === true) {
                document.getElementById(key.toString()).style.border = "3px dashed red";
            };
        };
        if (_k["ke2b"] === true) {
            document.getElementById("silver-for-workers").style.display = "block";
        };
    };
    if (localStorage.getItem("_ts")) {
        _elog = localStorage.getItem("_elog");
        document.getElementById("rolled-dice-flex-div").style.display = "none";
        document.getElementById("main-tiles").style.display = "none";
        latestActivity("FINAL SCORE","blue");
    };
    document.getElementById("silver-count").innerHTML = _silver;
    document.getElementById("worker-count").innerHTML = _workers;
    document.getElementById("unsold-count").innerHTML = _unsold;
    document.getElementById("phase-round-span").innerHTML = _ph+_rd;
    document.getElementById("roll-1-div").style.backgroundImage = "url(images/" + _color + "-dice-" + _d1 + ".png)";
    document.getElementById("roll-2-div").style.backgroundImage = "url(images/" + _color + "-dice-" + _d2 + ".png)";
    document.getElementById("roll-3-div").style.backgroundImage = "url(images/white-dice-" + _d3 + ".png)";
    document.getElementById("dice-1").style.backgroundImage = "url(images/"+_d1+"-dice.png)";
    document.getElementById("dice-2").style.backgroundImage = "url(images/"+_d2+"-dice.png)";
    document.getElementById("total-points").innerHTML = _pts;
    document.getElementById("mine").style.backgroundImage = "url(images/"+_mines+"-mines.png)";
    document.getElementById("sold-count").innerHTML = _sold;
    document.getElementById("bonus-count").innerHTML = _bonus;
    document.getElementById("turn-count").innerHTML = _turn;
    document.getElementById("latest-activity-span").style.color = _laColor;
    document.getElementById("latest-activity-span").innerHTML = _la;
    document.getElementById("pu-al").innerHTML = _al;
    document.getElementById("pu-epl").innerHTML = _epl;
    pop("main","block","ps");
    activityLog("session restored","green");
    pointSound.play();
    scrollTo(0,0);
};

//***UNDO FUNCTIONS***//
function undo() {
    if (_undoLimit === true) {
        alert("Cannot undo any more actions");
        return;
    };
    _undoLimit = true;
    if (_undoFunc == "sell goods") {
        if (_k.k3 === true) {
            _silver -= 2; localStorage.setItem("_silver",_silver);
        } else {
            _silver--; localStorage.setItem("_silver",_silver);
        };
        document.getElementById("silver-count").innerHTML = _silver;
        if (_k.k4 === true) {
            _workers--; localStorage.setItem("_workers",_workers);
            document.getElementById("worker-count").innerHTML = _workers;
        };
        _sold -= _undoPts; localStorage.setItem("_sold",_sold);
        _unsold += _undoPts; localStorage.setItem("_unsold",_unsold);
        _pts -= _undoPts * _pl; localStorage.setItem("_pts",_pts);
        document.getElementById("sold-count").innerHTML = _sold;
        document.getElementById("unsold-count").innerHTML = _unsold;
        document.getElementById("total-points").innerHTML = _pts;
        var log = "reversed sale of " + _undoPts + " goods";
    };
    if (_undoFunc == "add silver") {
        _silver -= _undoPts; localStorage.setItem("_silver",_silver);
        document.getElementById("silver-count").innerHTML = _silver;
        var log = "reversed " + _undoPts + " silverlings for " + _undoDesc;
        silverSound.play();
    };
    if (_undoFunc == "spend silver") {
        _silver -= _undoPts; localStorage.setItem("_silver",_silver);
        document.getElementById("silver-count").innerHTML = _silver;
        var log = "reversed spending " + Math.abs(_undoPts) + " silverlings at black depot";
    };
    if (_undoFunc == "silver for workers") {
        _silver++; _workers -= 2;
        localStorage.setItem("_silver",_silver);
        localStorage.setItem("_workers",_workers);
        document.getElementById("silver-count").innerHTML = _silver;
        document.getElementById("worker-count").innerHTML = _workers;
        var log = "reversed 2 workers for silverling";
    };
    if (_undoFunc == "use workers") {
        _workers -= _undoPts; localStorage.setItem("_workers",_workers);
        document.getElementById("worker-count").innerHTML = _workers;
        var log = "reversed use of " + Math.abs(_undoPts) + " workers";
    };
    if (_undoFunc == "add workers") {
        _workers -= _undoPts; localStorage.setItem("_workers",_workers);
        document.getElementById("worker-count").innerHTML = _workers;
        var log = "reversed " + _undoPts + " workers for " + _undoDesc;
    };
    if (_undoFunc == "tap points") {
        _pts -= _undoPts; localStorage.setItem("_pts",_pts);
        document.getElementById("total-points").innerHTML = _pts;
        var log = "reversed " + _undoPts + " points for " + _undoDesc;
    };
    if (_undoFunc == "region points") {
        _pts -= _undoPts; localStorage.setItem("_pts",_pts);
        document.getElementById("total-points").innerHTML = _pts;
        var log = "reversed " + _undoPts + " points for region size " + _undoDesc;
    };
    if (_undoFunc == "add goods") {
        _unsold -= _undoPts; localStorage.setItem("_unsold",_unsold);
        _turn--; localStorage.setItem("_turn",_turn);
        document.getElementById("turn-count").innerHTML = _turn;
        document.getElementById("unsold-count").innerHTML = _unsold;
        var log = "reversed acquisition of " + _undoPts + " goods";
    };
    if (_undoFunc == "bonus") {
        _pts -= _undoPts; localStorage.setItem("_pts",_pts);
        _bonus--; localStorage.setItem("_bonus",_bonus);
        document.getElementById("bonus-count").innerHTML = _bonus;
        document.getElementById("total-points").innerHTML = _pts;
        var log = "reversed " + _undoPts + " points for " + _undoDesc + " bonus tile";
    };
    if (_undoFunc == "mines") {
        _mines--; localStorage.setItem("_mines",_mines);
        mineOverlay();
        var log = "reversed addition of 1 mine";
    };
    if (_undoFunc == "animals") {
        _pts -= _undoPts; localStorage.setItem("_pts",_pts);
        document.getElementById("total-points").innerHTML = _pts;
        var log = "reversed " + _undoPts + " points for animals";
    };
    pop("mm","block");
    latestActivity(log,"red");
    activityLog(log,"red","transparent");
    pointSound.play();
    window.scrollTo(0,0);
};

//***ACTIVITY LOGGING FUNCTIONS***//
function activityLog(log,color,background,size,marginTop,element) {
    if (element) {
        var elementNode = document.createElement(element);
    } else {
        var elementNode = document.createElement("p");
    };
    if (color) {
        elementNode.style.color = color;
    };
    if (background) {
        elementNode.style.backgroundColor = background;
    };
    if (marginTop) {
        elementNode.style.marginTop = marginTop;
    };
    if (size) {
        elementNode.style.fontSize = size;
    };
    elementNode.style.fontWeight = "bold";
    var textNode = document.createTextNode(log);
    elementNode.appendChild(textNode);
    document.getElementById("pu-al").appendChild(elementNode);
    _al = document.getElementById("pu-al").innerHTML;
    localStorage.setItem("_al",_al);
};
function endPointLog(log) {
    var elementNode = document.createElement("p");
    elementNode.style.cssText = "color:blue; font-weight:bold; margin:0;";
    var textNode = document.createTextNode(log);
    elementNode.appendChild(textNode);
    document.getElementById("pu-epl").appendChild(elementNode);
    _epl = document.getElementById("pu-epl").innerHTML;
    localStorage.setItem("_epl",_epl);
};
function latestActivity(log,color) {
    document.getElementById("latest-activity-span").style.color = color;
    document.getElementById("latest-activity-span").innerHTML = log;
    localStorage.setItem("_la",document.getElementById("latest-activity-span").innerHTML);
    localStorage.setItem("_laColor",color);
};

//***POP FUNCTIONS***//
function pop(open,display,close1,close2) {
    if (document.getElementById("pu-"+open).style.display != display) {
        document.getElementById("pu-"+open).style.display = display;
        document.getElementById("pu-"+open).scrollIntoView();
    } else {
        document.getElementById("pu-"+open).style.display = "none";
        document.getElementById("pu-main").style.display = "block";
    };
    if (close1) {
        document.getElementById("pu-"+close1).style.display = "none";
    }
    if (close2) {
        document.getElementById("pu-"+close2).style.display = "none";
    };
    scrollTo(0,0);
};
function pu_bm(i,building,main) {
    var actions = [
        "Take 1 ship or animal from any depot except black depot",
        "Take 1 mine, castle, or knowledge tile from any depot except black depot",
        "Take 1 building from any depot except black depot",
        "Add any tile from your storage spaces to your estate",
        "Take any action you'd like as if you had a third dice with any number you choose",
        "Functions as any building you want at placement AND as any building you want when scoring knowledge tiles 16-23",
        "Take any action using the number of the white die (may be adjusted using worker tiles)",
        "Use to help complete any region; multiple cloisters allowed in any region; increases region size by 1 (region sizes may not exceed 8)"
    ];
    if (document.getElementById("pu-bm").style.display != "block") {
        document.getElementById("pu-bm").style.display = "block";
        document.getElementById("pu-bm-h1").innerHTML = building;
        document.getElementById("pu-bm-p").innerHTML = actions[i];
        if (main) {
            document.getElementById("pu-main").style.display = "none"
        } else {
            document.getElementById("pu-b").style.display = "none"
        };
    } else {
        document.getElementById("pu-bm").style.display = "none";
    };
};
function pu_km(i,number) {
    _knum = number;
    var actions = [
        "More than 1 of each building type allowed per city",
        "1 worker earned per mine at end of each phase in addition to the usual silverling",
        "2 silverlings per goods sale, not just 1",
        "1 worker per goods sale in addition to the usual silverling",
        "Receive goods from 2 neighboring depots (not just 1) when placing ship",
        "Silverlings may be used to buy tiles from any depot, not just the black depot",
        "After placing an animal tile, in addition to the usual points earned, add 1 extra point for the tile you placed plus 1 extra point for any other tiles of the same animal type in that pasture",
        "Worker tiles can be used to adjust die by +2 or -2",
        "Any die may be adjusted by +1 or -1 to place a building",
        "Any die may be adjusted by +1 or -1 to place a ship or animal tile",
        "Any die may be adjusted by +1 or -1 to place a castle, knowledge tile, or mine",
        "Any die may be adjusted by +1 or -1 to acquire any new tile (excludes black depot)",
        "1 silverling per dice trade in addition to the usual 2 workers",
        "4 workers per dice trade instead of the usual 2",
        "3 points at end of game for every goods type sold",
        "4 points at end of game for every building of the type pictured that is on estate",
        "4 points at end of game for every animal type on estate",
        "1 point at end of game for every sold goods tile",
        "2 points at end of game for every bonus tile earned",
        "Always stay at the top of any stack on the turn order track (i.e. other players must pass your spot on the track in order to be ahead of you in player order)",
        "1 silverling may be used to buy 2 workers",
        "4 points at end of game for every pleasure garden on estate"
    ];
    if (document.getElementById("pu-km").style.display != "block") {
        document.getElementById("pu-km").style.display = "block";
        document.getElementById("pu-km-tile").style.backgroundImage = "url(images/k"+number+".png)";
        document.getElementById("pu-km-p").innerHTML = actions[i];
        if (number == "2" || number == "3" || number == "4" || number == "13" || number == "14" || number == "15" || number == "16_23" || number == "24" || number == "25" || number == "26" || number == "e2b" || number == "e5") {
            document.getElementById("k_add_remove").style.display = "block";
            if (_k["k"+number] === false) {
                document.getElementById("k_add_remove").innerHTML = "Add to Estate"
            } else {
                document.getElementById("k_add_remove").innerHTML = "Remove from Estate"
            };
        } else {
            document.getElementById("k_add_remove").style.display = "none";
        };
        document.getElementById("pu-k").style.display = "none"
        scrollTo(0,0);
    } else {
        document.getElementById("pu-km").style.display = "none";
    };
};

//***PRELIMINARY FUNCTIONS***//
function setPlayers(x) {
    if (localStorage.getItem("_pl") > 0) {
        if (window.confirm("Old game data found. Click OK to reset all data and then try again.")) {
            zeroVariables();
            return;
        } else {
            return;
        };
    };
    pointSound.play();
    _pl = x;
    localStorage.setItem("_pl",_pl);
    var log1 = "tap the red box to roll dice"
    var log2 = "Players: " + _pl;
    latestActivity(log1,"green");
    activityLog(log2,"green");
    pop("pos","block","ps");
};
function rollWhiteDice() {
    _wdr = true;
    rollSound.play();
    var x = (Math.floor(Math.random() * 6)) + 1;
    document.getElementById("tap-to-roll").style.backgroundImage = "url(images/white-dice-" + x + ".png)";
};
function initializeWorkers(x) {
    if (_wdr === false) {
        alert("You must roll white die to determine player order");
        return;
    }; 
    if (x > _pl) {
        alert("Cannot be player " + x + " in a " + _pl + " player game");
        return;
    };
    _workers = x; _plo = x; localStorage.setItem("_workers",x);
    localStorage.setItem("_silver",_silver);
    localStorage.setItem("_unsold",_unsold);
    document.getElementById("worker-count").innerHTML = _workers;
    pop("cs","block","pos");
    pointSound.play();
};
function setColor(color) {
    pointSound.play();
    _color = color;
    localStorage.setItem("_color",_color);
    pop("bgs","block","cs");
};
function setBoardIndex(i) {
    _boardsIndex = i;
    pop("bs","block","bgs");
};
function chooseBoards() {
    var boards = [
        [1,2,3,4,5,6,7,8,9],
        ["10a","10b","10c","10d","10e","10f","10g","10h"],
        ["13a","13b","13c","13d","13e","13f","13g","13h"], [1,2,3,4,5,6,7,8,9,"10a","10b","10c","10d","10e","10f","10g","10h","13a","13b","13c","13d","13e","13f","13g","13h"]
    ];
    var boardsReset = [
        [1,2,3,4,5,6,7,8,9],
        ["10a","10b","10c","10d","10e","10f","10g","10h"],
        ["13a","13b","13c","13d","13e","13f","13g","13h"], [1,2,3,4,5,6,7,8,9,"10a","10b","10c","10d","10e","10f","10g","10h","13a","13b","13c","13d","13e","13f","13g","13h"]
    ];
    if (boards[_boardsIndex].length == 0) {
        for (i = 0; i < boardsReset[_boardsIndex].length; i++) {
            boards[_boardsIndex].push(boardsReset[_boardsIndex][i]);
        };
        chooseBoards(_boardsIndex);
    } else {
        var i = Math.floor(Math.random() * (boards[_boardsIndex].length));
        document.getElementById("tap-to-select").innerHTML = boards[_boardsIndex][i];
        boards[_boardsIndex].splice(i,1);
    };
};

//***PRIMARY FUNCTIONS***//
function rollDice() {
    if (_rollct < 25) {
        _rollct++; _rd++;
        localStorage.setItem("_rollct",_rollct);
        localStorage.setItem("_rd",_rd);
        setPhaseRound();
        randomDice();
        if (_mines > 0 && (_rollct == 6 || _rollct == 11 || _rollct == 16 || _rollct == 21)) {
            addSilver(_mines,"mines");
        };
        if (_k.k2 === true && _mines > 0 && (_rollct == 6 || _rollct == 11 || _rollct == 16 || _rollct == 21)) {
            addWorkers(_mines,"mines");
        };
    } else if (_rollct >= 25) {
        if (window.confirm("Click OK to cacluate end of game points.")) {
            document.getElementById("latest-activity-span").innerHTML = "calculating end game points";
            totalScore();
        };
    };
};
function randomDice() {
    var x = Math.floor(Math.random() * 6) + 1; localStorage.setItem("_d1",x);
    var y = Math.floor(Math.random() * 6) + 1; localStorage.setItem("_d2",y);
    var z = Math.floor(Math.random() * 6) + 1; localStorage.setItem("_d3",z);
    var dice1 = "url(images/" + _color + "-dice-" + x + ".png)";
    var dice2 = "url(images/" + _color + "-dice-" + y + ".png)";
    var dice3 = "url(images/white-dice-" + z + ".png)";
    document.getElementById("roll-1-div").style.visibility = "visible";
    document.getElementById("roll-2-div").style.visibility = "visible";
    document.getElementById("roll-1-div").style.backgroundImage = dice1;
    document.getElementById("roll-2-div").style.backgroundImage = dice2;
    document.getElementById("roll-3-div").style.backgroundImage = dice3;
    document.getElementById("dice-1").style.backgroundImage = "url(images/"+x+"-dice.png)";
    document.getElementById("dice-2").style.backgroundImage = "url(images/"+y+"-dice.png)";
    if (document.getElementById("roll-3-div").style.visibility == "visible") {
        var log = "(" + _ph+_rd + ") rolled " + x + " and " + y + " + white " + z;
    } else {
        var log = "(" + _ph+_rd + ") rolled " + x + " and " + y;
    };
    rollSound.play();
    latestActivity(log,"black");
    activityLog(log,"white","black");
};
function setPhaseRound() {
    if (_rollct == 1) {
        _ph = "A";
        activityLog("Phase A","black","transparent","25px","20px","h1");
    } else if (_rollct == 6) {
        _ph = "B"; _rd = 1; _phFactor = 1;
        activityLog("Phase B","black","transparent","25px","20px","h1");
    } else if (_rollct == 11) {
        _ph = "C"; _rd = 1; _phFactor = 2;
        activityLog("Phase C","black","transparent","25px","20px","h1");
    } else if (_rollct == 16) {
        _ph = "D"; _rd = 1; _rd = 1; _phFactor = 3;
        activityLog("Phase D","black","transparent","25px","20px","h1");
    } else if (_rollct == 21) {
        _ph = "E"; _rd = 1; _phFactor = 4;
        activityLog("Phase E","black","transparent","25px","20px","h1");
    };
    localStorage.setItem("_ph",_ph);
    localStorage.setItem("_rd",_rd);
    localStorage.setItem("_phFactor",_phFactor);
    document.getElementById("phase-round-span").innerHTML = _ph+_rd;
};
function adjustPhase(x) {
    _ph = x; localStorage.setItem("_ph",_ph);
    pop("re","block","pe");
};
function adjustRound(x) {
    _rd = x; localStorage.setItem("_rd",_rd);
    if (_ph == "A") {
        _rollct = x; _phFactor = 0;
    } else if (_ph == "B") {
        _rollct = x + 5; _phFactor = 1;
    } else if (_ph == "C") {
        _rollct = x + 10; _phFactor = 2;
    } else if (_ph == "D") {
        _rollct = x + 15; _phFactor = 3;
    } else if (_ph == "E") {
        _rollct = x + 20; _phFactor = 4;
    };
    localStorage.setItem("_rollct",_rollct);
    localStorage.setItem("_phFactor",_phFactor);
    document.getElementById("phase-round-span").innerHTML = _ph+_rd;
    activityLog("Phase " + _ph,"black","transparent","25px","20px","h1");
    var log = "round adjusted to Phase " + _ph + " Round " + x;
    activityLog(log,"red","transparent");
    rollSound.play();
    randomDice();
    pop("re","block");
};
function setPoints() {
    var x = prompt("set points from " + _pts + " to:");
    if (x === null) {
        return;
    } else {
        var y = parseInt(x);
    };
    if (isNaN(y)) {
        alert("Please enter a number");
        setPoints();
    } else {
        _pts = y; localStorage.setItem("_pts",_pts);
        document.getElementById("total-points").innerHTML = _pts;
        var log = "points set to " + y;
        latestActivity(log,"red");
        activityLog(log,"red","transparent");
        pointSound.play();
        pop("mm-s","block","mm");
        window.scrollTo(0,0);
    };
};
function adjustPoints() {
    var x = prompt("adjust " + _pts + " points by:");
    if (x === null) {
        return;
    } else {
        var y = parseInt(x);
    };
    if (isNaN(y)) {
        alert("Please enter a number");
        adjustPoints();
    } else {
        _pts = _pts + y; localStorage.setItem("_pts",_pts);
        document.getElementById("total-points").innerHTML = _pts;
        var log = "points adjusted by " + y;
        latestActivity(log,"red");
        activityLog(log,"red","transparent");
        pointSound.play();
        pop("mm-a","block","mm");
        window.scrollTo(0,0);
    };
};
function tapPoints(x,name) {
    _undoFunc = "tap points"; _undoDesc = name; _undoPts = x; _undoLimit = false;
    _pts += x; localStorage.setItem("_pts",_pts);
    document.getElementById("total-points").innerHTML = _pts;
    var log = x + " points for " + name;
    latestActivity(log,"black");
    activityLog(log);
    pointSound.play();
    pop("b","flex");
    window.scrollTo(0,0);
};
function regionPoints(x) {
    var points = [11, 13, 16, 20, 25, 31, 38, 46];
    var added = points[x] - (_phFactor * 2);
    _undoFunc = "region points"; _undoDesc = x + 1; _undoPts = added; _undoLimit = false;
    _pts += added; localStorage.setItem("_pts",_pts);
    document.getElementById("total-points").innerHTML = _pts;
    var log = added + " points for region size " + (x + 1);
    latestActivity(log,"black");
    activityLog(log);
    pointSound.play();
    pop("cr","block");
};
function setWorkers() {
    var x = prompt("set workers from " + _workers + " to:");
    if (x === null) {
        return;
    } else {
        var y = parseInt(x);
    };
    if (isNaN(y)) {
        alert("Please enter a number");
        setWorkers();
    } else {
        _workers = y; localStorage.setItem("_workers",_workers);
        document.getElementById("worker-count").innerHTML = _workers;
        var log = "workers set to " + y;
        latestActivity(log,"red");
        activityLog(log,"red","transparent");
        pointSound.play();
        pop("mm-s","block","mm");
        window.scrollTo(0,0);
    };
};
function adjustWorkers() {
    var x = prompt("adjust " + _workers + " workers by:");
    if (x === null) {
        return;
    } else {
        var y = parseInt(x);
    };
    if (isNaN(y)) {
        alert("Please enter a number");
        adjustWorkers();
    } else {
        _workers = _workers + y; localStorage.setItem("_workers",_workers);
        document.getElementById("worker-count").innerHTML = _workers;
        var log = "workers adjusted by " + y;
        latestActivity(log,"red");
        activityLog(log,"red","transparent");
        pointSound.play();
        pop("mm-a","block","mm");
        window.scrollTo(0,0);
    };
};
function addWorkers(x,name) {    
    if (_k.k14 === true && name == "dice trade") {
        x = x * 2
        _workers += x; localStorage.setItem("_workers",_workers);
    } else {
        _workers += x; localStorage.setItem("_workers",_workers);
    };
    
    if (_k.k13 === true && name == "dice trade") {
        addSilver(1,"dice trade");
    };
    
    _undoFunc = "add workers"; _undoDesc = name; _undoPts = x; _undoLimit = false;
    
    document.getElementById("worker-count").innerHTML = _workers;
    var log = x + " workers for " + name;
    latestActivity(log,"black");
    activityLog(log);
    pointSound.play();
    if (name == "boarding house") {
        pop("b","flex");
    };
    if (name == "mines") {
        _undoLimit = true;
    };
    scrollTo(0,0);
};
function useWorkers(x) {
    if (_workers + x < 0) {
        alert("You only have " + _workers + " workers");
        return;
    } else {
        _workers += x; localStorage.setItem("_workers",_workers);
    };
    _undoFunc = "use workers"; _undoPts = x; _undoLimit = false;
    document.getElementById("worker-count").innerHTML = _workers;
    var log = Math.abs(x) + " workers used";
    latestActivity(log,"black");
    activityLog(log);
    pointSound.play();
    pop("w","block");
    scrollTo(0,0);
};
function setSilver() {
    var x = prompt("set silverlings from " + _silver + " to:");
    if (x === null) {
        return;
    } else {
        var y = parseInt(x);
    };
    if (isNaN(y)) {
        alert("Please enter a number");
        setSilver();
    } else {
        _silver = y; localStorage.setItem("_silver",_silver);
        document.getElementById("silver-count").innerHTML = _silver;
        var log = "silverlings set to " + y;
        latestActivity(log,"red");
        activityLog(log,"red","transparent");
        pointSound.play();
        pop("mm-s","block","mm");
        window.scrollTo(0,0);
    };
};
function adjustSilver() {
    var x = prompt("adjust " + _silver + " silverlings by:");
    if (x === null) {
        return;
    } else {
        var y = parseInt(x);
    };
    if (isNaN(y)) {
        alert("Please enter a number");
        adjustSilver();
    } else {
        _silver = _silver + y; localStorage.setItem("_silver",_silver);
        document.getElementById("silver-count").innerHTML = _silver;
        var log = "silverlings adjusted by " + y;
        latestActivity(log,"red");
        activityLog(log,"red","transparent");
        pointSound.play();
        pop("mm-a","block","mm");
        window.scrollTo(0,0);
    };
};
function addSilver(x,name) {
    _undoFunc = "add silver"; _undoDesc = name; _undoPts = x; _undoLimit = false;
    _silver += x; localStorage.setItem("_silver",_silver);
    document.getElementById("silver-count").innerHTML = _silver;
    var log = x + " silverlings for " + name;
    latestActivity(log,"black");
    activityLog(log);
    silverSound.play();
    if (name == "bank") {
        pop("b","flex");
    };
    if (name == "mines") {
        _undoLimit = true;
    };
    scrollTo(0,0);
};
function spendSilver(x,e2b) {
    if (_silver + x < 0) {
        alert("You only have " + _silver + " silverlings");
    } else {
        _silver += x; localStorage.setItem("_silver",_silver);
        _undoFunc = "spend silver"; _undoPts = x; _undoLimit = false;
        document.getElementById("silver-count").innerHTML = _silver;
        if (e2b) {
            _undoFunc = "silver for workers"; _undoLimit = false;
            var log = Math.abs(x) + " silverling spent for 2 workers";
        } else {
            var log = Math.abs(x) + " silverlings spent at black depot";
        };
        latestActivity(log,"black");
        activityLog(log);
        silverSound.play();
        pop("si","block");
        scrollTo(0,0);
    };
};
function silverForWorkers() {
    if (_silver < 1) {
        alert("You have 0 silverlings");
    } else {
        addWorkers(2,"silverling");
        spendSilver(-1,true);
    };
};
function setMines(x) {
    _mines = x; localStorage.setItem("_mines",_mines);
    mineOverlay();
    var log = "mines set to " + x;
    latestActivity(log,"red");
    activityLog(log,"red","transparent");
    pointSound.play();
    pop("ms","block","mm-s");
};
function addMines() {
    _undoFunc = "mines"; _undoLimit = false;
    if (_mines == 3) {
        alert("no more than 3 mines may be added to estate")
    } else {
        _mines += 1; localStorage.setItem("_mines",_mines);
        mineOverlay();
        var log = "1 mine added to estate";
        latestActivity(log,"black");
        activityLog(log);
        pointSound.play();
        window.scrollTo(0,0);
    };
};
function mineOverlay() {
    document.getElementById("mine").style.backgroundImage = "url(images/"+_mines+"-mines.png)";
};
function addGoods(x) {
    _undoFunc = "add goods"; _undoPts = x; _undoLimit = false;
    _unsold += x; localStorage.setItem("_unsold",_unsold);
    _turn++; localStorage.setItem("_turn",_turn);
    document.getElementById("unsold-count").innerHTML = _unsold;
    document.getElementById("turn-count").innerHTML = _turn;
    var log = "ship placed "+"("+x+" goods acquired)"
    latestActivity(log,"black");
    activityLog(log);
    pointSound.play();
    pop("sh","block");
};
function sellGoods(x) {
    if (x > _unsold) {
        alert("You only have " + _unsold + " goods available to sell")
    } else {
        _unsold -= x; localStorage.setItem("_unsold",_unsold);
        _sold += x; localStorage.setItem("_sold",_sold);
        _pts += x * _pl; localStorage.setItem("_pts",_pts);
        if (_k.k3 === true) {
            addSilver(2,"goods sale");
        } else {
            addSilver(1,"goods sale");
        };
        if (_k.k4 === true) {
            addWorkers(1,"goods sale");
        };
        _undoFunc = "sell goods"; _undoPts = x; _undoLimit = false;
        document.getElementById("unsold-count").innerHTML = _unsold;
        document.getElementById("sold-count").innerHTML = _sold;
        document.getElementById("total-points").innerHTML = _pts;
        var log = (x * _pl) + " points for sale of " + x + " goods";
        latestActivity(log,"black");
        activityLog(log);
        pointSound.play();
        pop("sg","block");
    };
};
function animals(x) {
    _undoFunc = "animals"; _undoPts = x; _undoLimit = false;
    _pts += x; localStorage.setItem("_pts",_pts);
    document.getElementById("total-points").innerHTML = _pts;
    var log = x + " points for animals";
    latestActivity(log,"black");
    activityLog(log);
    pointSound.play();
    pop("a","block");
};
function bonusTile(x,size) {
    _undoFunc = "bonus"; _undoDesc = size; _undoPts = x; _undoLimit = false;
    _pts += x; localStorage.setItem("_pts",_pts);
    _bonus++; localStorage.setItem("_bonus",_bonus);
    document.getElementById("total-points").innerHTML = _pts;
    document.getElementById("bonus-count").innerHTML = _bonus;
    var log = x + " points for " + size + " bonus tile";
    latestActivity(log,"black");
    activityLog(log);
    pointSound.play();
    window.scrollTo(0,0);
};
function addKnowledge() {
    if (_k["k"+_knum] === false) {
        _k["k"+_knum] = true; localStorage.setItem("_k",JSON.stringify(_k));
        document.getElementById("k"+_knum).style.border = "3px dashed red";
        if (_k["ke2b"] === true) {
            document.getElementById("silver-for-workers").style.display = "block";
        };
        var log = "knowledge tile " + _knum + " added";
        latestActivity(log,"black");
        activityLog(log);
    } else {
       _k["k"+_knum] = false;
       document.getElementById("k"+_knum).style.border = "2px solid black";
       if (_k["ke2b"] === false) {
           document.getElementById("silver-for-workers").style.display = "none";
       };
       var log = "knowledge tile " + _knum + " removed";
       latestActivity(log,"red");
       activityLog(log,"red","transparent");
    };
    pop("km","block");
    pointSound.play();
};
function totalScore() {
    localStorage.setItem("_ts",true);
    var gType = 0;
    var eBuild = 0;
    var aType = 0;
    var soldPoints = 0;
    var bonusPoints = 0;
    var unsoldPoints = 0;
    var silverPoints = 0;
    var workerPoints = 0;
    if (_sold > 0 && _k["k15"] === true) {
        var a = prompt("How many goods types sold?");
        if (a === null) {
            totalScore();
            return;
        } else if (isNaN(a)) {
            alert("Please enter a number");
            totalScore();
            return;
        } else {
            var gType = parseInt(a);
        };
        if (gType > 0) {
            var gTypeLog = (gType * 3) + " points for " + gType + " goods types sold";
            endPointLog(gTypeLog); activityLog(gTypeLog,"blue");
        };
    };
    if (_k["k16_23"] === true || _k["ke5"] === true) {
        var b = prompt("How many eligible buildings for Knowledge Tiles?");
        if (b === null) {
            totalScore();
            return;
        } else if (isNaN(b)) {
            alert("Please enter a number");
            totalScore();
            return;
        } else {
            var eBuild = parseInt(b);
        };
        if (eBuild > 0) {
            var eBuildLog = (eBuild * 4) + " points for " + eBuild + " eligible buildings";
            endPointLog(eBuildLog); activityLog(eBuildLog,"blue");
        };
    };
    if (_k["k24"] === true) {
        var c = prompt("How many animal types on estate?");
        if (c === null) {
            totalScore();
            return;
        } else if (isNaN(c)) {
            alert("Please enter a number");
            totalScore();
            return;
        } else {
            var aType = parseInt(c);
        };
        if (aType > 0) {
            var aTypeLog = (aType * 4) + " points for " + aType + " animal types";
            endPointLog(aTypeLog); activityLog(aTypeLog,"blue");
        };
    };
    if (_sold > 0 && _k["k25"] === true ) {
        soldPoints += _sold;
        var soldLog = soldPoints + " points for " + _sold + " sold goods";
        endPointLog(soldLog); activityLog(soldLog,"blue");
    };
    if (_bonus > 0 && _k["k26"] === true ) {
        bonusPoints += (_bonus * 2);
        var bonusLog = bonusPoints + " points for " + _bonus + " bonus tiles";
        endPointLog(bonusLog); activityLog(bonusLog,"blue");
    };
    if (_unsold > 0) {
        unsoldPoints += _unsold;
        var unsoldLog = unsoldPoints + " points for " + _unsold + " unsold goods";
        endPointLog(unsoldLog); activityLog(unsoldLog,"blue");
    };
    if (_mines > 0) {
        _silver += _mines; localStorage.setItem("_silver",_silver);
        document.getElementById("silver-count").innerHTML = _silver;
    };
    silverPoints += _silver;
    if (silverPoints > 0) {
        var silverLog = silverPoints + " points for " + _silver + " unspent silverlings";
        endPointLog(silverLog); activityLog(silverLog,"blue");
    };
    if (_mines > 0 && _k["k2"] === true) {
        _workers += _mines; localStorage.setItem("_workers",_workers);
        document.getElementById("worker-count").innerHTML = _workers;
    };
    if (_workers > 1) {
        workerPoints += (Math.floor(_workers / 2));
        var workerLog = workerPoints + " points for " + _workers + " unused workers";
        endPointLog(workerLog); activityLog(workerLog,"blue");
    }; 
    _pts += (gType * 3) + (eBuild * 4) + (aType * 4) + soldPoints + bonusPoints + unsoldPoints + silverPoints + workerPoints; 
    localStorage.setItem("_pts",_pts);
    document.getElementById("total-points").innerHTML = _pts;
    document.getElementById("pu-epl").style.display = "block";
    document.getElementById("rolled-dice-flex-div").style.display = "none";
    document.getElementById("main-tiles").style.display = "none";
    document.getElementById("set").style.display = "none";
    document.getElementById("undo").style.display = "none";
    pointSound.play();
    latestActivity("FINAL SCORE","blue");
};

//***PRIMARY FUNCTIONS***//
zeroNullVariables();