function checkRange(event) {
    var fourthQuestion = document.getElementById("fourth-question")
    if (event.target.value >= 6) {
        fourthQuestion.style.display = "none";
    }
    if (event.target.value <= 5) {
        fourthQuestion.style.display = "block";
    }
}














