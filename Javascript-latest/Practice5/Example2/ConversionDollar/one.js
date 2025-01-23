var select=document.querySelectorAll('.currency');
var input_currency=document.getElementById('input_currency');
var output=document.getElementById('output_currency');

const host='api.frankfurter.app';
fetch(`https://${host}/currencies`)
.then((data)=>data.json())
.then((data)=>{
    const entries=Object.entries(data);
    console.log(entries)
    for(i=0;i<entries.length;i++){
        select[0].innerHTML+=`<option value="${entries[i][0]}">${entries[i][0]}</option>`
        select[1].innerHTML+=`<option value="${entries[i][0]}">${entries[i][0]}</option>`
    }
    // alert(`10 GBP =${data.rates.USD} USD`);
})

const Convert=()=>{
    var input_currency_val=input_currency.value;
    if(select[0].value!= select[1].value)
    {
        alert("right")
    }
    else{
        alert("please select two different values")
    }
}



//currency conversion api- https://www.frankfurter.app/docs/