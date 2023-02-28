import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { gmAction,gnAction } from '../redux/Message/message.action'
let Message=()=>{
    let dispath=useDispatch()
    let Message=useSelector((state)=>{
        return state
    })
        
    let gmHandler=()=>{
        dispath(gmAction())

    }
    let gnHandler=()=>{
        dispath(gnAction())
    }
  return (
    <div>
        <pre>{JSON.stringify(Message)}</pre>
        <h1>Message:{Message.msg}</h1>
        <button onClick={gmHandler  }>GM </button>
        <button onClick={gnHandler  }>GN</button>
    </div>
  )
}

export default Message
