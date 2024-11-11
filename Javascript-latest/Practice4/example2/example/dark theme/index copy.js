
const mybutton=document.getElementById("mybutton");
   // let body=document.querySelector('body');
   
   mybutton.addEventListener("click",function(){
    if(body.classList=="dark-mode"){
            mybutton.textContent=`dark`;
          
            document.body.classList.remove('dark-mode')
          
         }
         else{
            mybutton.textContent=`light`;
          
            document.body.classList.add("dark-mode")
            
         }
         })
   







// mybutton.addEventListener("click",()=>{
//    if(body.classList=== "dark-mode")
//       {
        
//           mybutton.textContent="hide"
//       }
//       else{
//           mypara.style.visibility="hidden"
//           mybutton.textContent="show" 
//       }
// })




// let getTheme=JSON.parse(localStorage.getItem("pageTheme"))
// console.log(getTheme)

// if(getTheme==="DARK"){
//     document.body.classList.add("dark-mode")
// }


    // let body =document.querySelector('body');
    //  if(body.classList=="active"){
    //     mybutton.textContent=`dark`;
      
    //     document.body.classList.remove('active')
      
    //  }
    //  else{
    //     mybutton.textContent=`light`;
      
    //     document.body.classList.add("active")
        
    //  }

    //  localStorage.setItem("pageTheme",JSON.stringify(body));


// let getTheme=JSON.parse(localStorage.getItem("pageTheme"))
// console.log(getTheme)


// let darkmode=localStorage.getItem('darkmode');
// const enableDarkmode= () =>{
//     document.body.classList.add('darkmode')
//     localStorage.setItem('darkmode','active')
// }

// const disableDarkmode= () =>{
//     document.body.classList.remove('darkmode')
//     localStorage.setItem('darkmode',null)
// }



