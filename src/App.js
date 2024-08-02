import './App.css';
import { useEffect, useState } from 'react';
import TodoList from './modules/Todo-list';
import {GetTodoData,AddTodoData,EditTodoData,deleteTodoData} from './API/getTodo';
function App() {
  const [inpt , setInpt] = useState("");
  const [todoList,setTodoList] = useState([])
  function inptChange(e){
    setInpt(e.target.value);
  }
  function refreshData(){
    GetTodoData().then((data)=>{
      setTodoList(data);
      });
  }
  useEffect(()=>{
    refreshData();
  },[])
  function addTodoList(){
    if(inpt!==""){
      let data = {data:inpt};
      AddTodoData(data).then((data)=>{
        setTodoList([...todoList,data]);
        setInpt("");
      });
    }
  }
  function onDelete(id){
    deleteTodoData(id).then(()=>{
      refreshData();
    })
  }
  function onEdit(id,data){
    EditTodoData(id, data).then(()=>{
      console.log("sds");
      refreshData();
    })
  }
  return (
    <div className="App">
      <header className="App-header">
     <div className='OutterBoX'>
      <div className='InnerBox'>
        <div className='spacing'>
        <input className='line w-75' value={inpt} onChange={inptChange}/>
       <button className='line w-20 btn-blue' onClick={addTodoList}>ADD</button>
        </div>
        <TodoList todoList={todoList} onDelete={onDelete} onEdit={onEdit}/>
      </div>
     </div>
      </header>
    </div>
  );
}

export default App;
