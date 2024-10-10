let employee=[];

let createEmployee=(emp)=>{
    return new Promise((resolve,reject)=>{
    let flag=true;
    setTimeout(() => {
        employee.push(emp);
        flag ? resolve("inserted"):reject("Not inserted")
    }, 2000);
    })
}

let getEmployee=(emp)=>{
    
    setTimeout(() => {
        let rows="";
        employee.map((emp)=>{
          rows+=`<tr>
                 <td>${emp.id}</td>
                 <td>${emp.name}</td>
                 <td>${emp.salary}</td>
                </tr>`
        })
        document.getElementById("body-data").innerHTML=rows;
    }, 1000);
}

createEmployee({id:1,name:"sunny",salary:20000})
.then((msg)=>{
console.log(msg)
getEmployee()
})
.catch((err)=>{
 console.log(err)
})