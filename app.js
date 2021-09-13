let cells = document.querySelectorAll('.row > div');
let currentPlayer = "X"
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}
//x winner alert thing
let Xwinner = document.getElementById('Xwinner');
let Owinner = document.getElementById('Owinner');
let resetButton = document.getElementById('reset');


function cellClicked(e) {
    e.target.textContent = currentPlayer
    console.log(cells[0].textContent === (true))

    //X WINS
    //top row win
    if (cells[0].textContent === 'X' && cells[1].textContent === 'X' && cells[2].textContent === 'X') {
        resetButton.style.display='inline';
        console.log("O WINS!");
    }
    //middle row win
    if (cells[3].textContent === 'X' && cells[4].textContent === 'X' && cells[5].textContent === 'X') {
        resetButton.style.display='inline';
        console.log("x WINS!");
    }
    //bottom row win
    if (cells[6].textContent === 'X' && cells[7].textContent === 'X' && cells[8].textContent === 'X') {
        resetButton.style.display='inline';
        console.log("x WINS!");
    }
    //left row win
    if (cells[0].textContent === 'X' && cells[3].textContent === 'X' && cells[6].textContent === 'X') {
        resetButton.style.display='inline';
        console.log("x WINS!");
    }
    //middle collum wim
    if (cells[1].textContent === 'X' && cells[4].textContent === 'X' && cells[7].textContent === 'X') {
        resetButton.style.display='inline';
        console.log("x WINS!");
    }
    //right row win
    if (cells[2].textContent === 'X' && cells[5].textContent === 'X' && cells[8].textContent === 'X') {
        resetButton.style.display='inline';
        console.log("x WINS!");
      
    }
    //left diag win
    if (cells[0].textContent === 'X' && cells[4].textContent === 'X' && cells[8].textContent === 'X') {
        resetButton.style.display='inline';
        console.log("x WINS!");
    }
    //right diag win
    if (cells[2].textContent === 'X' && cells[4].textContent === 'X' && cells[6].textContent === 'X') {
        resetButton.style.display='inline';
        console.log("x WINS!");
    }
    //O WINS
    //top row win
    if (cells[0].textContent === 'O' && cells[1].textContent === 'O' && cells[2].textContent === 'O') {
        resetButton.style.display='inline';
        console.log("O WINS!");
    }
    //middle row win
    if (cells[3].textContent === 'O' && cells[4].textContent === 'O' && cells[5].textContent === 'O') {
        console.log('O wins');
        resetButton.style.display='inline';
    }
    //bottom row win
    if (cells[6].textContent === 'O' && cells[7].textContent === 'O' && cells[8].textContent === 'O') {
        console.log('O wins');
        resetButton.style.display='inline';
    }
    //left row win
    if (cells[0].textContent === 'O' && cells[3].textContent === 'O' && cells[6].textContent === 'O') {
        console.log('O wins');
        resetButton.style.display='inline';
    }
    //middle collum wim
    if (cells[1].textContent === 'O' && cells[4].textContent === 'O' && cells[7].textContent === 'O') {
        console.log('O wins');
        resetButton.style.display='inline';
    }
    //right row win
    if (cells[2].textContent === 'O' && cells[5].textContent === 'O' && cells[8].textContent === 'O') {
        console.log('O wins');
        resetButton.style.display='inline';
    }
    //left diag win
    if (cells[0].textContent === 'O' && cells[4].textContent === 'O' && cells[8].textContent === 'O') {
        console.log('O wins');
        resetButton.style.display='inline';
    }
    //right diag win
    if (cells[2].textContent === 'O' && cells[4].textContent === 'O' && cells[6].textContent === 'O') {
        console.log('O wins');
        resetButton.style.display='inline';
    }
    //draw
    else if (cells[0].textContent !== "" && cells[1].textContent !== "" && cells[2].textContent !==""  && cells[3].textContent !=="" && cells[4].textContent !==""  && cells[5].textContent !==""  && cells[6].textContent !==""  && cells[7].textContent !==""  && cells[8].textContent !==""){
        console.log('draw');
        resetButton.style.display='inline';
    }



    //changing players
    if (currentPlayer == 'X') {
        currentPlayer = 'O'

    } else {
        currentPlayer = 'X'

    }
}
resetButton.addEventListener("click",function(){
    window.location.reload()
})

//issue i was having
// xwinner ="X Wins!";
//resetButton.style.display='inline';
//xwinner.style.display='inline';