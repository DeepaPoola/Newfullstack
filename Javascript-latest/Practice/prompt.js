//input

/*let userName= window.prompt("what's your name")
console.log(userName)*/

function Submit(){
    let userName=document.getElementById('mytext').value;
    let myh1=document.getElementById('myh1');
    myh1.innerHTML+=`hello ${userName}`
    document.getElementById('mytext').value="";
    // document.getElementById('myh1').innerHTML+=`Hello ${userName}`
    // let user=document.getElementById('myh1').innerHTML;
    // user+=`Hello ${userName}`
    // console.log(user)
  // user.innerHTML+=` Hello ${userName}`;
  // let user= document.getElementById('myh1');
  // console.log(user.innerHTML)
    //document.getElementById('myh1').innerHTML=`Hello ${userName}`
    //document.getElementById('myh1').textContent=`Hello ${userName}`
}


