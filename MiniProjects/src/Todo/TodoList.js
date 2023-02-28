import React from 'react'

const TodoList = ({todolist,deleteHandler}) => {
    return (
        <div>
            {todolist.map((todo,index) =>
            // rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
<div key={index}>
                <h5>{todo} &nbsp; <button onClick={() => deleteHandler(index)}>Delete</button></h5>
            </div>)}
        </div>
    )
}

export default TodoList