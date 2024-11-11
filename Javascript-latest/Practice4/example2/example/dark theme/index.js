const mybutton=document.getElementById("mybutton");
let body=document.querySelector("body")
var theme="";

mybutton.addEventListener("click",()=>{
   if(document.body.classList=="dark-mode"){
     
      document.body.classList.remove("dark-mode");
     
       mybutton.textContent=`Dark`
       theme="light"
       
     
   }
   else{
     
      
      document.body.classList.add("dark-mode");

      mybutton.textContent=`light`;
      theme="dark"
     
      
   }
   localStorage.setItem("pageTheme",JSON.stringify(theme));
  
})
let getTheme=JSON.parse(localStorage.getItem("pageTheme"))
console.log(getTheme)

if(getTheme=="dark"){
   document.body.classList="dark-mode";
}

 // document.body.classList.toggle("dark-mode")