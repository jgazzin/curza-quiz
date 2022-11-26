// const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
// const mostRecentScore = localStorage.getItem('mostRecentScore');
var jugadorActual = JSON.parse(localStorage.getItem('jugadorActual'));
const nameJugador = document.querySelector("#name");

var highScores = JSON.parse(localStorage.getItem('highScores'));

// listar solo 5
// const MAX_HIGH_SCORES = 5;

finalScore.innerText = jugadorActual.score;
nameJugador.innerHTML = jugadorActual.name;

// nivel
if (jugadorActual.score < 10) {
    Swal.fire({
        icon: 'error',
        title: 'Tendrás que esforzarte un poco más ' + jugadorActual.name,
        showConfirmButton: true,
      })
}
if (jugadorActual.score >= 100) {
    Swal.fire({
        icon: 'success',
        title: '¡Felicitaciones ' + jugadorActual.name + "!",
        text: 'Lograste el nivel más alto',
        showConfirmButton: true,
      })
}


// guardar score
saveHighScore = (e) => {
    e.preventDefault();

    highScores.push(jugadorActual);
    highScores.sort((a, b) => b.score - a.score);
    // highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('../screems-juego/registros.html');
    };

