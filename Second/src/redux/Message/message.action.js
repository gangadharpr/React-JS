let GM="GM"
let GN="GN"
let gmAction=()=>{
    console.log("GM")
    return {type:GM}
}
let gnAction=()=>{
    console.log("GN")
        return {type:GN}
}
export {gmAction,gnAction,GM,GN}