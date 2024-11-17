let employee=[]

let createEmployee = (emp) =>{
    return new Promise((resolve,reject) =>{
        let flag =true;
        setTimeout(() => {
             flag ? resolve("inserted") : reject("not inserted");
             employee.push(emp)
        }, 2000);
        // let flag=fetch(" https://dummyjson.com/users");
        // console.log(flag)
        // setTimeout(() => {
        //     flag ? resolve("data inserted") : reject("data Not inserted");
         
      
        // }, 2000);
        
    })
}

let getEmployee = () =>{
    setTimeout(() => {
        let rows="";
        employee.map((emp)=>{
           rows+=`<tr>
                     <td>${emp.id}</td>
                     <td>${emp.name}</td>
                  </tr>`
        })
        document.getElementById("data").innerHTML=rows;
        console.log(employee)
    }, 1000);

  
}

createEmployee({id:1,name:"Sunny"}).then((msg)=>{
   console.log(msg)
   getEmployee()
})
.catch((err)=>{
  console.log(err)
})