var diceRoll = new Audio();
diceRoll.src = "./audio/dice-roll.mp3";

var _boards = [
    [1,2,3,4,5,6,7,8,9],
    ["10a","10b","10c","10d","10e","10f","10g","10h"],
    ["13a","13b","13c","13d","13e","13f","13g","13h"], [1,2,3,4,5,6,7,8,9,"10a","10b","10c","10d","10e","10f","10g","10h","13a","13b","13c","13d","13e","13f","13g","13h"]
];

var _boardsIndex = 0;

function setBoardIndex(x) {
    _boardsIndex = x;
};

function chooseBoards(_boardsIndex) {
    if (_boards[_boardsIndex].length == 0) {
        location.reload();
    } else {
        document.getElementById("board-select-div").style.color = "black";
        document.getElementById("board-select-div").style.fontSize = "60px";
        document.getElementById("board-select-div").style.paddingTop = "12px";
        var y = Math.floor(Math.random() * (_boards[_boardsIndex].length - 1));
        document.getElementById("board-select-div").innerHTML = _boards[_boardsIndex][y];
        _boards[_boardsIndex].splice(y,1);
    };
};

function rollWhiteDice() {
    diceRoll.play();
    var x = (Math.floor(Math.random() * 6)) + 1;
    document.getElementById("roll-white-dice-div").innerHTML = "";
    document.getElementById("roll-white-dice-div").style.backgroundImage = "url(images/white-dice-" + x + ".png)";
};