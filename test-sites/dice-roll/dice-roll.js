var diceRoll = new Audio();
diceRoll.src = "dice-roll.mp3";

var bonusSound = new Audio();
bonusSound.src = "bonus-sound.mp3";

r = 0

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

knowledgeTileArray = [
    "(#1) more than 1 of each building type allowed per city",
    "(#2) 1 worker earned for each mine at end of each phase in addition to the silverling",
    "(#3) 2 silverlings per goods sale, not just 1",
    "(#4) 1 worker earned per goods sale in addition to the silverling(s)",
    "(#5) receive goods from 2 neighboring depots (not just 1) when ship placed",
    "(#6) silverlings may be used to buy tiles from any depot, not just the black depot",
    "(#7) if you place an animal tile when knowledge tile #7 is on estate, add 1 extra point for the animal tile itself that you place plus 1 extra point for any other animal tiles of the same animal type on the same pasture",
    "(#8) worker tiles can adjust dice roll by up to +2 or -2",
    "(#9) any dice result may be adjusted +1 or -1 to place a building",
    "(#10) any dice result may be adjusted +1 or -1 to place a ship or animal tile",
    "(#11) any dice result may be adjusted +1 or -1 to place a castle, knowledge tile, or mine",
    "(#12) any dice result may be adjusted +1 or -1 to acquire any new tile",
    "(#13) when a dice is traded for worker tiles, a silverling is also earned",
    "(#14) 4 worker tiles traded for a dice, not just 2",
    "(#15) at end of game: 3 points for every goods type sold",
    "(#16-23) at end of game: 4 points for each corresponding building on the estate",
    "(#24) at end of game: 4 points for each animal type on estate",
    "(#25) at end of game: 1 point for every goods tile sold",
    "(#26) at end of game: 2 points for each bonus tile"
];

function rollWhiteDice() {
    diceRoll.play();
    x = whiteArray[(Math.floor(Math.random() * 6))];
    document.getElementById("roll-1-div").style.backgroundImage = x;
};

function rollDice(color) {
    diceRoll.play();
    r++;
    randomDice(color);
    randomBonus();
    setPhase();
    setRound();
    regionPoints();
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
    } else {
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
    if (b == 9 && document.getElementById("bonus-checkbox").checked) {
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

function regionPoints() {
    if (r == 6) {
        document.getElementById("regsize1").innerHTML = 9;
        document.getElementById("regsize2").innerHTML = 11;
        document.getElementById("regsize3").innerHTML = 14;
        document.getElementById("regsize4").innerHTML = 18;
        document.getElementById("regsize5").innerHTML = 23;
        document.getElementById("regsize6").innerHTML = 29;
        document.getElementById("regsize7").innerHTML = 36;
        document.getElementById("regsize8").innerHTML = 44;
    } else if (r == 11) {
        document.getElementById("regsize1").innerHTML = 7;
        document.getElementById("regsize2").innerHTML = 9;
        document.getElementById("regsize3").innerHTML = 12;
        document.getElementById("regsize4").innerHTML = 16;
        document.getElementById("regsize5").innerHTML = 21;
        document.getElementById("regsize6").innerHTML = 27;
        document.getElementById("regsize7").innerHTML = 34;
        document.getElementById("regsize8").innerHTML = 42;
    } else if (r == 16) {
        document.getElementById("regsize1").innerHTML = 5;
        document.getElementById("regsize2").innerHTML = 7;
        document.getElementById("regsize3").innerHTML = 10;
        document.getElementById("regsize4").innerHTML = 14;
        document.getElementById("regsize5").innerHTML = 19;
        document.getElementById("regsize6").innerHTML = 25;
        document.getElementById("regsize7").innerHTML = 32;
        document.getElementById("regsize8").innerHTML = 40;
    } else if (r == 21) {
        document.getElementById("regsize1").innerHTML = 3;
        document.getElementById("regsize2").innerHTML = 5;
        document.getElementById("regsize3").innerHTML = 8;
        document.getElementById("regsize4").innerHTML = 12;
        document.getElementById("regsize5").innerHTML = 17;
        document.getElementById("regsize6").innerHTML = 23;
        document.getElementById("regsize7").innerHTML = 30;
        document.getElementById("regsize8").innerHTML = 38;
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

function bonusButtonAppear() {
    x = Math.floor(Math.random() * 101);
    if (x == 50) {
        document.getElementById("bonus").style.visibility="visible";
    };
};

function bonusButtonDisappear() {
    document.getElementById("bonus").style.visibility="hidden";
};

function knowledgeTile(x) {
    alert(knowledgeTileArray[x-1]);
};