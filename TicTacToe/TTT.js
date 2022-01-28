const board_el = document.querySelector('#board');
const cell_els = document.querySelectorAll('#board .cell');
let currentTurn;

const combinations=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

setup();

function setup(){
    board_el.classList.remove('turn-x','turn-o');

    for(let cell of cell_els){
        cell.classList.remove('x','o');
        cell.addEventListener('click',fillcell,{once:true});
    }
    currentTurn=Math.round(Math.random(0,1))==1 ? 'x' : 'o';  //Math.round gives 0 when the number is less than 0.5 and 1 otherwise and thus funcitons like a toss
    board_el.classList.add('turn-'+currentTurn);            // This adds "turn-x"/"turn-o" in front of #board and therefore we get the suggestions as per the css

}

function fillcell(){
    this.classList.add(currentTurn);
    if(checkForWin()){
        const restart = confirm(currentTurn.toUpperCase()+" is the winner! Restart?")
        if(restart)setup();
    }
    else if(checkTie()){
        const restart = confirm(currentTurn.toUpperCase()+" It is a Draw! Restart?")

        if(restart) setup();
    }

    else{
        currentTurn = currentTurn =='x'?'o':'x';
        board_el.classList.remove('turn-o','turn-x');
        board_el.classList.add('turn-'+currentTurn);
    } 

}

function checkForWin(){
    return combinations.some(combinations=>{
        return combinations.every(c=>{
            if(cell_els[c].classList.contains(currentTurn)){
                return true;
            }
            return false;
        });
    });

}
function checkTie(){
    return [...cell_els].every(c=>{
        if(c.classList.contains('x')||
        c.classList.contains('o'))
        {
            return true;
        }
        else
            return false;
    });
}