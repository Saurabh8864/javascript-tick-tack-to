let turn ="X";
let gameover=false;
//  function to change the turn
const changeTurn=()=>{


    return turn ==="X"?"O":"X";
}
// function to check  validity(basically for checking the win)
const checkWin=()=>{
    let boxtext=document.getElementsByClassName("boxtext");
   
//    entries where there is win
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,7],
        [2,4,6],
    ]
    wins.forEach(e=>{
        // need to check if there is entries with same and it miust not be empty
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[2]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText!=="")){
            document.querySelector(".info").innerText=boxtext[e[0]].innerText +"Won";
            gameover=true;
            // once every hing is match the game is over;
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="300px";
                }
    })
}


// game logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    //  element because you want to change 
    // the element of the class boxtext thwt what's inside of it


    let boxtext= element.querySelector(".boxtext");
    element.addEventListener("click",()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
          turn=  changeTurn();
            checkWin();
            if(!gameover){
            document.getElementsByClassName("info")[0].innerText=`turn for ${turn}`;
        
            }
        }
       
    })
})

 // add eventlistner to delte the content
 reset.addEventListener("click",()=>{
    let boxtext= document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach(element=>{
        element.innerText="";
        
    });
    turn="X";
    gameover=false;
        document.getElementsByClassName("info")[0].innerText=`turn for ${turn}`;
        document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="0";
    
        
})