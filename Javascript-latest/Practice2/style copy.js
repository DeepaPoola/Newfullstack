
    var min=1;
    var max=10;
    var running=true;
    var result=Math.floor(Math.random()*(max-min+1))+min;
    var test;
    console.log(result)
    while(running){
     test=window.prompt("guess number")
     test=Number(test);
    
        if(test==result){
            window.alert("its equal")
            // demo.textContent=`its equal`
        }
        else if(test<result){
            window.alert("its low")
            //  demo.textContent=`its low`
        }
        else{
            window.alert("its high")
            //  demo.textContent=`its high`
        }
    }



   


