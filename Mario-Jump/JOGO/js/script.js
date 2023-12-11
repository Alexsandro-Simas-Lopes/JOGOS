const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const cloud  = document.querySelector('.clouds'); 

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    
    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    const restartButton = document.getElementById("restart");
    console.log(marioPosition);

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        Game_Over();
        
        restartButton.addEventListener("click", function (event) {
            event.preventDefault();
            resetGame();
        });
    }
    
    // CONDIÇÃO QUE PODE SER REUTILIZADA
    // EM OUTRAS PARTES DO SISTEMA JS
    function Game_Over() {
        pipe.style.animation = 'none';
        pipe.style.left = 
        '${pipePosition}px';

        mario.style.animation = 'none';
        mario.style.bottom = 
        '${marioPosition}px';

        cloud.style.animation = 'none';
        cloud.style.left = 
        '${cloudPosition}px';

        mario.src = './imagens/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
        
        restartButton.style.display = "block";
        clearInterval(loop);
    }

    function resetGame() {
        // Reset game progress
        location.reload();
        restartButton.style.display = "none";
    }

}, 10);
// window.addEventListener("keydown", function (event) {
//     if (event.key == " ") {
//       event.preventDefault();
//       resetGame();
//       return;   
//     }
//   });
document.addEventListener('keydown', jump);
  