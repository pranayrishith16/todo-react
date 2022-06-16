import { useEffect, useState } from 'react';
import './App.css';
import uuid from 'react-uuid'
import Input from './components/Input'
import Todo from './components/Todo'

function App() {
  const [todos,setTodos] = useState(JSON.parse(localStorage.getItem('projectTodo')) || {todo:[],done:[]});
  const [text,setText] = useState("");

  const onChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  }

  const addTodo = () => {
    if(text.trim()){
      let newTodo = {id:uuid(),text:text}
      setTodos(prev => ({...prev,
        todo:[newTodo,...prev.todo],
      }));
      setText("");
    }
  }

  const resetData = () => {
    setTodos({todo:[],done:[]});
  }

  const changeStatusT = item => {
    let data = todos.todo.filter(todo => todo.id === item.id);
    setTodos(prev => ({
      done:[...data,...prev.done],
      todo:prev.todo.filter(todo => todo.id !== item.id),
    }))
  }

  const changeStatusD = item => {
    let data = todos.done.filter(done => done.id === item.id);
    setTodos(prev => ({
      todo:[...data,...prev.todo],
      done:prev.done.filter(done => done.id !== item.id),
    })) 
  }

  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      addTodo();
    }
  }

  useEffect(() => {
    localStorage.setItem("projectTodo",JSON.stringify(todos));
  },[todos])


  return (
    <div className="app">
      <div className="header">
        <h2>TODO LIST</h2>
        <button className='button' onClick={resetData}>Reset</button>
      </div>
      <Input text={text} onChange={onChange} handleKeyPress={handleKeyPress} addTodo={addTodo}/>
      <Todo todos={todos} changeStatusD={changeStatusD} changeStatusT={changeStatusT}/>
    </div>
  );
}

export default App;
