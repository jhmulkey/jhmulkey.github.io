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

boards10a_h = [
    "10a",
    "10b",
    "10c",
    "10d",
    "10e",
    "10f",
    "10g",
    "10h",
]

boards13a_h = [
    "13a",
    "13b",
    "13c",
    "13d",
    "13e",
    "13f",
    "13g",
    "13h",
]

function chooseBoard() {
    document.getElementById("board-select-div").style.backgroundImage = "none";
    if (document.getElementById("B2-9").checked) {
        document.getElementById("board-select-p").innerHTML = Math.floor(Math.random() * 8 + 2);
    } else if (document.getElementById("B10a-h").checked) {
        document.getElementById("board-select-p").innerHTML = boards10a_h[Math.floor(Math.random() * 8)]
    } else
        document.getElementById("board-select-p").innerHTML = boards13a_h[Math.floor(Math.random() * 8)]
};

function rollWhiteDice() {
    diceRoll.play();
    document.getElementById("starting-player-roll-div").style.outline = "none";
    x = whiteArray[(Math.floor(Math.random() * 6))];
    document.getElementById("starting-player-roll-div").style.backgroundImage = x;
};
