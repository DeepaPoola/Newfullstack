
function show(){
    const mybutton=document.getElementById("mybutton");
    const mypara=document.getElementById("mypara");
  
    if(mypara.style.visibility === "hidden")
    {
        mypara.style.visibility="visible"
        mybutton.textContent="hide"
    }
    else{
        mypara.style.visibility="hidden"
        mybutton.textContent="show" 
    }

}