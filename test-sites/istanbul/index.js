var rollSound = new Audio();
rollSound.src = "roll-sound.mp3";

function rollDice() {
    var x = Math.floor(Math.random() * 6) + 1;
    var y = Math.floor(Math.random() * 6) + 1;
    var dice1 = "url(images/white-dice-" + x + ".png)";
    var dice2 = "url(images/white-dice-" + y + ".png)";
    rollSound.play();
    document.getElementById("dice-1").style.backgroundImage = dice1;
    document.getElementById("dice-2").style.backgroundImage = dice2;
};


function moveMarker(abbr,x) {
    document.getElementById(abbr+x).style.display = "block";
    for (i = 0; i < 6; i++) {
        if (i === x) {
            continue;
        };
        document.getElementById(abbr+i).style.display = "none";
    };  
};