
// let users =[]


let getEmployee=(users)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
        if(users.length>0){
            resolve("inserted") ;
            let rows="";
            users.map((user)=>{
              rows+=`<tr>
                     <td>${user.id}</td>
                     <td>${user.name}</td>
                    </tr>`
                  
            })
        
            
            document.getElementById("data").innerHTML=rows;
            
        }
        else{
            reject("not inserted")
        }
      
    }, 1000);
  })
   
}

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{

    //   console.log(response)
    return response.json();
    
  })
  .then((data)=>{
    console.log(data)
    getEmployee(data)
 })
 .then((resolve)=>{
    console.log(resolve.msg)
 })
 .catch((error)=>{
     console.error(error);
 })

   
 

 







    // users ? resolve("inserted") : reject("not inserted");

// let myFunction=async()=>{
//     let response=await fetch('https://dummyjson.com/users');
//     let  users=await response.json();
//     await createEmployee().then((msg=>{
//         console.log(msg)
//     })).catch(error=>console.log(error))
//     getEmployee();
//     return users;
// }

// myFunction()


//  let run= async()=> {
//     await createEmployee()
//     getEmployee();
//  }
//  run();
// .then((response)=>{
// //    console.log(response.json)
//    getEmployee()
// })

// .catch((err)=>{
//  console.log(err)
// })