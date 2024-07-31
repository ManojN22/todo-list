import './App.css';
import { useState } from 'react';
import TodoList from './modules/Todo-list';
function App() {
  const [inpt , setInpt] = useState("");
  const [todoList,setTodoList] = useState(["nerw"])
  function inptChange(e){
    setInpt(e.target.value);
  }
  function addTodoList(){
    if(inpt!==""){
      setTodoList([...todoList,inpt]);
      setInpt("")
    }
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
        <TodoList todoList={todoList} setTodoList={setTodoList}/>
      </div>
     </div>
      </header>
    </div>
  );
}

export default App;
