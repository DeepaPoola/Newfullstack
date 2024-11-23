import {INCR,DECR} from './product.action'

let initialState={
    name:"Apple Iphone 12",
    image:"https://www.google.com/imgres?q=iphone%20images&imgurl=https%3A%2F%2Finventstore.in%2Fwp-content%2Fuploads%2F2023%2F04%2FBlue-scaled.webp&imgrefurl=https%3A%2F%2Finventstore.in%2Fproduct%2Fiphone-14%2F&docid=2Df8bABBZ_FC6M&tbnid=tgYD-8ztCOpw-M&vet=12ahUKEwisjKXsl-iJAxWZSmwGHf9jO3YQM3oECGcQAA..i&w=2560&h=2560&hcb=2&ved=2ahUKEwisjKXsl-iJAxWZSmwGHf9jO3YQM3oECGcQAA",
    price:20000,
    qty:1
}

let productReducer=(state=initialState,action)=>{
   switch(action.type){
    case INCR:
        return {...state,qty:state.qty+1}
    
    case DECR:
        return {...state,qty:state.qty-1}

    default:
        return state

   }
}

export {productReducer}