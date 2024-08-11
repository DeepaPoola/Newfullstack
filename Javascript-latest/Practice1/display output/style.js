
// function Load(){
//      let display=document.querySelectorAll(".display");
//     let newinput=document.createElement("input")
//     newinput.setAttribute("type","password")
//     newinput.setAttribute("placeholder","password")
    
//     document.body.appendChild(newinput);
    
   
// }


function Submit(){
    let username=document.getElementById('userName').value;
    //console.log(username)
//    let user= document.getElementById("myh2");
//    user.textContent+=`${username} has successfully logged in`
let newinput=document.createElement("input")
newinput.setAttribute("type","password")
newinput.setAttribute("placeholder","password")

document.body.appendChild(newinput);

document.getElementById("myh2").textContent=`${username} has successfully logged in`

 //after submitting clear the input
document.getElementById('userName').value="";
    // alert(`${username} has succussfully logged in`);
  
}