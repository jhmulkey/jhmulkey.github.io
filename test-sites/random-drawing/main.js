const students = [
    "Student 1",
    "Student 2",
    "Student 3",
    "Student 4",
    "Student 5",
    "Student 6",
    "Student 7",
    "Student 8",
    "Student 9",
];

const pickedStudents = [];

function chooseWinner() {
    const i = Math.floor(Math.random() * (students.length - 1));
    const winner = students[i];
    if (students.length > 0) {
        document.getElementById("winner").innerHTML = winner;
        students.splice(i, 1);
        pickedStudents.push(winner);
        document.getElementById("picked-students").classList.remove("hide");
        document.getElementById("picked-students").innerHTML = '<span style="font-family:Comic Sans MS Bold">Picked (' + pickedStudents.length + " of " + (pickedStudents.length + students.length) + ")</span><br/>" + pickedStudents.join("<br/>");
    } else {
        document.getElementById("winner").classList.add("white");
        document.getElementById("winner").innerHTML = "no more names!";
        document.getElementById("winner-button").classList.add("hide");
        document.getElementById("reset-button").classList.remove("hide");
    };
}

function resetPage() {
    location.reload();
}