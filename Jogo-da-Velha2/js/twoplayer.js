const btnCadastro = document.querySelector(".container .select")
btnCadastro.addEventListener("click", function (e) {
    e.preventDefault();
var Pont01 = document.getElementById("Ponto_1");
var Pont02 = document.getElementById("Ponto_2");
var Pont03 = document.getElementById("Ponto_3");
var Pont04 = document.getElementById("Ponto_4");
var Pont05 = document.getElementById("Ponto_5");
var Pont06 = document.getElementById("Ponto_6");
var Pont07 = document.getElementById("Ponto_7");
var Pont08 = document.getElementById("Ponto_8");
var Pont09 = document.getElementById("Ponto_9");


    // Seta a jogada 
$(`.row div`).click (function() {
    
  // Pega o conteudo da div clicada
  var conteudo = $(this).html();
    
  if (conteudo == ""){
    
     // retorna o id da div clicada
    var posicaoJogada = $(this).attr('id');
    
    if (parseInt(get('jogada')) == 1) {
      $(this).html('<i class="icon-circle-blank"></i>');
      set('jogada', 2);
      set(posicaoJogada, 2);
    } else {
      $(this).html('<i class="icon-remove"></i>');
      set('jogada', 1);
      set(posicaoJogada, 1);
    }
  }

  // FUNÇÃO DE PONTUAÇÃO DO 'X'
  function Ponto_X() {
    if ((get('1') && get('2') && get('3') == 1) 
    || (get('4') && get('5') && get('6') == 1)
    || (get('7') && get('8') && get('9') == 1)
    || (get('1') && get('4') && get('7') == 1)
    || (get('2') && get('5') && get('8') == 1)
    || (get('3') && get('6') && get('9') == 1)
    || (get('1') && get('5') && get('9') == 1)
    || (get('3') && get('5') && get('7') == 1)
    ){alert("X Mine Ponto!"); limparDados();}
  }
  // FUNÇÃO DE PONTUAÇÃO DO 'O'
  function Ponto_O() {
    if ((get('1') && get('2') && get('3') === 2) 
      || (get('4') && get('5') && get('6') === 2)
      || (get('7') && get('8') && get('9') === 2)
      || (get('1') && get('4') && get('7') === 2)
      || (get('2') && get('5') && get('8') === 2)
      || (get('3') && get('6') && get('9') === 2)
      || (get('1') && get('5') && get('9') === 2)
      || (get('3') && get('5') && get('7') === 2)
    ){alert("O Mine Ponto!"); limparDados();}
  }
  function winner() {
    // VERTICAL
    if ( Ponto_O()||Ponto_X() == (get(Pont01) && get(Pont02) && get(Pont03))
      || Ponto_O()||Ponto_X() == (get(Pont04) && get(Pont05) && get(Pont06))
      || Ponto_O()||Ponto_X() == (get(Pont07) && get(Pont08) && get(Pont09))
      // HORIZONTAL
      || Ponto_O()||Ponto_X() == (get(Pont01) && get(Pont04) && get(Pont07))
      || Ponto_O()||Ponto_X() == (get(Pont02) && get(Pont05) && get(Pont08))
      || Ponto_O()||Ponto_X() == (get(Pont03) && get(Pont06) && get(Pont09))
      // DIAGONAL
      || Ponto_O()||Ponto_X() == (get(Pont01) && get(Pont05) && get(Pont09))
      || Ponto_O()||Ponto_X() == (get(Pont03) && get(Pont05) && get(Pont07))
    ){alert("You Win"); limparDados();
    }
  }

    // Verifica Jogda 1
    // if(Ponto_X()) {}
    //else if(Ponto_O()){} Verificacao jogada 2
    // else (winner());
})

});
// Função para setar a jogada.
// 1 para Bolinha. 2 para X
function set(key, dados) {
  sessionStorage.setItem(key, dados);
}

// Função para retornar os dados inseridos
function get(key) {
  return sessionStorage.getItem(key);
}

// Função para limpar todos os dados 
function limparDados() {
  sessionStorage.clear();
}