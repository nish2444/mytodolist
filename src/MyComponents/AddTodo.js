
import React, { useState } from 'react';

export const AddTodo= (props) => {
    const [title,setTitle]= useState("");
    const [desc, setDesc]=useState("");

    const submit = (e)=>{
        e.preventDefault();
        props.addTodo(title,desc);
        setTitle("");
        setDesc("");
    }
    

    return (
        <div className="container ">

        <h3>ADD A TODO</h3>
        <form onSubmit={submit} >
    <div className="mb-3">
        <label htmlFor="title" className="form-label">ToDoTitle </label>
        <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="textHelp"/>
            
    </div>
    <div className="mb-3">
        <label htmlFor="desc" className="form-label">Todo Description</label>
        <input type="Text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"/>
    </div>
    <button type="submit" className="btn btn-sm btn-success">submit</button>
</form>
</div>
    )
}
