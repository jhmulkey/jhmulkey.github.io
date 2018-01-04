var rollSound = new Audio();
rollSound.src = "roll-sound.mp3";

var pointSound = new Audio();
pointSound.src = "point-sound.mp3";

var _ext1 = document.getElementsByClassName('ext-1');
var _ext2 = document.getElementsByClassName('ext-2');
var _ext3 = document.getElementsByClassName('ext-3');

var _extAdded = {
    ext1: false,
    ext2: false,
    ext3: false
};

function rollDice() {
    var x = Math.floor(Math.random() * 6) + 1;
    var y = Math.floor(Math.random() * 6) + 1;
    var dice1 = "url(images/white-dice-" + x + ".png)";
    var dice2 = "url(images/white-dice-" + y + ".png)";
    if (document.getElementById("dice-1").style.backgroundImage != "") {
        document.getElementById("dice-1").style.backgroundImage = "";
        document.getElementById("dice-2").style.backgroundImage = "";
        scrollTo(0,0);
    } else {
        rollSound.play();
    document.getElementById("dice-1").style.backgroundImage = dice1;
    document.getElementById("dice-2").style.backgroundImage = dice2;
    };
};

function select(color,number) {
    document.getElementById(color + "-" + number).style.border = "5px solid white";
    document.getElementById(color + "-0").innerHTML = number;
    pointSound.play();
    for (i = 0; i < 6; i++) {
        if (i === number) {
            continue;
        };
        document.getElementById(color + "-" + i).style.border = "5px solid black";
    }; 
};

function addExt() {
    if (_extAdded["ext1"] === false) {
        for (i = 0; i < _ext1.length; i++) {
            _ext1[i].style.display = "table-cell";
        };
        _extAdded["ext1"] = true;
    } else if (_extAdded["ext2"] === false) {
        for (i = 0; i < _ext2.length; i++) {
            _ext2[i].style.display = "table-cell";
        };
        _extAdded["ext2"] = true;
    } else if (_extAdded["ext3"] === false) {
        for (i = 0; i < _ext3.length; i++) {
            _ext3[i].style.display = "table-cell";
        };
        _extAdded["ext3"] = true;
    };
    pointSound.play();
};

function removeExt() {
    if (_extAdded["ext3"] === true) {
        for (i = 0; i < _ext3.length; i++) {
            _ext3[i].style.display = "none";
        };
        _extAdded["ext3"] = false;
    } else if (_extAdded["ext2"] === true) {
        for (i = 0; i < _ext2.length; i++) {
            _ext2[i].style.display = "none";
        };
        _extAdded["ext2"] = false;
    } else if (_extAdded["ext1"] === true) {
        for (i = 0; i < _ext1.length; i++) {
            _ext1[i].style.display = "none";
        };
        _extAdded["ext1"] = false;
    };
    pointSound.play();
};