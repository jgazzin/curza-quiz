var highScoresList = document.getElementById("highScoresList");
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];


highScoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");

function resetear() {
  console.log("limpiar")
  highScores.forEach(jugada => {
    console.log(jugada)
    highScores.splice(jugada);
  });
  localStorage.setItem('highScores', JSON.stringify(highScores));
  window.location.assign('../screems-juego/registros.html');
}
