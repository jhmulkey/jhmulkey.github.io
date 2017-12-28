var rollSound = new Audio();
rollSound.src = "./audio/roll-sound.mp3";

var pointSound = new Audio();
pointSound.src = "./audio/point-sound.mp3";

var bonusSound = new Audio();
bonusSound.src = "./audio/bonus-sound.mp3";

var _pl = 0;
var _rd = 0;
var _ph = 0;
var _pts = 0;
var _color;
var _endIndex;
var _adjPh

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
    } else if (_rd >= 25) {
        if (window.confirm("End of Game. Ok to reset?")) {
            window.scrollTo(0,0);
            location.reload();
        };
    };
};

function setPlayers(x) {
    _pl = x;
    document.getElementById("player-span").innerHTML = x;
    colorPop();
};

function setColor(x) {
    var colors = ["", "black", "red", "green", "blue"];
    _color = colors[x];
    document.getElementById("select-color-pop").style.display = "none";
    document.getElementById("main-wrapper-div").style.display = "block";
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

function adjustPoints() {
    var x = parseInt(prompt("Adjust points by:"));
    if (isNaN(x)) {
        alert("Please enter a number");
    } else {
        _pts += x;
        document.getElementById("total-points").innerHTML = _pts;
        var log = "points adjusted by " + x;
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

function sellGoods(x) {
    _pts += x * _pl;
    document.getElementById("total-points").innerHTML = _pts;
    var log = (x * _pl) + " points for sale of " + x + " goods";
    latestPointsColor("black");
    document.getElementById("latest-points-span").innerHTML = log;
    activityLog(log);
    pointSound.play();
    document.getElementById("goods-pop").style.display = "none";
    window.scrollTo(0,0);
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
        alert("No more than 6 goods types possible!");
    } else if (_endIndex == 5 && x > 5) {
        alert("No more than 5 animal types possible!");
    } else if (_endIndex == 7 && x > 7) {
        alert("No more than 7 bonus tiles possible!");
    } else {
        var factors = [x, x, Math.floor(x / 2), (x*3), (x * 4), (x * 4), x, (x * 2)];
        _pts += factors[_endIndex];
        document.getElementById("total-points").innerHTML = _pts;
        var log = factors[_endIndex] + " points for " + x + " " + keywords[_endIndex];
        latestPointsColor("blue");
        document.getElementById("latest-points-span").innerHTML = log;
        activityLog(log, "blue");
        pointSound.play();
        document.getElementById("end-pop").style.display = "none";
        document.getElementById("unsold-goods").scrollIntoView();
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

function playerPop() {
    window.scrollTo(0,0);
    document.getElementById("main-wrapper-div").style.display = "none";
    document.getElementById("select-players-pop").style.display = "block";
};

function colorPop() {
    document.getElementById("select-players-pop").style.display = "none";
    document.getElementById("select-color-pop").style.display = "block";
};

function phasePop() {
    if (document.getElementById("select-phase-pop").style.display == "" || document.getElementById("select-phase-pop").style.display == "none") {
        document.getElementById("select-phase-pop").style.display = "block";
        document.getElementById("select-phase-pop").scrollIntoView();
    } else {
        document.getElementById("select-phase-pop").style.display = "";
        window.scrollTo(0,0);
    };
};

function pointsPop() {
   if (document.getElementById("set-adjust-points-pop").style.display == "" || document.getElementById("set-adjust-points-pop").style.display == "none") {
        document.getElementById("set-adjust-points-pop").style.display = "block";
        document.getElementById("set-adjust-points-pop").scrollIntoView();
    } else {
        document.getElementById("set-adjust-points-pop").style.display = "";
        window.scrollTo(0,0);
    }; 
};

function goodsPop() {
    if (document.getElementById("goods-pop").style.display == "" || document.getElementById("goods-pop").style.display == "none") {
        document.getElementById("goods-pop").style.display = "block";
        document.getElementById("goods-pop").scrollIntoView();
    } else {
        document.getElementById("goods-pop").style.display = "";
    };
};

function animalsPop() {
    if (document.getElementById("animals-pop").style.display == "" || document.getElementById("animals-pop").style.display == "none") {
        document.getElementById("animals-pop").style.display = "block";
        document.getElementById("animals-pop").scrollIntoView();
    } else {
        document.getElementById("animals-pop").style.display = "";
    };
};

function endGamePop(x) {
    if (_rd < 25) {
        alert("These points can only be added at end of game!");
    } else {
        _endIndex = x;
        if (document.getElementById("end-pop").style.display == "" || document.getElementById("end-pop").style.display == "none") {
            document.getElementById("end-pop").style.display = "block";
            var p = [
                "How many unsold goods tiles remain?",
                "How many silverlings remain?",
                "How many workers remain?",
                "How goods types sold?<br/>(max = 6)",
                "How many eligible buildings?",
                "How many animal types on estate?<br/>(max = 5)",
                "How many goods tiles sold?",
                "How many bonus tiles?<br/>(max = 7)"
            ];
            document.getElementById("end-pop-p").innerHTML = p[x];
            document.getElementById("end-pop").scrollIntoView();
        } else {
            document.getElementById("end-pop").style.display = "";
        };
    };
};

playerPop();