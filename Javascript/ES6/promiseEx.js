let task =(success,failure)=>{
    let flag=true;
    if(flag==true){
        console.log("Inserted")
    }
    else{
        console.log("Not Inserted")
    }
  }
  task((msg)=>{
      console.log(msg)
  },(error)=>{
      console.error(error);
  })