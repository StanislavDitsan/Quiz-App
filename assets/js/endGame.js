// Saves the username and score 
const username = document.getElementById("username");
const saveScoreBtn = document.getElementById('saveScoreBtn');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const finalScore = document.getElementById('finalScore');

finalScore.innerText = mostRecentScore;
username.addEventListener("keyup", ()=> {
    //Disables the submission if no name is provided.
    saveScoreBtn.disabled = !username.value;
});

//Defines save score function
saveHighScore = i => {
i.preventDefault();

};