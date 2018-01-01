var rollSound = new Audio();
rollSound.src = "./audio/roll-sound.mp3";

var pointSound = new Audio();
pointSound.src = "./audio/point-sound.mp3";

var silverSound = new Audio();
silverSound.src = "./audio/silver-sound.mp3";

var bonusSound = new Audio();
bonusSound.src = "./audio/bonus-sound.mp3";

var _pl = 0;
var _rd = 0;
var _ph = 0;
var _pts = 0;
var _color;
var _endIndex;
var _adjPh;
var _mines = 0;
var _silver = 1; 
var _workers;
var _unsold = 3;
var _sold = 0;
var _gType = 0;
var _aType = 0;
var _bonus = 0;

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
    k26: false
};

var _a = {
    sheep: false,
    cows: false,
    pigs: false,
    chickens: false,
};

var _g = {
    blue: false,
    brown: false,
    orange: false,
    pink: false,
    purple: false,
    red: false
};

var _endGameIndexUsed = [false,false,false,false,false,false,false];

function setPlayers(x) {
    _pl = x;
    document.getElementById("player-span").innerHTML = x;
    playerOrderPop();
};

function initializeWorkers(x) {
    _workers = x;
    document.getElementById("worker-span").innerHTML = _workers;
    colorPop();
}

function setColor(x) {
    var colors = ["black", "red", "green", "blue"];
    _color = colors[x];
    document.getElementById("select-color-pop").style.display = "none";
    document.getElementById("main-wrapper-div").style.display = "block";
};

function rollDice(color) {
    if (_rd < 25) {
        rollSound.play();
        _rd++;
        randomDice(color);
        setPhase();
        setRound();
        if (document.getElementById("bonus-checkbox").checked) {
            randomBonus();
        };
        if (_mines > 0 && (_rd == 6 || _rd == 11 || _rd == 16 || _rd == 21)) {
            adjustSilver(_mines,4);
        };
        if (_k.k2 === true && (_rd == 6 || _rd == 11 || _rd == 16 || _rd == 21)) {
            adjustWorkersNL(_mines);
        };
    } else if (_rd >= 25) {
        if (window.confirm("Click OK to add any earned silverlings and workers before cacluating end of game points.")) {
            endGameAdjust();
        };
    };
};

function randomDice(color) {
    var x = Math.floor(Math.random() * 6) + 1;
    var y = Math.floor(Math.random() * 6) + 1;
    var z = Math.floor(Math.random() * 6) + 1;
    var dice1 = "url(images/" + color + "-dice-" + x + ".png)";
    var dice2 = "url(images/" + color + "-dice-" + y + ".png)";
    var dice3 = "url(images/white-dice-" + z + ".png)";
    document.getElementById("roll-1-div").style.visibility = "visible";
    document.getElementById("roll-2-div").style.visibility = "visible";
    document.getElementById("roll-1-div").style.backgroundImage = dice1;
    document.getElementById("roll-2-div").style.backgroundImage = dice2;
    document.getElementById("roll-3-div").style.backgroundImage = dice3;
};

function setPhase() {
    if (_rd == 1) {
        document.getElementById("phase-span").innerHTML = "A"
        activityLog("PHASE A", "black", "20px");
    } else if (_rd == 6) {
        document.getElementById("phase-span").innerHTML = "B"; _ph = 1;
        activityLog("PHASE B", "black", "20px");
    } else if (_rd == 11) {
        document.getElementById("phase-span").innerHTML = "C"; _ph = 2;
        activityLog("PHASE C", "black", "20px");
    } else if (_rd == 16) {
        document.getElementById("phase-span").innerHTML = "D"; _ph = 3;
        activityLog("PHASE D", "black", "20px");
    } else if (_rd == 21) {
        document.getElementById("phase-span").innerHTML = "E"; _ph = 4;
        activityLog("PHASE E", "black", "20px");
    };
};

function setRound() {
    document.getElementById("round-span").innerHTML = _rd - (5 * _ph);
};

function adjustPhase(x) {
    _adjPh = x;
    document.getElementById("select-phase-pop").style.display = "none";
    document.getElementById("select-round-pop").style.display = "block";
};

function adjustRound(x) {
    if (_adjPh == "A") {
        _rd = x;
        _ph = 0;
    } else if (_adjPh == "B") {
        _rd = x + 5;
        _ph = 1;
    } else if (_adjPh == "C") {
        _rd = x + 10;
        _ph = 2;
    } else if (_adjPh == "D") {
        _rd = x + 15;
        _ph = 3;
    } else if (_adjPh == "E") {
        _rd = x + 20;
        _ph = 4;
    };
    document.getElementById("phase-span").innerHTML = _adjPh;
    document.getElementById("round-span").innerHTML = _rd - (5 * _ph);
    activityLog("PHASE " + _adjPh, "black", "20px");
    var log = "round adjusted to Phase " + _adjPh + " Round " + x;
    latestPointsColor("red");
    document.getElementById("latest-points-span").innerHTML = log;
    activityLog(log, "red");
    rollSound.play();
    randomDice(_color);
    document.getElementById("select-round-pop").style.display = "none";
    window.scrollTo(0,0);
};

function adjustWorkers(x, name, trade) {
    var added = x;
    if (trade) {
        if (_k.k13 === true && _k.k14 === false) {
            _workers += x;
            adjustSilver(1,5);
        } else if (_k.k14 === true && _k.k13 === false) {
            _workers += 4;
            added = 4;
            pointSound.play();
        } else if (_k.k13 === true && _k.k14 === true) {
            _workers += 4;
            adjustSilver(1,5);
            added = 4;
        } else if (_k.k13 === false && _k.k14 === false) {
            _workers += x;
            pointSound.play();
        }
    } else {
        if ((_workers + x) < 0) {
            alert("You don't have enough workers");
            document.getElementById("worker-pop").style.display = "none";
            return;
        } else {
            _workers += x;
        };
        pointSound.play();
    };
    document.getElementById("worker-span").innerHTML = _workers;
    if (_k.k13 === true) {
        var log = added + " workers and 1 silverling for " + name;
    } else if (name == "used") {
        var log = Math.abs(added) + " workers used";
        workerPop();
    } else {
        var log = added + " workers for " + name;
    };
    latestPointsColor("black");
    document.getElementById("latest-points-span").innerHTML = log;
    activityLog(log);
    window.scrollTo(0,0);
};

function adjustWorkersNL(x) {
    _workers += x;
    document.getElementById("worker-span").innerHTML = _workers;
}

function setWorkers(x) {
    var x = parseInt(prompt("Set workers to:"));
    if (isNaN(x)) {
        alert("please enter a number");
    } else {
        _workers = x;
        document.getElementById("worker-span").innerHTML = _workers;
        var log = "workers set to " + x;
        latestPointsColor("red");
        document.getElementById("latest-points-span").innerHTML = log;
        activityLog(log, "red");
        pointSound.play();
        workerPop();
        window.scrollTo(0,0);
    };
};

function adjustMines(i) {
    if (i == 0) {
        if (_mines == 3) {
            alert("no more than 3 mines may be added to estate")
        } else {
            _mines += 1;
            document.getElementById("mine-span").innerHTML = _mines;
            var log = "1 mine added to estate"
            latestPointsColor("black");
            document.getElementById("latest-points-span").innerHTML = log;
            activityLog(log);
            pointSound.play();
            window.scrollTo(0,0);
        };
    } else if (i == 1) {
        var x = parseInt(prompt("Set mines to:"));
        if (isNaN(x)) {
            alert("please enter a number");
        } else if (x > 3) {
            alert("no more than 3 mines may be added to estate");
        } else if (x < 0) {
            alert("mines cannot be less than 0");
        } else {
            _mines += x;
            document.getElementById("mine-span").innerHTML = _mines;
            var log = "mines set to " + x;
            latestPointsColor("red");
            document.getElementById("latest-points-span").innerHTML = log;
            activityLog(log, "red");
            pointSound.play();
            window.scrollTo(0,0);
        };
    };  
};

function adjustSilver(x, i) {
    var sources = [
        "adjustment",
        "spent",
        "for goods sale",
        "for bank",
        "for mine",
        "for dice trade",        
    ];
    if (i == 0) {
        y = parseInt(prompt("Set silverlings to:"));
        x = y;
        _silver = x;
        document.getElementById("silver-span").innerHTML = _silver;
        var log = "silverlings set to " + x;
        latestPointsColor("red");
        document.getElementById("latest-points-span").innerHTML = log;
        activityLog(log, "red");
        document.getElementById("silver-pop").style.display = "none";
    } else if (i == 1) {
        if ((_silver + x) < 0) {
            alert("You don't have enough silverlings");
            document.getElementById("silver-pop").style.display = "none";
            return;
        } else {
            _silver += x;
            document.getElementById("silver-span").innerHTML = _silver;
            var log = Math.abs(x) + " silverlings " + sources[i];
            latestPointsColor("black");
            document.getElementById("latest-points-span").innerHTML = log;
            activityLog(log);
            document.getElementById("silver-pop").style.display = "none";
        };
    } else {
        _silver += x;
        document.getElementById("silver-span").innerHTML = _silver;
        var log = x + " silverlings " + sources[i];
        latestPointsColor("black");
        document.getElementById("latest-points-span").innerHTML = log;
        activityLog(log);
    };
    silverSound.play();
    window.scrollTo(0,0);
}

function randomBonus() {
    var b = Math.floor(Math.random() * 20);
    if (b == 9) {
        bonusSound.play();
        window.open("bonus.html");
    };
};

function hide(x) {
    if (document.getElementById("roll-" + x + "-div").style.visibility == "visible") {
        document.getElementById("roll-" + x + "-div").style.visibility = "hidden";
    } else {
        document.getElementById("roll-" + x + "-div").style.visibility = "visible";
    };
};

function setPoints() {
    var x = parseInt(prompt("Set points to:"));
    if (isNaN(x)) {
        alert("Please enter a number");
    } else {
        _pts = x;
        document.getElementById("total-points").innerHTML = _pts;
        var log = "points set to " + x;
        latestPointsColor("red");
        document.getElementById("latest-points-span").innerHTML = log;
        activityLog(log, "red");
        pointSound.play();
        document.getElementById("set-adjust-points-pop").style.display = "none";
        window.scrollTo(0,0);
    };
};

function resetGame() {
    if (window.confirm("Are you sure you want to reset game?")) {
        location.reload();
    };
};

function regionPoints(x) {
    var points = [11, 13, 16, 20, 25, 31, 38, 46];
    var added = points[x] - (_ph * 2); 
    _pts += added;
    document.getElementById("total-points").innerHTML = _pts;
    var log = added + " points for region size " + (x + 1) + " in Phase " + document.getElementById("phase-span").innerHTML;
    latestPointsColor("black");
    document.getElementById("latest-points-span").innerHTML = log;
    activityLog(log);
    pointSound.play();
    window.scrollTo(0,0);
};

function addGoods(x) {
    _unsold += x;
    document.getElementById("unsold-span").innerHTML = _unsold;
    var log = x + " goods acquired"
    latestPointsColor("black");
    document.getElementById("latest-points-span").innerHTML = log;
    activityLog(log);
    pointSound.play();
    document.getElementById("ship-pop").style.display = "none";
    window.scrollTo(0,0);
};

function sellGoods(x) {
    if (x > _unsold) {
        alert("You only have " + _unsold + " goods available to sell")
    } else {
        _unsold -= x;
        _sold += x;
        _pts += x * _pl;
        if (_k.k3 === true) {
            adjustSilver(2,2);
        } else {
            adjustSilver(1,2);
        };
        if (_k.k4 === true) {
            adjustWorkersNL(1);
        };
        document.getElementById("unsold-span").innerHTML = _unsold;
        document.getElementById("sold-span").innerHTML = _sold;
        document.getElementById("total-points").innerHTML = _pts;
        var log = (x * _pl) + " points for sale of " + x + " goods";
        latestPointsColor("black");
        document.getElementById("latest-points-span").innerHTML = log;
        activityLog(log);
        document.getElementById("goods-pop").style.display = "none";
        window.scrollTo(0,0);
    };
};

function animals(x) {
    _pts += x;
    document.getElementById("total-points").innerHTML = _pts;
    var log = x + " points for animals";
    latestPointsColor("black");
    document.getElementById("latest-points-span").innerHTML = log;
    activityLog(log);
    pointSound.play();
    document.getElementById("animals-pop").style.display = "none";
    window.scrollTo(0,0);
};

function tapPoints(x, name) {
    _pts += x;
    document.getElementById("total-points").innerHTML = _pts;
    var log = x + " points for " + name;
    latestPointsColor("black");
    document.getElementById("latest-points-span").innerHTML = log;
    activityLog(log);
    pointSound.play();
    window.scrollTo(0,0);
};

function bonusTile(x) {
    if (_pl < 2 || _pl > 4) {
        setPlayers();
        bonusTile(x);
    } else {
        if (x == "large") {
            _pts += _pl + 3;
            var added = _pl + 3;
        } else if (x == "small") {
            _pts += _pl;
            var added = _pl;
        };
        _bonus++;
        document.getElementById("total-points").innerHTML = _pts;
        var log = added + " points for " + x + " bonus tile";
        latestPointsColor("black");
        document.getElementById("latest-points-span").innerHTML = log;
        activityLog(log);
        pointSound.play();
        window.scrollTo(0,0);
    };
};

function endGamePts(x) {
    var keywords = [
            "unsold goods tiles", 
            "unspent silverlings", 
            "unused workers", 
            "sold goods types", 
            "eligible buildings", 
            "animal types", 
            "sold goods tiles",
            "bonus tiles"
        ];
    if (_endIndex == 3 && x > 6) {
        alert("No more than 6 goods types possible");
    } else if (_endIndex == 5 && x > 5) {
        alert("No more than 5 animal types possible");
    } else if (_endIndex == 7 && x > 7) {
        alert("No more than 7 bonus tiles possible");
    } else {
        var factors = [x, x, Math.floor(x / 2), (x*3), (x * 4), (x * 4), x, (x * 2)];
        _pts += factors[_endIndex];
        document.getElementById("total-points").innerHTML = _pts;
        var log = factors[_endIndex] + " points for " + x + " " + keywords[_endIndex];
        latestPointsColor("blue")
        document.getElementById("latest-points-span").innerHTML = log;
        activityLog(log, "blue");
        pointSound.play();
        document.getElementById("end-pop").style.display = "none";
        document.getElementById("unsold-goods").scrollIntoView();
    };  
};

function endGameKCheck(i) {
    var values = ["k15", "k1623", "k24", "k25", "k26"]
    if (_k[values[i]] === false) {
        alert("this knowledge tile is not on estate");
    } else {
        if (i == 0) {
            if (_gType == 0) {
                alert("no goods sold");
            } else {
                quickEndGamePts(_gType,(i+3));
            };
        } else if (i == 1) {
            endGamePop(4);
        } else if (i == 2) {
            if (_aType == 0) {
                alert("no animals on estate");
            } else {
                quickEndGamePts(_aType,(i+3));
            };
        } else if (i == 3) {
            if (_sold == 0) {
                alert("no goods sold");
            } else {
                quickEndGamePts(_sold,(i+3));
            };
        } else if (i == 4) {
            if (_sold == 0) {
                alert("no bonus tiles");
            } else {
                quickEndGamePts(_bonus,(i+3));
            };
        };
    };
};

function quickEndGamePts(x, i) {
    if (_endGameIndexUsed[i] === true) {
        alert("These points have already been added");
    } else if (i == 4) {
        _endGameIndexUsed[i] === true;
    }
        
        else {
        var factors = [x, x, Math.floor(x / 2), (x * 3), (x * 4), (x * 4), x, (x * 2)];
        var labels = [
            "unsold goods tiles",
            "unspent silverlings",
            "unused workers",
            "goods types sold",
            "eligible buildings",
            "animal types",
            "goods sold",
            "bonus tiles",
        ];
        _pts += factors[i];
        _endGameIndexUsed[i] = true;
        document.getElementById("total-points").innerHTML = _pts;
        var log = factors[i] + " points for " + x + " " + labels[i];
        latestPointsColor("blue")
        document.getElementById("latest-points-span").innerHTML = log;
        activityLog(log, "blue");
        pointSound.play();
    };
};

function activityLog(x, color, margin) {
    var elementNode = document.createElement("p");
    if (color) {
        elementNode.style.color = color;
    };
    if (margin) {
        elementNode.style.marginTop = margin;
    };
    elementNode.style.fontWeight = "bold";
    var textNode = document.createTextNode(x);
    elementNode.appendChild(textNode);
    document.getElementById("point-log").appendChild(elementNode);
};

function latestPointsColor(color) {
    document.getElementById("latest-points-span").style.color = color;
};

function endGameAdjust() {
    if (_mines > 0) {
        adjustSilver(_mines,4);
    };
    if (_k.k2 === true) {
        adjustWorkersNL(_mines)
    };
    disableEndTiles();
    latestPointsColor("blue")
    document.getElementById("latest-points-span").innerHTML = "calculate end game points";
    document.getElementById("region-point-tap").style.display = "none";
    document.getElementById("quickadd-1").style.display = "none";
    document.getElementById("quickadd-2").style.display = "none";
    document.getElementById("point-quickadd-div-end").style.display = "flex";
    pointSound.play();
    window.scrollTo(0,0);
};

function disableEndTiles() {
    if (_unsold == 0) {
        document.getElementById("unsold-goods").style.display = "none";
    };
    if (_silver == 0) {
        document.getElementById("silverlings").style.display = "none";
    };
    if (_workers < 2) {
        document.getElementById("workers").style.display = "none";
    };
    if (_k.k15 === false || _gType == 0) {
        document.getElementById("know15").style.display = "none";
    };
    if (_k.k1623 === false) {
        document.getElementById("know16-23").style.display = "none";
    };
    if (_k.k24 === false || _aType == 0) {
        document.getElementById("know24").style.display = "none";
    };
    if (_k.k25 === false || _sold == 0) {
        document.getElementById("know25").style.display = "none";
    };
    if (_k.k26 === false || _bonus == 0) {
        document.getElementById("know26").style.display = "none";
    };
};

function addKnowledge(i) {
    var values = ["k2", "k3", "k4", "k13", "k14", "k15", "k1623", "k24", "k25", "k26"];
    var numbers = [2, 3, 4, 13, 14, 15, 1623, 24, 25, 26];
    if (_k[values[i]] === false) {
        _k[values[i]] = true;
        document.getElementById("k" + numbers[i]).style.borderColor = "red";
        document.getElementById("k" + numbers[i]).style.borderStyle = "dashed";
        document.getElementById("k" + numbers[i]).style.borderWidth = "5px";
        var log = "knowledge tile " + numbers[i] + " added";
        document.getElementById("latest-points-span").innerHTML = log;
        latestPointsColor("black")
        activityLog(log);
        pointSound.play();
    } else {
       if (window.confirm("Knowledge Tile " + numbers[i] + " is already on estate. Remove?")) {
           _k[values[i]] = false;
           document.getElementById("k" + numbers[i]).style.borderColor = "black";
           document.getElementById("k" + numbers[i]).style.borderStyle = "solid";
           document.getElementById("k" + numbers[i]).style.borderWidth = "2px";
           var log = "knowledge tile " + numbers[i] + " removed";
           document.getElementById("latest-points-span").innerHTML = log;
           latestPointsColor("red")
           activityLog(log, "red");
           pointSound.play();
        };
    };
    window.scrollTo(0,0);
};

function tradeDiceForWorkers() {
    if (_k.k14 === true) {
        adjustWorkers(4);
    } else {
        adjustWorkers(2);
    };
    if (_k.k13 === true) {
        adjustSilver(1,5);
    };
};
    
function animalType(i) {
    if (i == 0) {
        _a.sheep = true;
        _aType += 1;
        document.getElementById("sheep").style.display = "none";
    } else if (i == 1) {
        _a.cows = true
        _aType += 1;
        document.getElementById("cows").style.display = "none";
    } else if (i == 2) {
        _a.pigs = true
        _aType += 1;
        document.getElementById("pigs").style.display = "none";
    } else if (i == 3) {
        _a.chickens = true
        _aType += 1;
        document.getElementById("chickens").style.display = "none";
    };
    document.getElementById("animals-type-pop").style.display = "none";
    animalsPop();
};

function goodsType(i) {
    if (i == 0) {
        _a.blue = true;
        _gType += 1;
        document.getElementById("blue").style.display = "none";
    } else if (i == 1) {
        _a.brown = true
        _gType += 1;
        document.getElementById("brown").style.display = "none";
    } else if (i == 2) {
        _a.orange = true
        _gType += 1;
        document.getElementById("orange").style.display = "none";
    } else if (i == 3) {
        _a.pink = true
        _gType += 1;
        document.getElementById("pink").style.display = "none";
    } else if (i == 4) {
        _a.purple = true
        _gType += 1;
        document.getElementById("purple").style.display = "none";
    } else if (i == 5) {
        _a.red = true
        _gType += 1;
        document.getElementById("red").style.display = "none";
    }
    document.getElementById("goods-type-pop").style.display = "none";
    goodsPop();
};

function animalTypeSkip() {
    document.getElementById("animals-type-pop").style.display = "none";
    animalsPop();
};

function goodsTypeSkip() {
    document.getElementById("goods-type-pop").style.display = "none";
    goodsPop();
};

/******************************
******************************
    POPS
******************************
******************************/
function selectPlayersPop() {
    window.scrollTo(0,0);
    document.getElementById("select-players-pop").style.display = "block";
};

function playerOrderPop() {
    window.scrollTo(0,0);
    document.getElementById("select-players-pop").style.display = "none";
    document.getElementById("player-order-pop").style.display = "block";
}

function colorPop() {
    document.getElementById("player-order-pop").style.display = "none";
    document.getElementById("select-color-pop").style.display = "block";
};

function phasePop() {
    if (document.getElementById("select-phase-pop").style.display != "block") {
        document.getElementById("select-phase-pop").style.display = "block";
        document.getElementById("select-phase-pop").scrollIntoView();
    } else {
        document.getElementById("select-phase-pop").style.display = "";
        window.scrollTo(0,0);
    };
};

function roundPop() {
   if (document.getElementById("select-round-pop").style.display != "block") {
        document.getElementById("select-round-pop").style.display = "block";
        document.getElementById("select-round-pop").scrollIntoView();
    } else {
        document.getElementById("select-round-pop").style.display = "";
        window.scrollTo(0,0);
    }; 
};

function pointsPop() {
   if (document.getElementById("set-adjust-points-pop").style.display != "block") {
        document.getElementById("set-adjust-points-pop").style.display = "block";
        document.getElementById("set-adjust-points-pop").scrollIntoView();
    } else {
        document.getElementById("set-adjust-points-pop").style.display = "";
        window.scrollTo(0,0);
    }; 
};

function silverPop() {
   if (document.getElementById("silver-pop").style.display != "block") {
        document.getElementById("silver-pop").style.display = "block";
        document.getElementById("silver-pop").scrollIntoView();
    } else {
        document.getElementById("silver-pop").style.display = "";
        window.scrollTo(0,0);
    }; 
};

function workerPop() {
   if (document.getElementById("worker-pop").style.display != "block") {
        document.getElementById("worker-pop").style.display = "block";
        document.getElementById("worker-pop").scrollIntoView();
    } else {
        document.getElementById("worker-pop").style.display = "";
        window.scrollTo(0,0);
    }; 
};

function shipPop() {
    if (document.getElementById("ship-pop").style.display != "block") {
        document.getElementById("ship-pop").style.display = "block";
        document.getElementById("ship-pop").scrollIntoView();
    } else {
        document.getElementById("ship-pop").style.display = "";
        window.scrollTo(0,0);
    };
};

function goodsPop() {
    if (document.getElementById("goods-pop").style.display != "block") {
        document.getElementById("goods-pop").style.display = "block";
        document.getElementById("goods-pop").scrollIntoView();
    } else {
        document.getElementById("goods-pop").style.display = "";
        window.scrollTo(0,0);
    };
};

function goodsTypePop() {
    if (_gType == 6) {
        goodsPop();
    } else {
        if (document.getElementById("goods-type-pop").style.display != "block") {
            document.getElementById("goods-type-pop").style.display = "block";
            document.getElementById("goods-type-pop").scrollIntoView();
        } else {
            document.getElementById("goods-type-pop").style.display = "";
            window.scrollTo(0,0);
        };
    };
};

function animalsPop() {
    if (document.getElementById("animals-pop").style.display != "block") {
        document.getElementById("animals-pop").style.display = "block";
        document.getElementById("animals-pop").scrollIntoView();
    } else {
        document.getElementById("animals-pop").style.display = "";
        window.scrollTo(0,0);
    };
};
    
function animalsTypePop() {
    if (_aType == 4) {
        animalsPop();
    } else {
        if (document.getElementById("animals-type-pop").style.display != "block") {
            document.getElementById("animals-type-pop").style.display = "block";
            document.getElementById("animals-type-pop").scrollIntoView();
        } else {
            document.getElementById("animals-type-pop").style.display = "";
            window.scrollTo(0,0);
        };
    };
};

function endGamePop(x) {
    _endIndex = x;
    if (document.getElementById("end-pop").style.display != "block") {
        document.getElementById("end-pop").style.display = "block";
        var p = [
            "unsold goods tiles remaining?",
            "silverlings remaining?",
            "workers remaining?",
            "goods types sold?<br/>(max = 6)",
            "eligible buildings?",
            "animal types?<br/>(max = 5)",
            "goods tiles sold?",
            "bonus tiles?<br/>(max = 7)"
        ];
        document.getElementById("end-pop-p").innerHTML = p[x];
        document.getElementById("end-pop").scrollIntoView();
    } else {
        document.getElementById("end-pop").style.display = "";
    };
};


/******************************
******************************
    ONLOAD
******************************
******************************/

selectPlayersPop();

document.addEventListener("touchstart", function(){}, true);