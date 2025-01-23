


const min=1;
const max=10;
var computernumber=Math.floor(Math.random() *(max-min+1))+1;
let score=0;
let count=0;
   

// prompt("do you want to play");

const guessNumber=()=>{

    const result=document.getElementById("result");
    const mynumber = document.getElementById("mynumber").value;
    const mydata=document.getElementById("mydata");
    const computer=document.getElementById("computer");
    let scored =document.getElementById("scored");
    let score=0;
  
   
    mydata.textContent=`My number :${mynumber}`
   
        if(mynumber == computernumber){
            score=score+1;
            result.textContent=`Result: correct`
             computer.textContent=`Computer number :${computernumber}`
           
             scored.textContent=`Score:${score}`
        }
       else if(mynumber < computernumber){
            result.textContent=`Result: to low`
        }
        else{
            result.textContent='Result: to high'
        }
        
       
    console.log("hello")

}

// const again =()=>{

// }