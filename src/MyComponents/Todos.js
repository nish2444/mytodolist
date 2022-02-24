import React from 'react'
import { TodoItem } from '../MyComponents/TodoItem';
export const Todos = (props) => {
    let myStyle={
        minheight: "100vh"
        
    }
    return (
       
        <div className="conatiner  my-3 mx-3" style={myStyle}>
            
            <h3 className=' my-3 mx-3'>Todos List</h3>
            {
                props.todos.length==0?"No todos to display" :
            props.todos.map((todo)=>{
                return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}></TodoItem>
            })}
        </div>
    )
}
