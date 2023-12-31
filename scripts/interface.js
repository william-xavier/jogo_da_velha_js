//vejp se o documento esta carregado
document.addEventListener('DOMContentLoaded', ()=>{

    let restart = document.getElementById('restart');
    restart.addEventListener('click',resetGame)
    let squares = document.querySelectorAll(".square");

    squares.forEach((element)=>{
        element.addEventListener('click', handleClick);
    })

})

function handleClick(event){

    let square = event.target;

    let position = square.id;
    
    if(handleMove(position)){
        setTimeout(() => {
            alert("O jogo acabou! Parabéns ao jogador " + (playerTime+1));
        }, 10);
    };
    updateSquare(position);
}
function updateSquare(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`;
}

//caso eu quisesse verificar todos os quadrados - a funcao acima faz update apenas em um dos quadrados
function updateSquares(){
    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=>{
        let position = square.id;

        let symbol = board[position];

        if(symbol != ''){
            square.innerHTML = `<div class='${symbol}'></div>`
        }
    })
}