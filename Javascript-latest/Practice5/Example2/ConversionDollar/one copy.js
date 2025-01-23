


const Convert=()=>{
    // const USD=document.getElementById("USD").value;
    // const INR=document.getElementById("INR").value;
    const mynumber=document.getElementById("mynumber").value;
    const conversion=document.getElementById("conversion");
    const dollarvalue=document.getElementById("dollarvalue");
    const Dollar=84.81;
    var Inr=mynumber*Dollar;
 
   dollarvalue.textContent=`Dollar value:${Dollar}`
    conversion.textContent=`conversion : ${Inr}`
    console.log(Inr)

}

const Convert1=()=>{
    // const USD=document.getElementById("USD").value;
    // const INR=document.getElementById("INR").value;
    const mynumber1=document.getElementById("mynumber1").value;
    const conversion1=document.getElementById("conversion1");
    const dollarvalue1=document.getElementById("dollarvalue1");
    const INR = 0.012;
    var Usd=mynumber1*INR;
    // var Usd=mynumber1*INR.toFixed(2);
 
   dollarvalue1.textContent=`Inr value:${INR}`
    conversion1.textContent=`conversion : ${Usd}`
    console.log(Usd)

}

