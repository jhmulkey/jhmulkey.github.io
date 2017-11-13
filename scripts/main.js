const graphic = document.getElementsByClassName("graphic");

for (i = 0; i < graphic.length; i++) {
    graphic[i].onclick = function() {
        alert("WARNING: GRAPHIC CONTENT!");
    }
}