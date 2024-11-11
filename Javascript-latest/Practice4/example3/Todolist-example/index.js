let display =document.getElementById("display");
let mybutton=document.getElementById("mybutton");
let tasklist=document.getElementById("tasklist");

mybutton.addEventListener("click",()=>{
    if(display.value=="")
    {
        alert("please enter value")
    }
    else{
         tasklist.innerHTML=tasklist.innerHTML+
         `<div class="task">
             <span id="work">${display.value}</span>
              <button class="del"><i class="fas fa-trash"></i></button>
          </div>`
        let deltask=document.querySelectorAll(".del");
        for(var i=0;i<deltask.length;i++){
            deltask[i].onclick=function(){
                this.parentNode.remove()
                 
            }
        }
        
        display.value=""
    }
    localStorage.setItem("items",JSON.stringify(tasklist))

 
})

let item=JSON.parse(localStorage.getItem("items"))
console.log(item)
