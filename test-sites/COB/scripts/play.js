var rollSound = new Audio();
rollSound.src = "./audio/roll-sound.mp3";

var pointSound = new Audio();
pointSound.src = "./audio/point-sound.mp3";

var silverSound = new Audio();
silverSound.src = "./audio/silver-sound.mp3";

var _pl = 0;
var _plo;
var _color;
var _rd = 0; // 1-5
var _ph; // "A"-"E"
var _phFactor = 0; // 0-4
var _rollct = 0; // 1-25
var _pts = 0;
var _mines = 0;
var _silver = 1; 
var _workers;
var _unsold = 3;
var _sold = 0;
var _bonus = 0;
var _turn = 0;
var _undoFunc;
var _undoDesc;
var _undoPts;
var _undoLimit = true;
var _alog;
var _mini = false;

var _k = {
    k2: false,
    k3: false,
    k4: false,
    k13: false,
    k14: false,
    k15: false,
    k1623: false,
    k24: false,
    k25: false,
    k26: false,
    ke5: false
};

function pageLinks(i) {
    var links = [
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

function zeroNaNVariables() {
    var strings = ["_pts","_mines","_sold","_bonus","_turn","_rd","_rollct","_phFactor"];
    for (i = 0; i < strings.length; i++) {
        if (isNaN(parseInt(localStorage.getItem(strings[i])))) {
            localStorage.setItem(strings[i],0);
        };
    };
    if (isNaN(parseInt(localStorage.getItem("_silver")))) {
        localStorage.setItem("_silver",1);
    };
    if (isNaN(parseInt(localStorage.getItem("_unsold")))) {
        localStorage.setItem("_unsold",3);
    };
};
zeroNaNVariables();

function loop() {
    console.log("_pts "+parseInt(localStorage.getItem("_pts")));
    console.log("_mines "+parseInt(localStorage.getItem("_mines")));
    console.log("_unsold "+parseInt(localStorage.getItem("_unsold")));
    console.log("_sold "+parseInt(localStorage.getItem("_sold")));
    console.log("_bonus "+parseInt(localStorage.getItem("_bonus")));
    console.log("_silver "+parseInt(localStorage.getItem("_silver")));
    console.log("_workers "+parseInt(localStorage.getItem("_workers")));
    console.log("_turn "+parseInt(localStorage.getItem("_turn")));
    console.log("_ph "+localStorage.getItem("_ph"));
    console.log("_phFactor "+parseInt(localStorage.getItem("_phFactor")));
    console.log("_rollct "+parseInt(localStorage.getItem("_rollct")));
    console.log("_rd "+parseInt(localStorage.getItem("_rd")));
    console.log("");
};

function zeroAllVariables() {
    if (window.confirm("Are you sure you want to reset the game?")) {
        var strings = ["_pts","_mines","_unsold","_sold","_bonus","_workers","_turn","_rd","_rollct","_phFactor","_alog"];
        for (i = 0; i < strings.length; i++) {
            localStorage.setItem(strings[i],"");
        };
        localStorage.setItem("_silver",1);
        
        for (var key in _k) {
            _k[key] = false;
        };
        
        localStorage.setItem("_k",JSON.stringify(_k));
        
        location.reload();
    };
};

function restoreVariables() {
    _pts = parseInt(localStorage.getItem("_pts"));
    _mines = parseInt(localStorage.getItem("_mines"));
    _silver = parseInt(localStorage.getItem("_silver"));
    _workers = parseInt(localStorage.getItem("_workers"));
    _unsold = parseInt(localStorage.getItem("_unsold"));
    _sold = parseInt(localStorage.getItem("_sold"));
    _bonus = parseInt(localStorage.getItem("_bonus"));
    _turn = parseInt(localStorage.getItem("_turn"));
    
    _ph = localStorage.getItem("_ph");
    _phfactor = parseInt(localStorage.getItem("_phfactor"));
    _rollct = parseInt(localStorage.getItem("_rollct"));
    _rd = parseInt(localStorage.getItem("_rd"));
    
    _alog = localStorage.getItem("_alog");
    
    if (JSON.parse(localStorage.getItem("_k") != null)) {
        _k = JSON.parse(localStorage.getItem("_k"));
        for (var key in _k) {
            if (_k[key] === true) {
                document.getElementById(key.toString()).style.border = "5px dashed red";
            };
        };
    };
    
    if (!isNaN(_rd)) {
        document.getElementById("phase-round-span").innerHTML = _ph+_rd;
    };
    
    document.getElementById("pu-al").innerHTML = _alog;
    document.getElementById("total-points").innerHTML = _pts;
    document.getElementById("mine").style.backgroundImage = "url(images/"+_mines+"-mines.png)";
    document.getElementById("silver-count").innerHTML = _silver;
    document.getElementById("worker-count").innerHTML = _workers;
    document.getElementById("unsold-span").innerHTML = _unsold;
    document.getElementById("sold-span").innerHTML = _sold;
    document.getElementById("bonus-span").innerHTML = _bonus;
    document.getElementById("turn-span").innerHTML = _turn;
    
    latestActivity("green","session restored");
    pop("mm-rr","block","mm");
    scrollTo(0,0);
    randomDice();
};

function mini() {
    _mini === true ? _mini = false : _mini = true;
    
    if (document.documentElement.clientWidth < 354) {
        alert("Your device width is too small to use this feature");
        return;
    };
    
    var tiles = document.getElementsByClassName("tile-button");
    var numbers = document.getElementsByClassName("number-button");
    var topSkip = document.getElementsByClassName("top-skip");
    
    if (_mini === true) {
        for (i = 0; i < tiles.length; i++) {
            tiles[i].style.height = "75px";
            tiles[i].style.width = "75px";
        };
        for (i = 0; i < numbers.length; i++) {
            numbers[i].style.height = "75px";
            numbers[i].style.width = "75px";
        };
        for (i = 0; i < topSkip.length; i++) {
            topSkip[i].style.display = "none";
        };
        document.getElementById("small-bonus").style.cssText = "height:75px; width:75px;";
        document.getElementById("mini").innerHTML = "Turn Mini Tiles Off";
        
    } else {
        for (i = 0; i < tiles.length; i++) {
            tiles[i].style.height = "167px";
            tiles[i].style.width = "167px";
        };
        for (i = 0; i < numbers.length; i++) {
            numbers[i].style.height = "167px";
            numbers[i].style.width = "167px";
        };
        document.getElementById("small-bonus").style.height = "167px";
        document.getElementById("small-bonus").style.width = "167px";
        document.getElementById("mini").innerHTML = "Turn Mini Tiles On";
    };
    
    pop("mm","block");
};

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
        
        document.getElementById("sold-span").innerHTML = _sold;
        document.getElementById("unsold-span").innerHTML = _unsold;
        document.getElementById("total-points").innerHTML = _pts;
        var log = "reversed sale of " + _undoPts + " goods";
    };
    
    if (_undoFunc == "add silver") {
        _silver -= _undoPts; localStorage.setItem("_silver",_silver);
        document.getElementById("silver-count").innerHTML = _silver;
        var log = "reversed " + _undoPts + " silverlings for " + _undoDesc;
    };
    
    if (_undoFunc == "spend silver") {
        _silver -= _undoPts; localStorage.setItem("_silver",_silver);
        document.getElementById("silver-count").innerHTML = _silver;
        var log = "reversed spending of " + Math.abs(_undoPts) + " silverlings"
    };
    
    if (_undoFunc == "use workers") {
        _workers -= _undoPts; localStorage.setItem("_workers",_workers);
        document.getElementById("worker-count").innerHTML = _workers;
        var log = "reversed use of " + Math.abs(_undoPts) + " workers"
    };
    
    if (_undoFunc == "add workers") {
        _workers -= _undoPts; localStorage.setItem("_workers",_workers);
        document.getElementById("worker-count").innerHTML = _workers;
        var log = "reversed " + _undoPts + " workers for " + _undoDesc
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
        document.getElementById("unsold-span").innerHTML = _unsold;
        var log = "reversed acquisition of " + _undoPts + " goods";
    };
    
    if (_undoFunc == "bonus") {
        _pts -= _undoPts; localStorage.setItem("_pts",_pts);
        _bonus--; localStorage.setItem("_bonus",_bonus);
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
    latestActivity("red",log);
    activityLog(log, "red","transparent");
    pointSound.play();
    window.scrollTo(0,0);
};

function setPlayers(x) {
    _pl = x;
    var log = "Players: " + _pl;
    latestActivity("blue",log);
    pop("ps","block");
    pop("pos","block");
};

function setColor(color) {
    _color = color;
    pop("cs","block");
    document.getElementById("main").style.display = "block";
};

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
    var x = Math.floor(Math.random() * 6) + 1;
    var y = Math.floor(Math.random() * 6) + 1;
    var z = Math.floor(Math.random() * 6) + 1;
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
    rollSound.play();
    if (document.getElementById("roll-3-div").style.visibility == "visible") {
        var log = "(" + _ph+_rd + ") rolled " + x + " and " + y + " + white " + z + " (" + _ph+_rd + ")";
    } else {
        var log = "(" + _ph+_rd + ") rolled " + x + " and " + y + " (" + _ph+_rd + ")";
    }
    latestActivity("black",log);
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
    } else {
        _ph = _ph;
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
    pop('re','block');
};

function setPoints() {
    var x = prompt("set points to:");
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
        latestActivity("red",log);
        activityLog(log,"red","transparent");
        pointSound.play();
        pop("mm-s","block","mm");
        window.scrollTo(0,0);
    };
};

function tapPoints(x,name) {
    _undoFunc = "tap points"; _undoDesc = name; _undoPts = x; _undoLimit = false;
    _pts += x; localStorage.setItem("_pts",_pts);
    document.getElementById("total-points").innerHTML = _pts;
    var log = x + " points for " + name;
    latestActivity("black",log);
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
    latestActivity("black",log);
    activityLog(log);
    pointSound.play();
    pop('cr','block');
};

function initializeWorkers(x) {
    if (x > _pl) {
        alert("Cannot be player " + x + " in a " + _pl + " player game")
    } else {
        _workers = x; _plo = x;
        if (isNaN(parseInt(localStorage.getItem("_workers")))) {
            localStorage.setItem("_workers",_plo);
        };
        document.getElementById("worker-count").innerHTML = _workers;
        pop("pos","block");
        pop("cs","block");
    };
};

function setWorkers() {
    var x = prompt("set workers to:");
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
        latestActivity("red",log);
        activityLog(log,"red","transparent");
        pointSound.play();
        pop("mm-s","block","mm");
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
    latestActivity("black",log);
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
    latestActivity("black",log);
    activityLog(log);
    pointSound.play();
    pop("w","block");
    scrollTo(0,0);
};

function setSilver() {
    var x = prompt("set silverlings to:");
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
        latestActivity("red",log);
        activityLog(log,"red","transparent");
        pointSound.play();
        pop("mm-s","block","mm");
        window.scrollTo(0,0);
    };
};

function addSilver(x,name) {
    _undoFunc = "add silver"; _undoDesc = name; _undoPts = x; _undoLimit = false;
    _silver += x; localStorage.setItem("_silver",_silver);
    document.getElementById("silver-count").innerHTML = _silver;
    var log = x + " silverlings for " + name;
    latestActivity("black",log);
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

function spendSilver(x) {
    if (_silver + x < 0) {
        alert("You only have " + _silver + " silverlings");
        return;
    } else {
        _silver += x; localStorage.setItem("_silver",_silver);
    };
    _undoFunc = "spend silver"; _undoPts = x; _undoLimit = false;
    document.getElementById("silver-count").innerHTML = _silver;
    var log = Math.abs(x) + " silverlings spent";
    latestActivity("black",log);
    activityLog(log);
    silverSound.play();
    pop("si","block");
    scrollTo(0,0);
};

function setMines(x) {
    _mines = x; localStorage.setItem("_mines",_mines);
    mineOverlay();
    var log = "mines set to " + x;
    latestActivity("red",log);
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
        latestActivity("black",log);
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
    document.getElementById("unsold-span").innerHTML = _unsold;
    document.getElementById("turn-span").innerHTML = _turn;
    var log = x + " goods acquired"
    latestActivity("black",log);
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
        document.getElementById("unsold-span").innerHTML = _unsold;
        document.getElementById("sold-span").innerHTML = _sold;
        document.getElementById("total-points").innerHTML = _pts;
        var log = (x * _pl) + " points for sale of " + x + " goods";
        latestActivity("black",log);
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
    latestActivity("black",log);
    activityLog(log);
    pointSound.play();
    pop("a","block");
};

function bonusTile(x,size) {
    _undoFunc = "bonus"; _undoDesc = size; _undoPts = x; _undoLimit = false;
    _pts += x; localStorage.setItem("_pts",_pts);
    _bonus++; localStorage.setItem("_bonus",_bonus);
    document.getElementById("total-points").innerHTML = _pts;
    document.getElementById("bonus-span").innerHTML = _bonus;
    var log = x + " points for " + size + " bonus tile";
    latestActivity("black",log);
    activityLog(log);
    pointSound.play();
    window.scrollTo(0,0);
};

function hide(x) {
    if (document.getElementById("roll-" + x + "-div").style.visibility == "visible") {
        document.getElementById("roll-" + x + "-div").style.visibility = "hidden";
    } else {
        document.getElementById("roll-" + x + "-div").style.visibility = "visible";
    };
};

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
    }
    
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
    _alog = document.getElementById("pu-al").innerHTML;
    localStorage.setItem("_alog",_alog);
};

function endPointLog(log) {
    var elementNode = document.createElement("p");
    elementNode.style.cssText = "color:blue; font-weight:bold; margin:0;";
    var textNode = document.createTextNode(log);
    elementNode.appendChild(textNode);
    document.getElementById("pu-epl").appendChild(elementNode);
};

function latestActivity(color,log) {
    document.getElementById("latest-activity-span").style.color = color;
    document.getElementById("latest-activity-span").innerHTML = log;
};

function addKnowledge(i) {
    var values = ["k2", "k3", "k4", "k13", "k14", "k15", "k1623", "k24", "k25", "k26", "ke5"];
    var numbers = [2, 3, 4, 13, 14, 15, "16-23", 24, 25, 26, "e5"];
    if (_k[values[i]] === false) {
        _k[values[i]] = true; localStorage.setItem("_k",JSON.stringify(_k));
        document.getElementById("k" + numbers[i]).style.border = "5px dashed red";
        var log = "knowledge tile " + numbers[i] + " added";
        latestActivity("black",log);
        activityLog(log);
        pointSound.play();
    } else {
       if (window.confirm("Knowledge Tile " + numbers[i] + " is already on estate. Remove?")) {
           _k[values[i]] = false;
           document.getElementById("k" + numbers[i]).style.border = "2px solid black";
           var log = "knowledge tile " + numbers[i] + " removed";
           latestActivity("red",log);
           activityLog(log,"red","transparent");
           pointSound.play();
        };
    };
    pop('k','flex');
};

function totalScore() {
    
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
            endPointLog(gTypeLog);
        };
    };
        
    if (_k["k1623"] === true || _k["ke5"] === true) {
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
            endPointLog(eBuildLog);
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
            endPointLog(aTypeLog);
        };
    };
    
    if (_sold > 0 && _k["k25"] === true ) {
        soldPoints += _sold;
        var soldLog = soldPoints + " points for " + _sold + " sold goods";
        endPointLog(soldLog);
    };
    
    if (_bonus > 0 && _k["k26"] === true ) {
        bonusPoints += (_bonus * 2);
        var bonusLog = bonusPoints + " points for " + _bonus + " bonus tiles";
        endPointLog(bonusLog);
    };
    
    if (_unsold > 0) {
        unsoldPoints += _unsold;
        var unsoldLog = unsoldPoints + " points for " + _unsold + " unsold goods";
        endPointLog(unsoldLog);
    };
    
    if (_mines > 0) {
        _silver += _mines; localStorage.setItem("_silver",_silver);
        document.getElementById("silver-count").innerHTML = _silver;
    };
    
    silverPoints += _silver;
    
    if (silverPoints > 0) {
        var silverLog = silverPoints + " points for " + _silver + " unspent silverlings";
        endPointLog(silverLog);
    };
    
    if (_mines > 0 && _k["k2"] === true) {
        _workers += _mines; localStorage.setItem("_workers",_workers);
        document.getElementById("worker-count").innerHTML = _workers;
    };
    
    if (_workers > 1) {
        workerPoints += (Math.floor(_workers / 2));
        var workerLog = workerPoints + " points for " + _workers + " unused workers";
        endPointLog(workerLog);
    }; 
    
    _pts += (gType * 3) + (eBuild * 4) + (aType * 4) + soldPoints + bonusPoints + unsoldPoints + silverPoints + workerPoints; 
    localStorage.setItem("_pts",_pts);
    document.getElementById("total-points").innerHTML = _pts;
    
    document.getElementById("rolled-dice-flex-div").style.display = "none";
    document.getElementById("main-tiles").style.display = "none";
    document.getElementById("pu-epl").style.display = "block";
    pointSound.play();
    latestActivity("blue","FINAL SCORE");
};

function pop(open,display,close1,close2) {
   if (document.getElementById("pu-"+open).style.display != display) {
        document.getElementById("pu-"+open).style.display = display;
        document.getElementById("pu-"+open).scrollIntoView();
        document.getElementById("main").style.display = "none";
    } else {
        document.getElementById("pu-"+open).style.display = "none";
        document.getElementById("main").style.display = "block";
    };
    if (close1) {
        document.getElementById("pu-"+close1).style.display = "none";
    }
    if (close2) {
        document.getElementById("pu-"+close2).style.display = "none";
    }
    scrollTo(0,0);
};

function pu_bm(i,building,main) {
    var actions = [
        "Take 1 ship or animal tile from any depot except black depot",
        "Take 1 mine, castle, or knowledge tile from any depot except black depot",
        "Take 1 building tile from any depot except black depot",
        "Add any tile from your storage spaces to your estate",
        "Take any action you'd like as if you had a third dice with any number you choose",
        "Functions as any building you want at placement and when scoring building knowledge tiles",
        "Take any action using the number of the white dice (may be adjusted using worker tiles)",
        "Use to help complete any region. Multiple cloisters allowed in any region. Increases region size by 1 (region sizes may not exceed 8)."
    ];
    if (document.getElementById("pu-bm").style.display != "block") {
        document.getElementById("pu-bm").style.display = "block";
        document.getElementById("pu-bm-h1").innerHTML = building;
        document.getElementById("pu-bm-p").innerHTML = actions[i];
        if (main) {
            document.getElementById("main").style.display = "none"
        } else {
            document.getElementById("pu-b").style.display = "none"
        };
    } else {
        document.getElementById("pu-bm").style.display = "none";
    };
};

function pu_km(i,number) {
    var actions = [
        "more than 1 of each building type allowed per city",
        "receive goods from 2 neighboring depots (not just 1) when ship placed",
        "silverlings may be used to buy tiles from any depot, not just the black depot",
        "if you place an animal tile when knowledge tile #7 is on estate, add 1 extra point for the animal tile itself that you place plus 1 extra point for any other animal tiles of the same animal type on the same pasture",
        "worker tiles can adjust dice roll by up to +2 or -2",
        "any dice result may be adjusted +1 or -1 to place a building",
        "any dice result may be adjusted +1 or -1 to place a ship or animal tile",
        "any dice result may be adjusted +1 or -1 to place a castle, knowledge tile, or mine",
        "any dice result may be adjusted +1 or -1 to acquire any new tile",
        "always stay at the top of any stack on the turn order track (only players ahead of the stack will be ahead of you in player order)",
        "may use 1 silverling to buy 2 workers"
    ];
    if (document.getElementById("pu-km").style.display != "block") {
        document.getElementById("pu-km").style.display = "block";
        document.getElementById("pu-km-tile").style.backgroundImage = "url(images/k"+number+".png)";
        document.getElementById("pu-km-p").innerHTML = actions[i];
        document.getElementById("pu-k").style.display = "none"
        scrollTo(0,0);
    } else {
        document.getElementById("pu-km").style.display = "none";
    };
};

pop("ps","block");