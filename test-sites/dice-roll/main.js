var diceRoll = new Audio();
diceRoll.src = "dice-roll.mp3";

var bonusSound = new Audio();
bonusSound.src = "bonus-sound.mp3";

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

function rollBlackDice() {
    diceRoll.play();
    x = blackArray[(Math.floor(Math.random() * 6))];
    y = blackArray[(Math.floor(Math.random() * 6))];
    z = whiteArray[(Math.floor(Math.random() * 6))];
    b = Math.floor(Math.random() * 13);
    document.getElementById("roll-1-div").style.visibility = "visible";
    document.getElementById("roll-2-div").style.visibility = "visible";
    document.getElementById("roll-1-div").style.backgroundImage = x;
    document.getElementById("roll-2-div").style.backgroundImage = y;
    document.getElementById("roll-3-div").style.backgroundImage = z;
    if (b == 6) {
        document.getElementById("bonus").style.visibility="visible";
        bonusSound.play();
    };
};

function rollRedDice() {
    diceRoll.play();
    x = redArray[(Math.floor(Math.random() * 6))];
    y = redArray[(Math.floor(Math.random() * 6))];
    z = whiteArray[(Math.floor(Math.random() * 6))];
    b = Math.floor(Math.random() * 13);
    document.getElementById("roll-1-div").style.visibility = "visible";
    document.getElementById("roll-2-div").style.visibility = "visible";
    document.getElementById("roll-1-div").style.backgroundImage = x;
    document.getElementById("roll-2-div").style.backgroundImage = y;
    document.getElementById("roll-3-div").style.backgroundImage = z;
    if (b == 6) {
        document.getElementById("bonus").style.visibility="visible";
        bonusSound.play();
    };
};

function rollGreenDice() {
    diceRoll.play();
    x = greenArray[(Math.floor(Math.random() * 6))];
    y = greenArray[(Math.floor(Math.random() * 6))];
    z = whiteArray[(Math.floor(Math.random() * 6))];
    b = Math.floor(Math.random() * 13);
    document.getElementById("roll-1-div").style.visibility = "visible";
    document.getElementById("roll-2-div").style.visibility = "visible";
    document.getElementById("roll-1-div").style.backgroundImage = x;
    document.getElementById("roll-2-div").style.backgroundImage = y;
    document.getElementById("roll-3-div").style.backgroundImage = z;
    if (b == 6) {
        document.getElementById("bonus").style.visibility="visible";
        bonusSound.play();
    };
};

function rollBlueDice() {
    diceRoll.play();
    x = blueArray[(Math.floor(Math.random() * 6))];
    y = blueArray[(Math.floor(Math.random() * 6))];
    z = whiteArray[(Math.floor(Math.random() * 6))];
    b = Math.floor(Math.random() * 13);
    document.getElementById("roll-1-div").style.visibility = "visible";
    document.getElementById("roll-2-div").style.visibility = "visible";
    document.getElementById("roll-1-div").style.backgroundImage = x;
    document.getElementById("roll-2-div").style.backgroundImage = y;
    document.getElementById("roll-3-div").style.backgroundImage = z;
    if (b == 6) {
        document.getElementById("bonus").style.visibility="visible";
        bonusSound.play();
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

function tile1() {
    alert("more than 1 of each building type allowed per city");
};

function tile2() {
    alert("1 worker earned for each mine at end of each phase in addition to the silverling");
};

function tile3() {
    alert("2 silverlings per goods sale, not just 1");
};

function tile4() {
    alert("1 worker earned per goods sale in addition to the silverling(s)");
};

function tile5() {
    alert("receive goods from 2 neighboring depots (not just 1) when ship placed");
};

function tile6() {
    alert("silverlings may be used to buy tiles from any depot, not just the black depot");
};

function tile7() {
    alert("if you place an animal tile when knowledge tile #7 is on estate, add 1 extra point for the animal tile itself that you place plus 1 extra point for any other animal tiles of the same animal type on the same pasture");
};

function tile8() {
    alert("worker tiles can adjust dice roll by up to +2 or -2");
};

function tile9() {
    alert("any dice result may be adjusted +1 or -1 to place a building");
};

function tile10() {
    alert("any dice result may be adjusted +1 or -1 to place a ship or animal tile");
};

function tile11() {
    alert("any dice result may be adjusted +1 or -1 to place a castle, knowledge tile, or mine");
};

function tile12() {
    alert("any dice result may be adjusted +1 or -1 to acquire any new tile");
};

function tile13() {
    alert("when a dice is traded for worker tiles, a silverling is also earned");
};

function tile14() {
    alert("4 worker tiles traded for a dice, not just 2");
};

function tile15() {
    alert("at end of game: 3 points for every goods type sold");
};

function tile16_23() {
    alert("at end of game: 4 points for each corresponding building on the estate");
};

function tile24() {
    alert("at end of game: 4 points for each animal type on estate");
};

function tile25() {
    alert("at end of game: 1 point for every goods tile sold");
};

function tile26() {
    alert("at end of game: 2 points for each bonus tile");
};