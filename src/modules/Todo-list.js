import { useState } from "react";
import TodoItem from "./Todo";

function TodoList({todoList,onDelete,onEdit}){
    return <ul className="list">
       {todoList.map( (data)=><TodoItem todoItem={data} onDelete={onDelete} onEdit={onEdit}/>)}
    </ul>;
}
export default TodoList