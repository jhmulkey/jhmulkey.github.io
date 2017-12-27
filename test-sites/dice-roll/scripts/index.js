var diceRoll = new Audio();
diceRoll.src = "./audio/dice-roll.mp3";

var dice = [
    "url(images/white-dice-1.png)",
    "url(images/white-dice-2.png)",
    "url(images/white-dice-3.png)",
    "url(images/white-dice-4.png)",
    "url(images/white-dice-5.png)",
    "url(images/white-dice-6.png)"
];

var boards = [
    [1,2,3,4,5,6,7,8,9],
    ["10a","10b","10c","10d","10e","10f","10g","10h"],
    ["13a","13b","13c","13d","13e","13f","13g","13h"], [1,2,3,4,5,6,7,8,9,"10a","10b","10c","10d","10e","10f","10g","10h","13a","13b","13c","13d","13e","13f","13g","13h"]
];

function chooseBoardGroup() {
    document.getElementById("board-select-div").style.backgroundImage = "none";
    if (document.getElementById("B1-9").checked) {
        chooseBoards(0);
    } else if (document.getElementById("B10a-h").checked) {
        chooseBoards(1);
    } else if (document.getElementById("B13a-h").checked) {
        chooseBoards(2);
    } else {
        chooseBoards(3);
    };
};

function chooseBoards(x) {
    if (boards[x].length == 0) {
        location.reload();
    } else {
        var y = Math.floor(Math.random() * (boards[x].length - 1));
        document.getElementById("board-select-p").innerHTML = boards[x][y];
        boards[x].splice(y,1);
    };
};

function rollWhiteDice() {
    diceRoll.play();
    document.getElementById("starting-player-roll-div").style.outline = "none";
    var x = dice[(Math.floor(Math.random() * 6))];
    document.getElementById("starting-player-roll-div").style.backgroundImage = x;
};