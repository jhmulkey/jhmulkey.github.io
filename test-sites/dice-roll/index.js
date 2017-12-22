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

boards1_9 = [1,2,3,4,5,6,7,8,9];

boards10a_h = ["10a","10b","10c","10d","10e","10f","10g","10h"];

boards13a_h = ["13a","13b","13c","13d","13e","13f","13g","13h"];

boards1_13h = [1,2,3,4,5,6,7,8,9,"10a","10b","10c","10d","10e","10f","10g","10h","13a","13b","13c","13d","13e","13f","13g","13h"];

function chooseBoard() {
    document.getElementById("board-select-div").style.backgroundImage = "none";
    if (document.getElementById("B1-9").checked) {
        chooseBoards1_9();
    } else if (document.getElementById("B10a-h").checked) {
        chooseBoards10a_h();
    } else if (document.getElementById("B13a-h").checked) {
        chooseBoards13a_h();
    } else {
        chooseBoards1_13h();
    };
};

function chooseBoards1_9() {
    if (boards1_9.length == 0) {
        location.reload();
    } else {
        x = Math.floor(Math.random() * (boards1_9.length - 1));
        document.getElementById("board-select-p").innerHTML = boards1_9[x];
        boards1_9.splice(x,1);
    };
};

function chooseBoards10a_h() {
    if (boards10a_h.length == 0) {
        location.reload();
    } else {
        x = Math.floor(Math.random() * (boards10a_h.length - 1));
        document.getElementById("board-select-p").innerHTML = boards10a_h[x];
        boards10a_h.splice(x,1);
    };
};

function chooseBoards13a_h() {
    if (boards13a_h.length == 0) {
        location.reload();
    } else {
        x = Math.floor(Math.random() * (boards13a_h.length - 1));
        document.getElementById("board-select-p").innerHTML = boards13a_h[x];
        boards13a_h.splice(x,1);
    };
};

function chooseBoards1_13h() {
    if (boards1_13h.length == 0) {
        location.reload();
    } else {
        x = Math.floor(Math.random() * (boards1_13h.length - 1));
        document.getElementById("board-select-p").innerHTML = boards1_13h[x];
        boards1_13h.splice(x,1);
    };
};

function rollWhiteDice() {
    diceRoll.play();
    document.getElementById("starting-player-roll-div").style.outline = "none";
    x = whiteArray[(Math.floor(Math.random() * 6))];
    document.getElementById("starting-player-roll-div").style.backgroundImage = x;
};