var diceRoll = new Audio();
diceRoll.src = "./audio/dice-roll.mp3";

var bonusSound = new Audio();
bonusSound.src = "./audio/bonus-sound.mp3";

_pl = 0;
_rd = 0;
_ph = 0;
_pts = 0;

function rollDice(color) {
    if (_rd < 25) {
        diceRoll.play();
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
    x = parseInt(prompt("How many players (2-4)?"));
    if (isNaN(x) || x < 2 || x > 4) {
        alert("Please enter a number between 2 and 4");
        setPlayers();
    } else {
        _pl = x;
        document.getElementById("player-span").innerHTML = x;
    };
};

function randomDice(color) {
    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 6) + 1;
    z = Math.floor(Math.random() * 6) + 1;
    dice1 = "url(images/" + color + "-dice-" + x + ".png)";
    dice2 = "url(images/" + color + "-dice-" + y + ".png)";
    dice3 = "url(images/white-dice-" + z + ".png)";
    document.getElementById("roll-1-div").style.visibility = "visible";
    document.getElementById("roll-2-div").style.visibility = "visible";
    document.getElementById("roll-1-div").style.backgroundImage = dice1;
    document.getElementById("roll-2-div").style.backgroundImage = dice2;
    document.getElementById("roll-3-div").style.backgroundImage = dice3;
};

function setPhase() {
    if (_rd == 6) {
        document.getElementById("phase-span").innerHTML = "B"; _ph = 1;
    } else if (_rd == 11) {
        document.getElementById("phase-span").innerHTML = "C"; _ph = 2;
    } else if (_rd == 16) {
        document.getElementById("phase-span").innerHTML = "D"; _ph = 3;
    } else if (_rd == 21) {
        document.getElementById("phase-span").innerHTML = "E"; _ph = 4;
    };
};

function setRound() {
    document.getElementById("round-span").innerHTML = _rd - (5 * _ph);
};

function randomBonus() {
    b = Math.floor(Math.random() * 20);
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
    x = parseInt(prompt("Set points to:"));
    if (isNaN(x)) {
        alert("Please enter a number");
    } else {
        _pts = x;
        document.getElementById("total-points").innerHTML = _pts;
        alert("Points set to " + _pts);
        window.scrollTo(0,0);
    };
};

function resetPoints() {
    if (window.confirm("Are you sure you want to reset game?")) {
        window.scrollTo(0,0);
        location.reload();
    };
};

function adjustPoints() {
    x = parseInt(prompt("Adjust points by:"));
    if (isNaN(x)) {
        alert("Please enter a number");
    } else {
        _pts += x;
        document.getElementById("total-points").innerHTML = _pts;
        if (x >= 0) {
            alert("+" + x + ". " + "Your new point total is " + _pts);
        } else {
            alert(x + ". " + "Your new point total is " + _pts);
        };
        window.scrollTo(0,0);
    };
};

function addPoints() {
    x = parseInt(prompt("Points earned:"));
    if (isNaN(x)) {
        alert("Please enter a number");
    } else {
        _pts += x;
        document.getElementById("total-points").innerHTML = _pts;
        alert("+" + x + ". " + "Your new point total is " + _pts);
        window.scrollTo(0,0);
    };
};

function tapPoints(x) {
    _pts += x;
    document.getElementById("total-points").innerHTML = _pts;
    alert("+" + x + ". " + "Your new point total is " + _pts);
    window.scrollTo(0,0);
};

function regionPoints(x) {
    points = [11, 13, 16, 20, 25, 31, 38, 46];
    added = points[x] - (_ph * 2); _pts += added;
    document.getElementById("total-points").innerHTML = _pts;
    alert("+" + added + ". " + "Your new point total is " + _pts);
    window.scrollTo(0,0);
};

function sellGoods() {
    if (_pl < 2 || _pl > 4) {
        setPlayers();
        sellGoods();
    } else {
        x = parseInt(prompt("How many goods sold?"));
        if (isNaN(x) || x < 0 || x > 10) {
        alert("Please enter a number between 1 and 10");
        } else {
            _pts += x * _pl;
            document.getElementById("total-points").innerHTML = _pts;
            alert("+" + (x * _pl) + ". " + "Your new point total is " + _pts);
            window.scrollTo(0,0);
        };
    };
};

function bonusTile(x) {
    if (_pl < 2 || _pl > 4) {
        setPlayers();
    } else {
        _pts += (_pl + x);
        document.getElementById("total-points").innerHTML = _pts;
        alert("+" + (_pl + x) + ". " + "Your new point total is " + _pts);
        window.scrollTo(0,0);
    };
};

function endGamePts(x) {
    if (_rd < 25) {
        alert("These points can only be added at end of game!");
    } else {
        prompts = [
            "How many unsold goods tiles remain?",
            "How many silverlings remain?",
            "How many workers remain?",
            "How goods types sold?",
            "How many eligible buildings?",
            "How many animal types on estate?",
            "How many goods tiles sold?",
            "How many bonus tiles?"
        ];
        y = parseInt(prompt(prompts[x]));
        factors = [y, y, Math.floor(y / 2), (y*3), (y * 4), (y * 4), y, (y * 2)];
        if (isNaN(y)) {
            alert("Please enter a number");
        } else {
            _pts += factors[x];
            document.getElementById("total-points").innerHTML = _pts;
            alert("+" + factors[x] + ". " + "Your new point total is " + _pts);
        };    
    };
};

setTimeout(setPlayers, 1000);