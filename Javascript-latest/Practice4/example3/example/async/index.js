async function getData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/user')
    const data=await response.json();
    return data;
}

async function displayData(){
    const display=await getData()
    console.log(display)
    try{
        let rows="";
        display.map((d)=>{
            rows+=`<tr>
                   <td>${d.id}</td>
                   <td>${d.name}</td>
            
                  </tr>`
        })
        document.getElementById("data").innerHTML=rows;
    }
    catch(error){
       console.log("Unable to fetch API",error)
    }
 
}

displayData()