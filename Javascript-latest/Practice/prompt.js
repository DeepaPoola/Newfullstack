//input

/*let userName= window.prompt("what's your name")
console.log(userName)*/

function Submit(){
    let userName=document.getElementById('mytext').value;
    document.getElementById('myh1').innerText=`Hello ${userName}`
    //document.getElementById('myh1').innerHTML=`Hello ${userName}`
    //document.getElementById('myh1').textContent=`Hello ${userName}`
}


