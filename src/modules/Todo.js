import { useState } from "react";
import { EditTodoData } from "../API/getTodo";

function TodoItem({todoItem,onDelete,onEdit}){
    var [edit,setEdit] = useState(false);
    var [editTodoValue,setEditTodoValue] = useState(todoItem.data);
    function save(){
        let data = {data:editTodoValue};
        if(edit){
            onEdit(todoItem.id,data);
            setEdit(false);
        }
    }
    return <li className="spacing" key={todoItem.id}>
        {!edit?<div className="line">{todoItem.data}</div>:<input className="line" type='text' value={editTodoValue} onChange={(e)=>{setEditTodoValue(e.target.value)}}/>}
        <div>
        {!edit?<button className="line btn-blue" onClick={()=>{setEdit(!edit)}}> EDIT</button>:<button className="line btn-blue" onClick={()=>{save(!edit)}}> SAVE</button>}
        <button className="line btn-red" onClick={()=>{onDelete(todoItem.id)}}> DELETE</button>    
        </div>
        
        </li>;
}
export default TodoItem