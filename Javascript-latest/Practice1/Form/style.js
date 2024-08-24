function Submit(){
    let username=document.getElementById("Username").value;
    let Password=document.getElementById("Password").value;
    let confirmpswd=document.getElementById("confirmpswd").value;
    let Email=document.getElementById("Email").value;
    let Mobile=document.getElementById("Mobile").value;
    // let myh2= document.getElementById("myh2");
    let usermessage=document.getElementById("usermessage")
    let passwordmessage=document.getElementById("passwordmessage")
    let confirmmessage=document.getElementById("confirmmessage")
    let emailmessage=document.getElementById("emailmessage")
    let mobilemessage=document.getElementById("mobilemessage")
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const pattern=/^.*(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#$%&?@ "]).*$/;
    
    // const pattern = /^(?=.*\d)(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])(?=.*[a-z])(?=.*[A-Z]).{5,10}$/;
    // const pattern="/^\S*(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])"
    // const pattern=/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{8,}$/
    
    // myh2.textContent=`${username} has logged in`;
    
    if(username==""){
        usermessage.textContent="Please Enter user name"
        return false; 
    }
    if(/\d/.test(username)){
      usermessage.textContent="Please Enter letters only"
      return false;
     }
     if(!/^[A-Z]/.test(username))
     {
      usermessage.textContent="Name starts with Capital letter"
      return false;
     }
     if(username.length < 8){
      usermessage.textContent=`Please Enter Min 8 Char`
      return false;
    }
  
    else{
        usermessage.textContent=""
    }
   if(Password=="")
   {
    passwordmessage.textContent=`Please Enter value`
    return false;
   }
  if(Password.length < 8)
  {
    passwordmessage.textContent=`Please Enter Min 8 Char`
    return false;
  }
  if(!Password.match(pattern)){
    passwordmessage.textContent=`Please include atleast 1num,1uppercase,1lowercase and 1 special characters`
    return false;
  }

  else{
    passwordmessage.textContent=""
  }
  if(confirmpswd=="")
  {
      confirmmessage.textContent=`Please enter  password`
      return false;
  }
  if(confirmpswd!=Password){
    confirmmessage.textContent=`Password doesn't match`
    return false;
  }
  else{
    confirmmessage.textContent=""
  }
  if(Email=="")
  {
    emailmessage.textContent=`Please Enter value`
    return false;
  }
  if(!Email.match(regexEmail))
  {
    emailmessage.textContent=`Please enter valid email`
    return false;
  }
  else{
    emailmessage.textContent=""
  }
  if(Mobile==""){
    mobilemessage.textContent=`please enter number`
    return false
  }
  if(isNaN(Mobile)){
    mobilemessage.textContent=`please enter valid  number`
    return false
  }
  if(Mobile.length!==10){
     mobilemessage.textContent=`please enter 10 digit number`
     return false;
  }
  else{
    mobilemessage.textContent=""
  }
  

// document.getElementById("Username").value=""

  
}



