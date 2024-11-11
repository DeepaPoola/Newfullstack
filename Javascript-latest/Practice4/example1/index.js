function rollDice(){
    var numDice=document.getElementById("numDice").value;
    var diceResult=document.getElementById("diceResult");
    var diceImages=document.getElementById("diceImages");
    var values=[];
    var images=[];

    for(var i=0; i< numDice;i++){
        var value=Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="./images/dice${value}.jpg"/>`);
    }
    diceResult.textContent=`Dice is ${values.join(',')}`;
    diceImages.innerHTML=images.join();

}