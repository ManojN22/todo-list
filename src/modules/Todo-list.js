function TodoList({todoList,setTodoList}){
    function deleteElement(index){
         let temp = [...todoList];
         temp.splice(index,1);
        setTodoList(temp);  
    }
    return <ul className="list">
       {todoList.map( (data,index)=><li className="spacing" key={data+index}>
        <div className="line">{data}</div>
        <button className="line btn-red" onClick={()=>{deleteElement(index)}}> DELETE</button>
        </li>)}
    </ul>;
}
export default TodoList