import{GM,GN} from './message.action'
let initialstate={
    msg:"Hello"
}
let messageReducer=(state=initialstate, action) =>{
 switch(action.type){
    case GM:
        return{msg:"Hello Goood Monrning"}
        
    case GN:
        return{msg:"Hello Good Afternoon"}
    default:
        return state
 }
}

export {messageReducer}
