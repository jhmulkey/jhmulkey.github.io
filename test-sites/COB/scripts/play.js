/******************************
******************************
    AUDIO
******************************
******************************/
var rollSound = new Audio();
rollSound.src = "./audio/roll-sound.mp3";

var pointSound = new Audio();
pointSound.src = "./audio/point-sound.mp3";

var silverSound = new Audio();
silverSound.src = "./audio/silver-sound.mp3";

var bonusSound = new Audio();
bonusSound.src = "./audio/bonus-sound.mp3";


/******************************
******************************
    GLOBALS
******************************
******************************/
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

var _endGameIndexUsed = [false,false,false,false,false,false];
var _k1623Used = false;


/******************************
******************************
    PRIMARY FUNCTIONS
******************************
******************************/
function setPlayers(x) {
    _pl = x;
    document.getElementById("latest-points-span").innerHTML = "Players: " + _pl;
    playerOrderPop();
};

function initializeWorkers(x) {
    if (x > _pl) {
        alert("Cannot be player " + x + " in a " + _pl + " player game")
    } else {
        _workers = x;
        document.getElementById("worker-count").innerHTML = _workers;
        colorPop();
    };
};

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
            adjustWorkers(_mines, "mines");
        };
    } else if (_rd >= 25) {
        if (window.confirm("Click OK to add any earned silverlings and workers before cacluating end of game points.")) {
            endGameAdjust();
        };
    };
};

function randomBonus() {
    var b = Math.floor(Math.random() * 20);
    if (b == 9) {
        bonusSound.play();
        window.open("bonus.html");
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

function adjustWorkers(x, name, trade, type) {
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
        if ((_workers + x) < 0 && x < 0) {
            alert("You don't have enough workers");
            workerPop();
            return;
        } else {
            _workers += x;
        };
        pointSound.play();
    };
    document.getElementById("worker-count").innerHTML = _workers;
    if (name == "used") {
        var log = Math.abs(added) + " workers used";
        workerPop();
    } else {
        var log = added + " workers for " + name;
    };
    latestPointsColor("black");
    document.getElementById("latest-points-span").innerHTML = log;
    activityLog(log);
    if (type == "building") {
        buildingPop();
    };
    window.scrollTo(0,0);
};

function adjustWorkersNL(x) {
    _workers += x;
    document.getElementById("worker-count").innerHTML = _workers;
}

function setWorkers(x) {
    var x = prompt("Set workers to:");
    if (x === null) {
        return;
    } else {
        var y = parseInt(x);
    };
    if (isNaN(y)) {
        alert("Please enter a number");
    } else {
        _workers = y;
        document.getElementById("worker-count").innerHTML = _workers;
        var log = "workers set to " + y;
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
        var x = prompt("Set mines to:");
        if (x === null) {
            return;
        } else {
            var y = parseInt(x);
        };
        if (isNaN(y)) {
            alert("Please enter a number");
        } else if (y > 3) {
            alert("no more than 3 mines may be added to estate");
        } else if (y < 0) {
            alert("mines cannot be less than 0");
        } else {
            _mines = y;
            document.getElementById("mine-span").innerHTML = _mines;
            var log = "mines set to " + y;
            latestPointsColor("red");
            document.getElementById("latest-points-span").innerHTML = log;
            activityLog(log, "red");
            pointSound.play();
            window.scrollTo(0,0);
        };
    };  
};

function adjustSilver(x, i, type) {
    var sources = [
        "adjustment",
        "spent",
        "for goods sale",
        "for bank",
        "for mines",
        "for dice trade",        
    ];
    if (i == 0) {
        var y = prompt("Set silverlings to:");
        if (y === null) {
            return;
        } else {
            var z = parseInt(y);
        };
        if (isNaN(z)) {
            alert("Please enter a number");
            return;
        } else {
            _silver = z;
            document.getElementById("silver-count").innerHTML = _silver;
            var log = "silverlings set to " + z;
            latestPointsColor("red");
            document.getElementById("latest-points-span").innerHTML = log;
            activityLog(log, "red");
            document.getElementById("silver-pop").style.display = "none";
        };
    } else if (i == 1) {
        if ((_silver + x) < 0) {
            alert("You don't have enough silverlings");
            silverPop();
            return;
        } else {
            _silver += x;
            document.getElementById("silver-count").innerHTML = _silver;
            var log = Math.abs(x) + " silverlings " + sources[i];
            latestPointsColor("black");
            document.getElementById("latest-points-span").innerHTML = log;
            activityLog(log);
            document.getElementById("silver-pop").style.display = "none";
        };
    } else {
        _silver += x;
        document.getElementById("silver-count").innerHTML = _silver;
        var log = x + " silverlings " + sources[i];
        latestPointsColor("black");
        document.getElementById("latest-points-span").innerHTML = log;
        activityLog(log);
    };
    silverSound.play();
    if (type == "building") {
        buildingPop();
    };
    window.scrollTo(0,0);
}

function hide(x) {
    if (document.getElementById("roll-" + x + "-div").style.visibility == "visible") {
        document.getElementById("roll-" + x + "-div").style.visibility = "hidden";
    } else {
        document.getElementById("roll-" + x + "-div").style.visibility = "visible";
    };
};

function setPoints() {
    var x = prompt("Set points to:");
    if (x === null) {
        return;
    } else {
        var y = parseInt(x);
    };
    if (isNaN(y)) {
        alert("Please enter a number");
    } else {
        _pts = x;
        document.getElementById("total-points").innerHTML = _pts;
        var log = "points set to " + x;
        latestPointsColor("red");
        document.getElementById("latest-points-span").innerHTML = log;
        activityLog(log, "red");
        pointSound.play();
        masterPop();
        window.scrollTo(0,0);
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
    animalPop();
};

function tapPoints(x, name, type) {
    _pts += x;
    document.getElementById("total-points").innerHTML = _pts;
    var log = x + " points for " + name;
    latestPointsColor("black");
    document.getElementById("latest-points-span").innerHTML = log;
    activityLog(log);
    pointSound.play();
    if (type == "building") {
        buildingPop();
    };
    window.scrollTo(0,0);
};

function bonusTile(x) {
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

function quickEndGamePts(x, i) {
    if (_endGameIndexUsed[i] === true) {
        alert("These points have already been added");
    } else {
        var factors = [x, x, Math.floor(x / 2), (x * 3), (x * 4), x, (x * 2)];
        var labels = [
            "unsold goods tiles",
            "unspent silverlings",
            "unused workers",
            "goods types sold",
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

function k1623Points(x) {
    _pts += (x * 4);
    document.getElementById("total-points").innerHTML = _pts;
    _k1623Used = true;
    var log = (x * 4) + " points for eligible buildings"
    latestPointsColor("blue")
    document.getElementById("latest-points-span").innerHTML = log;
    activityLog(log, "blue");
    pointSound.play();
    document.getElementById("k1623-pop").style.display = "none";
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
        adjustWorkersNL(_mines, "mines")
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

function goodsType(i) {
    if (i == 0) {
        _a.blue = true;
        document.getElementById("blue").style.display = "none";
    } else if (i == 1) {
        _a.brown = true
        document.getElementById("brown").style.display = "none";
    } else if (i == 2) {
        _a.orange = true
        document.getElementById("orange").style.display = "none";
    } else if (i == 3) {
        _a.pink = true
        document.getElementById("pink").style.display = "none";
    } else if (i == 4) {
        _a.purple = true
        document.getElementById("purple").style.display = "none";
    } else if (i == 5) {
        _a.red = true
        document.getElementById("red").style.display = "none";
    }
    document.getElementById("goods-type-pop").style.display = "none";
    _gType++;
    console.log(_gType);
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

function masterPop() {
   if (document.getElementById("master-pop").style.display != "block") {
        document.getElementById("master-pop").style.display = "block";
        document.getElementById("master-pop").scrollIntoView();
    } else {
        document.getElementById("master-pop").style.display = "";
        window.scrollTo(0,0);
    }; 
};

    function masterLink(i) {
        var links = [
            "./setup.html",
            "./reference.html",
            "./expansion.html",
        ];
        if (i == 3) {
            setPoints();
        } else if (i == "PL") {
            pointLogPop();
        } else {
            window.open(links[i], "_blank");
        };
    };

function pointLogPop() {
    if (document.getElementById("point-log").style.display != "block") {
        masterPop();
        document.getElementById("point-log").style.display = "block";
        document.getElementById("point-log").scrollIntoView();
    } else {
        document.getElementById("point-log").style.display = "";
        window.scrollTo(0,0);
    };
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

function buildingPop() {
    if (document.getElementById("quickadd-building").style.display != "flex") {
        document.getElementById("quickadd-building").style.display = "flex";
        document.getElementById("quickadd-1").style.display = "none";
        document.getElementById("quickadd-building").scrollIntoView();
    } else {
        document.getElementById("quickadd-building").style.display = "";
        document.getElementById("quickadd-1").style.display = "flex";
        window.scrollTo(0,0);
    };
};

    function buildingActionPop(i) {
        var actions = [
            "Take 1 ship or animal tile from any depot except black depot",
            "Take 1 mine, castle, or knowledge tile from any depot except black depot",
            "Take 1 building tile from any depot except black depot",
            "Add any tile from your storage spaces to your estate",
        ];
        if (document.getElementById("building-action-pop").style.display != "block") {
            document.getElementById("building-action-pop").style.display = "block";
            document.getElementById("building-action-p").innerHTML = actions[i];
            document.getElementById("quickadd-building").style.display = "";
            document.getElementById("building-action-pop").scrollIntoView();
        } else {
            document.getElementById("building-action-pop").style.display = "";
            document.getElementById("quickadd-building").style.display = "";
            document.getElementById("quickadd-1").style.display = "flex";
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

    function goodsTypeSkip() {
        document.getElementById("goods-type-pop").style.display = "none";
        goodsPop();
    };

function animalPop() {
    if (document.getElementById("animal-pop").style.display != "block") {
        document.getElementById("animal-pop").style.display = "block";
        document.getElementById("quickadd-1").style.display = "none";
        document.getElementById("animal-pop").scrollIntoView();
    } else {
        document.getElementById("animal-pop").style.display = "";
        document.getElementById("quickadd-1").style.display = "flex";
        window.scrollTo(0,0);
    };
};

function takeActionPop(i, type) {
    var actions = [
        "Take 1 ship or animal tile from any depot except black depot",
        "Take 1 mine, castle, or knowledge tile from any depot except black depot",
        "Take 1 building tile from any depot except black depot",
        "Add any tile from your storage spaces to your estate",
        "Take any action you'd like as if you had a third dice with any number you choose"
    ];
    if (document.getElementById("take-action-pop").style.display != "block") {
        document.getElementById("take-action-pop").style.display = "block";
        document.getElementById("take-action-p").innerHTML = actions[i];
        document.getElementById("take-action-pop").scrollIntoView();
    } else {
        document.getElementById("take-action-pop").style.display = "";
        if (type === "building") {
            document.getElementById("quickadd-building").scrollIntoView();
        } else {
            window.scrollTo(0,0);
        };
    };
};

function k1623Pop() {
    if (_k1623Used === true) {
        alert("These points have already been added");
    } else {
        if (document.getElementById("k1623-pop").style.display != "block") {
            document.getElementById("k1623-pop").style.display = "block";
            document.getElementById("k1623-pop").scrollIntoView();
        } else {
            document.getElementById("k1623-pop").style.display = "";
            window.scrollTo(0,0);
        };
    };
};


/******************************
******************************
    ONLOAD
******************************
******************************/
selectPlayersPop();