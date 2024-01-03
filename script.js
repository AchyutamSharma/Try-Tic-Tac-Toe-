let box = document.querySelectorAll("#boxs");
let resetbtn = document.getElementById("reset-btn");
let TopArea = document.querySelector(".result-area");
let winnerShow = document.getElementById("winnerArea");
let newGame = document.getElementById("newGame-btn");

let turnO = true;
const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7,],
    [2,5,8],
];

box.forEach((box) => {
    box.addEventListener("click", () => {
        
    if (turnO) {
        box.innerText = "O";
        turnO = false;
    } else {
        box.innerText = "X";
        turnO = true;
    }
    box.disabled = true; // this is use for Disabled That box for overwritten innerTxt.
    checkWinner();
});
});
/*
const NewGame = ()=>{
    turnO = true;
    enableBoxs();
    TopArea.classList.add("hide");
;}*/

const ResetGame = ()=>{
    turnO = true;
    enableBoxs();
    TopArea.classList.add("hide");
}; 

const disabledBoxs = ()=>{
    for (const Boxs of box) {
        Boxs.disabled = true;
    }
};
const enableBoxs = ()=>{
    for(const Boxs of box){
        Boxs.disabled = false;
        Boxs.innerText = "";
    }
};


const ShowTopArea = (winner)=>{
    winnerShow.innerText = `Congratulation, Winner is ${winner}`;
    TopArea.classList.remove("hide");
    disabledBoxs();
};

const checkWinner = ()=>{
    for (const pattenrs of winPatterns) 
    {
        let pos1Val = box[pattenrs[0]].innerText;
        let pos2Val = box[pattenrs[1]].innerText;
        let pos3Val = box[pattenrs[2]].innerText;
        
        if (pos1Val != "" && pos2Val != "" && pos3Val != "" ) 
        {
            if (pos1Val === pos2Val && pos2Val=== pos3Val) 
            {
                ShowTopArea(pos1Val);
                return true;
            }  
        } 
    }
};

resetbtn.addEventListener("click",ResetGame);
newGame.addEventListener("click", ResetGame);
/*
box.forEach((box) => {
    newGame.addEventListener("click",() =>{
        box.innerText = "";
        document.location.reload();
    });

});
*/    



/*  I was Write and this is wrong  
const checkWinner = ()=>{
    for (const pattenrs of winPatterns) 
    {
        console.log(pattenrs[0], pattenrs[1], pattenrs[2]);
// doubt in Next Line.
        console.log(`${box[pattenrs[0]].innerText} ${box[pattenrs[1]].innerText} ${box[pattenrs[2]].innerText} `);
       
      if (box[pattenrs[0]].innerText === "X" && box[pattenrs[1]].innerText === "X" && box[pattenrs[2]].innerText === "X") 
        {
            console.log("Winner is X");            
        } 
       else if (box[pattenrs[0]].innerText === "O" && box[pattenrs[1]].innerText === "O" && box[pattenrs[2]].innerText === "O") 
        {
            console.log("Winner is O");         
        }       
    }
};
*/




