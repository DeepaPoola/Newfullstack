let employee=[];

let createEmployee=()=>{
    return new Promise((resolve,reject)=>{
    let flag= fetch('https://dummyjson.com/users')
    console.log(flag)
    setTimeout(() => {
       
    
        // employee.push(emp);
        flag ? resolve("inserted"):reject("Not inserted")
    }, 2000);
    })
}

let getEmployee=(users)=>{
    
    setTimeout(() => {
        let rows="";
        users.map((user)=>{
          rows+=`<tr>
                 <td>${user.id}</td>
                 <td>${user.firstName}</td>
                 <td>${user.lastName}</td>
                </tr>`
        })
        document.getElementById("body-data").innerHTML=rows;
    }, 1000);
}

createEmployee()
.then((response)=>{
   console.log(response.json)
   getEmployee()
})

.catch((err)=>{
 console.log(err)
})