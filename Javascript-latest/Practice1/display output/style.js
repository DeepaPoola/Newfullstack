
// function Load(){
     
//     const newinput=document.createElement("input")
//     newinput.setAttribute("type","password")
//     newinput.setAttribute("placeholder","password")
//     newinput.classList="display1"
//     document.display1.append(newinput);
    
   
// }


function Submit(){
    let username=document.getElementById('userName').value;
    //console.log(username)
//    let user= document.getElementById("myh2");
//    user.textContent+=`${username} has successfully logged in`

document.getElementById("myh2").textContent=`${username} has successfully logged in`
document.getElementById('userName').value="";
// let newinput=document.createElement("input")
// newinput.setAttribute("type","password")
// newinput.setAttribute("placeholder","password")
// newinput.classList("display1")
// document.display1.appendChild(newinput);

 //after submitting clear the input

    // alert(`${username} has succussfully logged in`);
  
}