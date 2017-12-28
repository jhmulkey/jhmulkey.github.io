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

function setPlayers() {
    var x = parseInt(prompt("How many players (2-4)?"));
    if (isNaN(x) || x < 2 || x > 4) {
        alert("Please enter a number between 2 and 4");
    } else {
        _pl = x;
        document.getElementById("player-span").innerHTML = x;
    };
    if (!_color) {
        setColor();
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

function adjustPhase() {
    var newPhase = prompt("Enter Phase (A-E)");
    if (!isNaN(newPhase) || newPhase.toUpperCase() > "E" || newPhase.length > 1) {
        alert("Please enter a letter between A-E");
    } else {
        adjustRound(newPhase.toUpperCase());
    };
};

function adjustRound(phase) {
    var newRound = parseInt(prompt("Enter Round (1-5)"));
    if (isNaN(newRound) || newRound < 1 || newRound > 5) {
        alert("Please enter a number between 1-5");
        adjustPhase();
    } else {
        if (phase == "A") {
            _rd = newRound;
            _ph = 0;
        } else if (phase == "B") {
            _rd = newRound + 5;
            _ph = 1;
        } else if (phase == "C") {
            _rd = newRound + 10;
            _ph = 2;
        } else if (phase == "D") {
            _rd = newRound + 15;
            _ph = 3;
        } else if (phase == "E") {
            _rd = newRound + 20;
            _ph = 4;
        };
        document.getElementById("phase-span").innerHTML = phase;
        document.getElementById("round-span").innerHTML = _rd - (5 * _ph);
        activityLog("PHASE " + phase, "black", "10px");
        var log = "round adjusted to Phase " + phase + " Round " + newRound;
        latestPointsColor("red");
        document.getElementById("latest-points-span").innerHTML = log;
        activityLog(log, "red");
        rollSound.play();
        randomDice(_color);
    };
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

function setOrAdjust() {
    var x = parseInt(prompt("Set or adjust? (1 = set | 2 = adjust)"));
    if (isNaN(x) || x < 1 || x > 2) {
        alert("Please enter a number between 1-2");
    } else {
        if (x == 1) {
            setPoints();
        } else if (x == 2) {
            adjustPoints();
        };
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
        window.scrollTo(0,0);
    };
};

function resetGame() {
    if (window.confirm("Are you sure you want to reset game?")) {
        window.scrollTo(0,0);
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

function sellGoods() {
    if (_pl < 2 || _pl > 4) {
        setPlayers();
        sellGoods();
    } else {
        var x = parseInt(prompt("How many goods sold?"));
        if (isNaN(x) || x < 0 || x > 10) {
        alert("Please enter a number between 1 and 10");
        } else {
            _pts += x * _pl;
            document.getElementById("total-points").innerHTML = _pts;
            var log = (x * _pl) + " points for sale of " + x + " goods";
            latestPointsColor("black");
            document.getElementById("latest-points-span").innerHTML = log;
            activityLog(log);
            pointSound.play();
            window.scrollTo(0,0);
        };
    };
};

function animals() {
    x = parseInt(prompt("Points earned:"));
    if (isNaN(x) || x < 1) {
        alert("Please enter a number > 0");
    } else {
        _pts += x;
        document.getElementById("total-points").innerHTML = _pts;
        var log = x + " points for animals";
        latestPointsColor("black");
        document.getElementById("latest-points-span").innerHTML = log;
        activityLog(log);
        pointSound.play();
        window.scrollTo(0,0);
    };
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
    if (_rd < 25) {
        alert("These points can only be added at end of game!");
    } else {
        var prompts = [
            "How many unsold goods tiles remain?",
            "How many silverlings remain?",
            "How many workers remain?",
            "How goods types sold?",
            "How many eligible buildings?",
            "How many animal types on estate?",
            "How many goods tiles sold?",
            "How many bonus tiles?"
        ];
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
        var y = parseInt(prompt(prompts[x]));
        var factors = [y, y, Math.floor(y / 2), (y*3), (y * 4), (y * 4), y, (y * 2)];
        if (isNaN(y) || y < 1) {
            alert("Please enter a number > 0");
        } else {
            _pts += factors[x];
            document.getElementById("total-points").innerHTML = _pts;
            var log = factors[x] + " points for " + y + " " + keywords[x];
            latestPointsColor("blue");
            document.getElementById("latest-points-span").innerHTML = log;
            activityLog(log, "blue");
            pointSound.play();
        };    
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

function setColor() {
    var colorNumber = parseInt(prompt("Select dice color (1 = black | 2 = red | 3 = green | 4 = blue)"));
    if (isNaN(colorNumber) || colorNumber < 1 || colorNumber > 4) {
        alert("Please enter a number between 1-4");
        setColor();
    } else {
        var colors = ["", "black", "red", "green", "blue"];
        _color = colors[colorNumber];
    };
};

setTimeout(setPlayers, 1000);