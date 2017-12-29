var rollSound = new Audio();
rollSound.src = "./audio/roll-sound.mp3";

var _boardsIndex = 0;
var _randomIndex = 0;

var _boards = [
    [1,2,3,4,5,6,7,8,9],
    ["10a","10b","10c","10d","10e","10f","10g","10h"],
    ["13a","13b","13c","13d","13e","13f","13g","13h"], [1,2,3,4,5,6,7,8,9,"10a","10b","10c","10d","10e","10f","10g","10h","13a","13b","13c","13d","13e","13f","13g","13h"]
];

var _boardsReset = [
    [1,2,3,4,5,6,7,8,9],
    ["10a","10b","10c","10d","10e","10f","10g","10h"],
    ["13a","13b","13c","13d","13e","13f","13g","13h"], [1,2,3,4,5,6,7,8,9,"10a","10b","10c","10d","10e","10f","10g","10h","13a","13b","13c","13d","13e","13f","13g","13h"]
];

function setBoardIndex(x) {
    _boardsIndex = x;
    document.getElementById("select-board-group-pop").style.display = "none";
    document.getElementById("select-board-pop").style.display = "block";
};

function chooseBoards(_boardsIndex) {
    if (_boards[_boardsIndex].length == 0) {
        for (i = 0; i < _boardsReset[_boardsIndex].length; i++) {
            _boards[_boardsIndex].push(_boardsReset[_boardsIndex][i]);
        };
        chooseBoards(_boardsIndex);
    } else {
        var x = Math.floor(Math.random() * (_boards[_boardsIndex].length));
        document.getElementById("tap-to-select").innerHTML = _boards[_boardsIndex][x];
        _boards[_boardsIndex].splice(x,1);
    };
};

function rollWhiteDice() {
    rollSound.play();
    var x = (Math.floor(Math.random() * 6)) + 1;
    document.getElementById("tap-to-roll").style.backgroundImage = "url(images/white-dice-" + x + ".png)";
};

function titleScreen() {
    document.getElementById("title-screen").style.display = "none";
    document.getElementById("select-board-group-pop").style.display = "block";
    document.getElementById("index-html").style.backgroundImage = "url(images/background.jpg)";
}

function whiteDicePop(x) {
    if (x) {
        document.getElementById("select-board-group-pop").style.display = "none";
        document.getElementById("white-dice-pop").style.display = "block";
    } else {
        document.getElementById("select-board-pop").style.display = "none";
        document.getElementById("white-dice-pop").style.display = "block"; 
    };  
};

setTimeout(titleScreen, 2000);