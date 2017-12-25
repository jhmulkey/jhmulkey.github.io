var diceRoll = new Audio();
diceRoll.src = "./audio/dice-roll.mp3";

var bonusSound = new Audio();
bonusSound.src = "./audio/bonus-sound.mp3";

players = 0;
    
r = 0;

p = 0;

whiteArray = [
    "url(images/white-dice-1.png)",
    "url(images/white-dice-2.png)",
    "url(images/white-dice-3.png)",
    "url(images/white-dice-4.png)",
    "url(images/white-dice-5.png)",
    "url(images/white-dice-6.png)"
];

blackArray = [
    "url(images/black-dice-1.png)",
    "url(images/black-dice-2.png)",
    "url(images/black-dice-3.png)",
    "url(images/black-dice-4.png)",
    "url(images/black-dice-5.png)",
    "url(images/black-dice-6.png)"
];

redArray = [
    "url(images/red-dice-1.png)",
    "url(images/red-dice-2.png)",
    "url(images/red-dice-3.png)",
    "url(images/red-dice-4.png)",
    "url(images/red-dice-5.png)",
    "url(images/red-dice-6.png)"
];

greenArray = [
    "url(images/green-dice-1.png)",
    "url(images/green-dice-2.png)",
    "url(images/green-dice-3.png)",
    "url(images/green-dice-4.png)",
    "url(images/green-dice-5.png)",
    "url(images/green-dice-6.png)"
];

blueArray = [
    "url(images/blue-dice-1.png)",
    "url(images/blue-dice-2.png)",
    "url(images/blue-dice-3.png)",
    "url(images/blue-dice-4.png)",
    "url(images/blue-dice-5.png)",
    "url(images/blue-dice-6.png)"
];

function rollWhiteDice() {
    diceRoll.play();
    x = whiteArray[(Math.floor(Math.random() * 6))];
    document.getElementById("roll-1-div").style.backgroundImage = x;
};

function rollDice(color) {
    if (r < 25) {
        diceRoll.play();
        r++;
        randomDice(color);
        setPhase();
        setRound();
        if (document.getElementById("bonus-checkbox").checked) {
            randomBonus();
        }
    } else if (r >= 25) {
        if (window.confirm("End of Game. Ok to reset?")) {
            location.reload();
        };
    }
};

function setPlayers() {
    x = prompt("How many players (2-4)?");
    y = parseInt(x);
    if (isNaN(y) || y < 2 || y > 4) {
        alert("Please enter a number between 2 and 4");
        setPlayers();
    } else {
        players = y;
        document.getElementById("player-span").innerHTML = y;
    };
};

function randomDice(color) {
    diceRoll.play();
    if (color == "black") {
        x = blackArray[(Math.floor(Math.random() * 6))];
        y = blackArray[(Math.floor(Math.random() * 6))];
    } else if (color == "red") {
        x = redArray[(Math.floor(Math.random() * 6))];
        y = redArray[(Math.floor(Math.random() * 6))];
    } else if (color == "green") {
        x = greenArray[(Math.floor(Math.random() * 6))];
        y = greenArray[(Math.floor(Math.random() * 6))];
    } else if (color == "blue") {
        x = blueArray[(Math.floor(Math.random() * 6))];
        y = blueArray[(Math.floor(Math.random() * 6))];
    };
    z = whiteArray[(Math.floor(Math.random() * 6))];
    document.getElementById("roll-1-div").style.visibility = "visible";
    document.getElementById("roll-2-div").style.visibility = "visible";
    document.getElementById("roll-1-div").style.backgroundImage = x;
    document.getElementById("roll-2-div").style.backgroundImage = y;
    document.getElementById("roll-3-div").style.backgroundImage = z;
};

function randomBonus() {
    b = Math.floor(Math.random() * 20);
    if (b == 9) {
        bonusSound.play();
        window.open("bonus.html");
    };
};

function setPhase() {
    if (r == 6) {
        document.getElementById("phase-span").innerHTML = "B";
    } else if (r == 11) {
        document.getElementById("phase-span").innerHTML = "C";
    } else if (r == 16) {
        document.getElementById("phase-span").innerHTML = "D";
    } else if (r == 21) {
        document.getElementById("phase-span").innerHTML = "E";
    };
};

function setRound() {
    if (r == 1 || r == 6 || r == 11 || r == 16 || r == 21) {
        document.getElementById("round-span").innerHTML = 1;
    } else if (r == 2 || r == 7 || r == 12 || r == 17 || r == 22) {
        document.getElementById("round-span").innerHTML = 2;
    } else if (r == 3 || r == 8 || r == 13 || r == 18 || r == 23) {
        document.getElementById("round-span").innerHTML = 3;
    } else if (r == 4 || r == 9 || r == 14 || r == 19 || r == 24) {
        document.getElementById("round-span").innerHTML = 4;
    } else if (r == 5 || r == 10 || r == 15 || r == 20 || r == 25) {
        document.getElementById("round-span").innerHTML = 5;
    };
};

function hide1() {
    if (document.getElementById("roll-1-div").style.visibility == "visible") {
        document.getElementById("roll-1-div").style.visibility = "hidden";
    } else {
        document.getElementById("roll-1-div").style.visibility = "visible";
    };
};

function hide2() {
    if (document.getElementById("roll-2-div").style.visibility == "visible") {
        document.getElementById("roll-2-div").style.visibility = "hidden";
    } else {
        document.getElementById("roll-2-div").style.visibility = "visible";
    };
};

function whiteDiceVisible() {
    if (document.getElementById("roll-3-div").style.visibility == "hidden") {
        document.getElementById("roll-3-div").style.visibility = "visible";
    } else {
        document.getElementById("roll-3-div").style.visibility = "hidden";
    };
};

function setPoints() {
    x = prompt("Set points to:");
    y = parseInt(x);
    if (isNaN(y)) {
        alert("Please enter a number");
    } else {
        p = y;
        document.getElementById("total-points").innerHTML = p;
        alert("+" + y + ". " + "Your new point total is " + p);
        window.scrollTo(0,0);
    };
};

function resetPoints() {
    if (window.confirm("Are you sure you want to reset points?")) {
        p = 0;
        document.getElementById("total-points").innerHTML = p;
        window.scrollTo(0,0);
    };
};

function adjustPoints() {
    x = prompt("Adjust points by:");
    y = parseInt(x);
    if (isNaN(y)) {
        alert("Please enter a number");
    } else {
        p += y;
        document.getElementById("total-points").innerHTML = p;
        if (y >= 0) {
            alert("+" + y + ". " + "Your new point total is " + p);
        } else {
            alert(y + ". " + "Your new point total is " + p);
            window.scrollTo(0,0);
        };
    };
};

function addPoints() {
    x = prompt("Points earned:");
    y = parseInt(x);
    if (isNaN(y)) {
        alert("Please enter a number");
    } else {
        p += y;
        document.getElementById("total-points").innerHTML = p;
        alert("+" + y + ". " + "Your new point total is " + p);
        window.scrollTo(0,0);
    };
};

function tapPoints(x) {
    p += x;
    document.getElementById("total-points").innerHTML = p;
    alert("+" + x + ". " + "Your new point total is " + p);
    window.scrollTo(0,0);
};

function regionPoints(x) {
    a = 11; b = 13; c = 16; d = 20; e = 25; f = 31; g = 38; h = 46;
    if (r > 5 && r < 11) {
        a = 9; b = 11; c = 14; d = 18; e = 23; f = 29; g = 36; h = 44;
    } else if (r > 10 && r < 16) {
        a = 7; b = 9; c = 12; d = 16; e = 21; f = 27; g = 34; h = 42;
    } else if (r > 15 && r < 21) {
        a = 5; b = 7; c = 10; d = 14; e = 19; f = 25; g = 32; h = 40;
    } else if (r > 20) {
        a = 3; b = 5; c = 8; d = 12; e = 17; f = 23; g = 30; h = 38;
    };
    if (x == 1) {
        p += a; added = a; 
    } else if (x == 2) {
        p += b; added = b; 
    } else if (x == 3) {
        p += c; added = c; 
    } else if (x == 4) {
        p += d; added = d; 
    } else if (x == 5) {
        p += e; added = e; 
    } else if (x == 6) {
        p += f; added = f; 
    } else if (x == 7) {
        p += g; added = g; 
    } else if (x == 8) {
        p += h; added = h; 
    };
    document.getElementById("total-points").innerHTML = p;
    alert("+" + added + ". " + "Your new point total is " + p);
    window.scrollTo(0,0);
};

function sellGoods() {
    if (players < 2 || players > 4) {
        setPlayers();
        sellGoods();
    } else {
        x = prompt("How many goods sold?");
        y = parseInt(x);
        if (isNaN(y) || y < 0 || y > 10) {
        alert("Please enter a number between 1 and 10");
        } else {
            if (players == 2) {
                p += y * 2;
                document.getElementById("total-points").innerHTML = p;
                alert("+" + y * 2 + ". " + "Your new point total is " + p);
                window.scrollTo(0,0);
            } else if (players == 3) {
                p += y * 3;
                document.getElementById("total-points").innerHTML = p;
                alert("+" + y * 3 + ". " + "Your new point total is " + p);
                window.scrollTo(0,0);
            } else if (players == 4) {
                p += y * 4;
                document.getElementById("total-points").innerHTML = p;
                alert("+" + y * 4 + ". " + "Your new point total is " + p);
                window.scrollTo(0,0);
            };
        };
    };
};

function bonusTile(x) {
    if (players < 2 || players > 4) {
        setPlayers();
    } else {
        if (x == 1) {
            p += (players + 3);
            document.getElementById("total-points").innerHTML = p;
            alert("+" + (players + 3) + ". " + "Your new point total is " + p);
            window.scrollTo(0,0);
        } else if (x == 2) {
            p += players;
            document.getElementById("total-points").innerHTML = p;
            alert("+" + players + ". " + "Your new point total is " + p);
            window.scrollTo(0,0);
        };
    };
};

function unsoldGoods() {
    x = prompt("How many unsold goods tiles remain?");
    y = parseInt(x);
    if (isNaN(y)) {
        alert("Please enter a number");
    } else {
        p += y;
        document.getElementById("total-points").innerHTML = p;
        alert("+" + y + ". " + "Your new point total is " + p);
    };
};

function remSilver() {
    x = prompt("How many silverlings remain?");
    y = parseInt(x);
    if (isNaN(y)) {
        alert("Please enter a number");
    } else {
        p += y;
        document.getElementById("total-points").innerHTML = p;
        alert("+" + y + ". " + "Your new point total is " + p);
    };
};

function remWorker() {
    x = prompt("How many workers remain?");
    y = parseInt(x);
    if (isNaN(y)) {
        alert("Please enter a number");
    } else {
        p += Math.floor(y / 2);
        document.getElementById("total-points").innerHTML = p;
        alert("+" + Math.floor(y / 2) + ". " + "Your new point total is " + p);
    };
};

function know15() {
    x = prompt("How goods types sold?");
    y = parseInt(x);
    if (isNaN(y)) {
        alert("Please enter a number");
    } else {
        p += (y * 3);
        document.getElementById("total-points").innerHTML = p;
        alert("+" + (y * 3) + ". " + "Your new point total is " + p);
    };
};

function know1623() {
    x = prompt("How many eligible buildings?");
    y = parseInt(x);
    if (isNaN(y)) {
        alert("Please enter a number");
    } else {
        p += (y * 4);
        document.getElementById("total-points").innerHTML = p;
        alert("+" + (y * 4) + ". " + "Your new point total is " + p);
    };
};

function know24() {
    x = prompt("How many animal types on estate?");
    y = parseInt(x);
    if (isNaN(y)) {
        alert("Please enter a number");
    } else {
        p += (y * 4);
        document.getElementById("total-points").innerHTML = p;
        alert("+" + (y * 4) + ". " + "Your new point total is " + p);
    };
};

function know25() {
    x = prompt("How many goods tiles sold?");
    y = parseInt(x);
    if (isNaN(y)) {
        alert("Please enter a number");
    } else {
        p += y;
        document.getElementById("total-points").innerHTML = p;
        alert("+" + y + ". " + "Your new point total is " + p);
    };
};

function know26() {
    x = prompt("How many bonus tiles?");
    y = parseInt(x);
    if (isNaN(y)) {
        alert("Please enter a number");
    } else {
        p += (y * 2);
        document.getElementById("total-points").innerHTML = p;
        alert("+" + (y * 2) + ". " + "Your new point total is " + p);
    };
};

setTimeout(setPlayers, 1000);