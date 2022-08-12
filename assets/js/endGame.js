// Saves the username and score 
const username = document.getElementById("username");
const saveScoreBtn = document.getElementById('saveScoreBtn');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const finalScore = document.getElementById('finalScore');
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const maxHighScores = 5;

finalScore.innerText = mostRecentScore;
username.addEventListener("keyup", () => {
    //Disables and enables the submission if no name is provided.
    saveScoreBtn.disabled = !username.value;
});

//Defines save score function
saveHighScore = i => {
    i.preventDefault();

    const score = {
        score: Math.floor(Math.random() * 100),
        name: username.value
    };
    highScores.push(score);
    highScores.sort( (a, b) => {
        return b.score - a.score;
    });
    highScores.splice(5);

//Saves as a string for the highScores
    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("index.html");
};