var diceRoll = new Audio();
diceRoll.src = "dice-roll.mp3";

whiteArray = [
    "url(images/white-dice-1.png)",
    "url(images/white-dice-2.png)",
    "url(images/white-dice-3.png)",
    "url(images/white-dice-4.png)",
    "url(images/white-dice-5.png)",
    "url(images/white-dice-6.png)"
];

function rollWhiteDice() {
    diceRoll.play();
    x = whiteArray[(Math.floor(Math.random() * 6))];
    y = Math.floor(Math.random() * 8 + 2);
    document.getElementById("roll-1-div").style.backgroundImage = x;
    document.getElementById("board-div").style.visibility = "visible";
    document.getElementById("board-num").innerHTML = y;
};

function reRoll() {
    diceRoll.play();
    x = whiteArray[(Math.floor(Math.random() * 6))];
    document.getElementById("roll-1-div").style.backgroundImage = x;
};

function reChoose() {
    y = Math.floor(Math.random() * 8 + 2);
    document.getElementById("board-num").innerHTML = y;
};