import {React,Component} from 'react'


class CompC extends Component{
   message="world"
    render(){
       var name="Sunny";
        return(
            <div>
            <h1>CompC</h1>
            <p>Name:{name}</p>
            <h3>Message:{this.message}</h3>
        </div>
        )
     
    }

    
}

export default CompC;