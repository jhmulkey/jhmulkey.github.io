var rollSound = new Audio();
rollSound.src = "roll-sound.mp3";

function rollDice() {
    var x = Math.floor(Math.random() * 6) + 1;
    var y = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice-1").style.backgroundImage = "url(images/white-dice-"+x+".png)";
    document.getElementById("dice-2").style.backgroundImage = "url(images/white-dice-"+y+".png)";
    rollSound.play();
};