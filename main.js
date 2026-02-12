let score = 0;
let time = 5;
function addScore() {
    score++;
    document.getElementById("score").textContent = score;
}
function startGame() {
    score = 0;
    time = 5;
    document.getElementById("score").textContent = score;
    document.getElementById("time").textContent = time;
    let timer = setInterval(function() {
        time--;
        document.getElementById("time").textContent = time;
        if (time <= 0) {
            clearInterval(timer);
            alert("Time's up! Your score is: " + score);
        }
    }, 1000); }