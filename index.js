const cells= document.querySelectorAll('.grid-item');
const text=document.querySelector('.text');
const restart=document.querySelector('button')
let gameboard=["","","","","","","","",""];
let currentplayer='X';
const winconditions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function game(){
    for (let cell of cells){
        text.textContent=`${currentplayer}'s Turn`
         
        cell.addEventListener("click",function(){
        let index =this.classList[1][1];
        if (gameboard[index]==""){
            gameboard[index]=currentplayer;
            console.log(gameboard)
            cell.textContent=currentplayer;
            currentplayer= switchplayer();
            checkgameover();    
        } 
    })
    }
}

function switchplayer(){
    if (currentplayer=='X'){
        return 'O';
    }
    else{
        return 'X';
    }
}

function checkgameover(){
    let flag=0;
    for (let i=0;i<8;i++){
        if (gameboard[winconditions[i][0]] =='X' && gameboard[winconditions[i][1]] =='X' && gameboard[winconditions[i][2]] == 'X'){
            flag=1;
            text.textContent="Game Over! X wins."
            break;
        }
        else if (gameboard[winconditions[i][0]] =='O' && gameboard[winconditions[i][1]] =='O' && gameboard[winconditions[i][2]]== 'O'){
            flag=1;
            text.textContent="Game Over! O wins.";
            break;
        }
        if (flag==0){
            if ((gameboard.includes(""))
        ){
            text.textContent=`${currentplayer}'s Turn`;
        }
            else{
                text.textContent="Draw.";
            }
        }
    }
}

restart.addEventListener('click',function (){
    gameboard=["","","","","","","","",""];
    for (let cell of cells){
        cell.textContent='';
    }
    currentplayer='X';
    text.textContent=`${currentplayer}'s Turn`;
})


game();
