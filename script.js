let currPlayer = 'X';
let moves = 0;
let movesArr = [];
let buttonClicked = document.querySelectorAll('.cell').value;
for(let i=1;i<=9;i++){
  if(i&2==0){
    let turn = document.getElementById('turn');
    turn.innerText = `player ${currPlayer} 's turn`;
    let buttonClickedValue =buttonClicked.value;
    function handleClick(cellNumber){
      let but = document.getElementById(`button${cellNumber}`);
      
      if(but.innerText ==''){
        but.innerText =  currPlayer;
        moves++;
        movesArr.push(currPlayer);
        checkWinner();
        
        if(currPlayer == 'X'){
          currPlayer = 'O';
        }else{
          currPlayer = 'X';
        }
        
      }else{
        
      }
      function checkWinner(){
        const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];
  for (let i = 0; i < winningCombos.length; i++) {
    const combo = winningCombos[i];
    const [a, b, c] = combo;
    if (cellValues[a] && cellValues[a] === cellValues[b] && cellValues[a] === cellValues[c]) {
      let result = document.getElementById('result');
      result.innerText = `${currPlayer} Wins !`
      disableClicks();
      }
    }elseif(moves == 9){
      result.innerText = 'Its a draw!'
    }
  } 
  function disableClicks(){
    buttonClicked.addEventListener('onclick')= null;
  }
}