var employee=[{id:10,name:"deepa",salary:20000},{id:20,name:"sunny",salary:30000}]
console.log(employee)
console.log(employee.id)
console.log(Object.keys(employee))
console.log(Object.values(employee))
console.log(Object.entries(employee))
for(emp in employee)
{
    console.log(emp)
    console.log(employee[emp])
}
if(Object.keys(employee).length-1==0)
{
    console.log("empty")
}
else{
    console.log("Not empty")
}