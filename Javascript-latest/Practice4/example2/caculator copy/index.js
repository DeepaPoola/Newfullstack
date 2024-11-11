let display=document.getElementById("display");
const specialchar=["%","*","/","-","+","="]

function operatorDisplay(input){
  
    display.value+=input;
}



function clearDisplay(){
    display.value="" ;
}

function deleteDisplay(){
  display.value=display.value.slice(0,-1);
//   display.value=display.value.toString().slice(0,-1);
}

function calculate(){
    try{
        display.value=eval(display.value)
    }
    catch{
        display.value=`${display.value}`
    }
}