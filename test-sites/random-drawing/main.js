const students = [
    "Aeralind Aldrich",
    "Bronwyn Aldrich",
    "Evan Brown",
    "Samuel Collins",
    "Ashton Cruice",
    "Raegan Deming",
    "Bella Mair",
    "Connell Morris",
    "Katie Neal",
    "Annaliese Nelson",
    "Hailey Norton",
    "Jill Pahnke",
    "Job Peoples",
    "Blake Pidcock",
    "Cameron Rogers",
    "Liam Snyder",
    "Macie Walker",
    "Olivia Waters",
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