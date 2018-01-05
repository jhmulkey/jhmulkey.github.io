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
var _adjPh;
var _mines = 0;
var _silver = 1; 
var _workers;
var _unsold = 3;
var _sold = 0;
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

/******************************
******************************
    PRIMARY FUNCTIONS
******************************
******************************/
function setPlayers(x) {
    _pl = x;
    var log = "Players: " + _pl;
    latestActivity("blue",log);
    pop("ps","block");
    pop("pos","block");
};

function initializeWorkers(x) {
    if (x > _pl) {
        alert("Cannot be player " + x + " in a " + _pl + " player game")
    } else {
        _workers = x;
        document.getElementById("worker-count").innerHTML = _workers;
        pop("pos","block");
        pop("cs","block");
    };
};

function setColor(color) {
    _color = color;
    pop("cs","block");
    document.getElementById("main").style.display = "block";
};

function rollDice(color) {
    if (_rd < 25) {
        rollSound.play();
        _rd++;
        randomDice(color);
        setPhaseRound();
        if (document.getElementById("bonus-checkbox").checked) {
            randomBonus();
        };
        if (_mines > 0 && (_rd == 6 || _rd == 11 || _rd == 16 || _rd == 21)) {
            adjustSilver(_mines,4);
        };
        if (_k.k2 === true && (_rd == 6 || _rd == 11 || _rd == 16 || _rd == 21)) {
            adjustWorkers(_mines,"mines");
        };
    } else if (_rd >= 25) {
        if (window.confirm("Click OK to cacluate end of game points.")) {
            document.getElementById("latest-activity-span").innerHTML = "calculating end game points";
            totalScore();
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
    document.getElementById("dice-1").innerHTML = x;
    document.getElementById("dice-2").innerHTML = y;
    if (document.getElementById("roll-3-div").style.visibility == "visible") {
        var log = "rolled " + x + " and " + y + " (white: " + z + ")"
    } else {
        var log = "rolled " + x + " and " + y
    }
    latestActivity("black",log);
    activityLog(log);
};

function setPhaseRound() {
    if (_rd == 1) {
        document.getElementById("phase-span").innerHTML = "A"
        activityLog("Phase A","black","25px","20px","h1");
    } else if (_rd == 6) {
        document.getElementById("phase-span").innerHTML = "B"; _ph = 1;
        activityLog("Phase B","black","25px","20px","h1");
    } else if (_rd == 11) {
        document.getElementById("phase-span").innerHTML = "C"; _ph = 2;
        activityLog("Phase C","black","25px","20px","h1");
    } else if (_rd == 16) {
        document.getElementById("phase-span").innerHTML = "D"; _ph = 3;
        activityLog("Phase D","black","25px","20px","h1");
    } else if (_rd == 21) {
        document.getElementById("phase-span").innerHTML = "E"; _ph = 4;
        activityLog("Phase E","black","25px","20px","h1");
    };
    document.getElementById("round-span").innerHTML = _rd - (5 * _ph);
};

function adjustPhase(x) {
    _adjPh = x;
    pop("re","block","pe");
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
    activityLog("Phase " + _adjPh,"black","25px","20px","h1");
    console.log("hello");
    var log = "round adjusted to Phase " + _adjPh + " Round " + x;
    latestActivity("red",log);
    activityLog(log,"red");
    rollSound.play();
    randomDice(_color);
    pop('re','block');
};

function randomBonus() {
    var b = Math.floor(Math.random() * 20);
    if (b == 9) {
        bonusSound.play();
        window.open("bonus.html");
    };
};

function adjustWorkers(x,name,trade,type) {
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
            pop("w","block");
            return;
        } else {
            _workers += x;
        };
        pointSound.play();
    };
    document.getElementById("worker-count").innerHTML = _workers;
    if (name == "used") {
        var log = Math.abs(added) + " workers used";
        pop("w","block");
    } else {
        var log = added + " workers for " + name;
    };
    latestActivity("black",log);
    activityLog(log);
    if (type == "building") {
        pop("b","flex");
    };
    window.scrollTo(0,0);
};

function setWorkers() {
    var x = prompt("Set workers to:");
    if (x === null) {
        return;
    } else {
        var y = parseInt(x);
    };
    if (isNaN(y)) {
        alert("Please enter a number");
        setWorkers();
    } else {
        _workers = y;
        document.getElementById("worker-count").innerHTML = _workers;
        var log = "workers set to " + y;
        latestActivity("red",log);
        activityLog(log,"red");
        pointSound.play();
        pop("w","block");
        window.scrollTo(0,0);
    };
};

function setMines(x) {
    _mines = x;
    document.getElementById("mine-span").innerHTML = _mines;
    var log = "mines set to " + x;
    latestActivity("red",log);
    activityLog(log,"red");
    pointSound.play();
    pop('ms','block');
};

function addMines() {
    if (_mines == 3) {
        alert("no more than 3 mines may be added to estate")
    } else {
        _mines += 1;
        document.getElementById("mine-span").innerHTML = _mines;
        var log = "1 mine added to estate";
        latestActivity("black",log);
        activityLog(log);
        pointSound.play();
        window.scrollTo(0,0);
    };
};

function adjustSilver(x,i,type) {
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
            latestActivity("red",log);
            activityLog(log,"red");
            pop("si","block");
        };
    } else if (i == 1) {
        if ((_silver + x) < 0) {
            alert("You don't have enough silverlings");
            pop("si","block");
            return;
        } else {
            _silver += x;
            document.getElementById("silver-count").innerHTML = _silver;
            var log = Math.abs(x) + " silverlings " + sources[i];
            latestActivity("black",log);
            activityLog(log);
            pop("si","block");
        };
    } else {
        _silver += x;
        document.getElementById("silver-count").innerHTML = _silver;
        var log = x + " silverlings " + sources[i];
        latestActivity("black",log);
        activityLog(log);
    };
    silverSound.play();
    if (type == "building") {
        pop("b","flex");
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
        setPoints();
    } else {
        _pts = y;
        document.getElementById("total-points").innerHTML = _pts;
        var log = "points set to " + y;
        latestActivity("red",log);
        activityLog(log,"red");
        pointSound.play();
        pop("mm","block");
        window.scrollTo(0,0);
    };
};

function regionPoints(x) {
    var points = [11, 13, 16, 20, 25, 31, 38, 46];
    var added = points[x] - (_ph * 2); 
    _pts += added;
    document.getElementById("total-points").innerHTML = _pts;
    var log = added + " points for region size " + (x + 1) + " in Phase " + document.getElementById("phase-span").innerHTML;
    latestActivity("black",log);
    activityLog(log);
    pointSound.play();
    pop('cr','block');
};

function addGoods(x) {
    _unsold += x;
    document.getElementById("unsold-span").innerHTML = _unsold;
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
        _unsold -= x;
        _sold += x;
        _pts += x * _pl;
        if (_k.k3 === true) {
            adjustSilver(2,2);
        } else {
            adjustSilver(1,2);
        };
        if (_k.k4 === true) {
            adjustWorkers(1, "goods sale");
        };
        document.getElementById("unsold-span").innerHTML = _unsold;
        document.getElementById("sold-span").innerHTML = _sold;
        document.getElementById("total-points").innerHTML = _pts;
        var log = (x * _pl) + " points for sale of " + x + " goods";
        latestActivity("black",log);
        activityLog(log);
        pop("sg","block");
    };
};

function animals(x) {
    _pts += x;
    document.getElementById("total-points").innerHTML = _pts;
    var log = x + " points for animals";
    latestActivity("black",log);
    activityLog(log);
    pointSound.play();
    pop("a","block");
};

function tapPoints(x,name,type) {
    _pts += x;
    document.getElementById("total-points").innerHTML = _pts;
    var log = x + " points for " + name;
    latestActivity("black",log);
    activityLog(log);
    pointSound.play();
    if (type == "building") {
        pop("b","flex");
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
    latestActivity("black",log);
    activityLog(log);
    pointSound.play();
    window.scrollTo(0,0);
};

function activityLog(log,color,size,marginTop,element) {
    if (element) {
        var elementNode = document.createElement(element);
    } else {
        var elementNode = document.createElement("p");
    }
    if (color) {
        elementNode.style.color = color;
    };
    if (marginTop) {
        elementNode.style.marginTop = marginTop;
    };
    if (size) {
        elementNode.style.fontSize = size;
    }
    elementNode.style.fontWeight = "bold";
    var textNode = document.createTextNode(log);
    elementNode.appendChild(textNode);
    document.getElementById("pu-al").appendChild(elementNode);
};

function latestActivity(color,log) {
    document.getElementById("latest-activity-span").style.color = color;
    document.getElementById("latest-activity-span").innerHTML = log;
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
        latestActivity("black",log);
        activityLog(log);
        pointSound.play();
    } else {
       if (window.confirm("Knowledge Tile " + numbers[i] + " is already on estate. Remove?")) {
           _k[values[i]] = false;
           document.getElementById("k" + numbers[i]).style.borderColor = "black";
           document.getElementById("k" + numbers[i]).style.borderStyle = "solid";
           document.getElementById("k" + numbers[i]).style.borderWidth = "2px";
           var log = "knowledge tile " + numbers[i] + " removed";
           latestActivity("red",log);
           activityLog(log,"red");
           pointSound.play();
        };
    };
    pop('k','flex');
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

function totalScore() {
    
    document.getElementById("rolled-dice-flex-div").style.display = "none";
    document.getElementById("main-tiles").style.display = "none";
    
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
    };
        
    if (_k["k1623"] === true) {
        var b = prompt("How many eligible buildings for Knowledge Tiles 16-23?");
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
    };
    
    if (_sold > 0 && _k["k25"] === true ) {
        soldPoints += _sold;
    };
    
    if (_bonus > 0 && _k["k26"] === true ) {
        bonusPoints += (_bonus * 2);
    };
    
    if (_unsold > 0) {
        unsoldPoints += _unsold;
    };
    
    if (_mines > 0) {
        _silver += _mines;
        document.getElementById("silver-count").innerHTML = _silver;
    };
    
    silverPoints += _silver;
    
    if (_mines > 0 && _k["k2"] === true) {
        _workers += _mines;
        document.getElementById("worker-count").innerHTML = _workers;
    };
    
    if (_workers > 1) {
        workerPoints += (Math.floor(_workers / 2));
    }; 
    
    _pts += (gType * 3) + (eBuild * 4) + (aType * 4) + soldPoints + bonusPoints + unsoldPoints + silverPoints + workerPoints;
    document.getElementById("total-points").innerHTML = _pts;
    
    if (unsoldPoints > 0) {
        var unsoldLog = unsoldPoints + " points for " + _unsold + " unsold goods";
        activityLog(unsoldLog,"blue");
    };
    
    if (silverPoints > 0) {
        var silverLog = silverPoints + " points for " + _silver + " unspent silverlings";
        activityLog(silverLog,"blue");
    };
    
    if (workerPoints > 0) {
        var workerLog = workerPoints + " points for " + _workers + " unused workers";
        activityLog(workerLog,"blue");
    };
    
    if (gType > 0) {
        var gTypeLog = (gType * 3) + " points for " + gType + " goods types sold";
        activityLog(gTypeLog,"blue");
    };
    
    if (eBuild > 0) {
        var eBuildLog = (eBuild * 4) + " points for " + eBuild + " eligible buildings";
        activityLog(eBuildLog,"blue");
    };
    
    if (aType > 0) {
        var aTypeLog = (aType * 4) + " points for " + aType + " animal types";
        activityLog(aTypeLog,"blue");
    };
    
    if (soldPoints > 0) {
        var soldLog = soldPoints + " points for " + _sold + " sold goods";
        activityLog(soldLog,"blue");
    };
    
    if (bonusPoints > 0) {
        var bonusLog = bonusPoints + " points for " + _bonus + " bonus tiles";
        activityLog(bonusLog,"blue");
    };
    
    pointSound.play();
    latestActivity("blue","FINAL SCORE");
};


/******************************
******************************
    POPS
******************************
******************************/
function pop(open,display,close) {
   if (document.getElementById("pu-"+open).style.display != display) {
        document.getElementById("pu-"+open).style.display = display;
        document.getElementById("pu-"+open).scrollIntoView();
        document.getElementById("main").style.display = "none";
    } else {
        document.getElementById("pu-"+open).style.display = "none";
        document.getElementById("main").style.display = "block";
    };
    if (close) {
        document.getElementById("pu-"+close).style.display = "none";
    }
    scrollTo(0,0);
};

function pu_bm(i,building,castle) {
    var actions = [
        "Take 1 ship or animal tile from any depot except black depot",
        "Take 1 mine, castle, or knowledge tile from any depot except black depot",
        "Take 1 building tile from any depot except black depot",
        "Add any tile from your storage spaces to your estate",
        "Take any action you'd like as if you had a third dice with any number you choose"
    ];
    if (document.getElementById("pu-bm").style.display != "block") {
        document.getElementById("pu-bm").style.display = "block";
        document.getElementById("pu-bm-h1").innerHTML = building;
        document.getElementById("pu-bm-p").innerHTML = actions[i];
        if (castle) {
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
    ];
    if (document.getElementById("pu-km").style.display != "block") {
        document.getElementById("pu-km").style.display = "block";
        document.getElementById("pu-km-h1").innerHTML = "Knowledge Tile " + number;
        document.getElementById("pu-km-p").innerHTML = actions[i];
        document.getElementById("pu-k").style.display = "none"
    } else {
        document.getElementById("pu-km").style.display = "none";
    };
};

/******************************
******************************
    ONLOAD
******************************
******************************/
pop("ps","block");