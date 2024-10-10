"use strict"
const min=1;
const max=10;
let result=Math.floor(Math.random()*(max-min+1))+min;
let score=20;
let Highestscore=0;
console.log(result)



function check(){
    const test=document.getElementById("mytext").value;
   
    let demo=document.getElementById("demo")
    console.log(test);
        if(!test){
            demo.textContent=`no number`
        //   console.log(demo.textContent="no number")  
        }
      
       else if(test==result)
        {
            demo.textContent=`It's correct number`  
            document.getElementById('para').textContent=`Random number is ${result}`;
            if(score>Highestscore){
                Highestscore=score;
                document.getElementById("highest").textContent=`Highest Score:${Highestscore}`;
            }
            
        }
      else  if(test<result)
            {
                if(score > 0){
                    demo.textContent=`It's low`;
                    score--;
                    document.getElementById('score').textContent=`Score:${score}`;
                    console.log(score)
                }
                else{
                    demo.textContent=`you lost the game`;
                    
                    document.getElementById('score').textContent=`Score:${score}`;
                    
                }
                
            }
            else if(test>result){
                if(score>0){
                    demo.textContent=`It's high`;
                    score--;
                    document.getElementById('score').textContent=`Score:${score}`;
                }
                else{
                    demo.textContent=`you lost the game`;
                    
                    document.getElementById('score').textContent=`Score:${score}`;
                }
            }
      
}

function again(){
    score=20;
    result=Math.floor(Math.random()*(max-min+1))+min;
    document.getElementById('demo').textContent="Start guess"
    document.getElementById('score').textContent=`score :${score}`;
    document.getElementById('mytext').value='';
    // document.getElementById('para').textContent="?"
    document.getElementById('para').textContent=`Random number is`;
}
   
    


  
   




   


