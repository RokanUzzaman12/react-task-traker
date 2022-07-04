import { Header } from './components/Header';
import './App.css';
import { Task } from './components/Task';
import { useState } from 'react'
import { AddTask } from './components/AddTask';



function App() {
  let name = "Task Traker"

  const [task, setTask] = useState([
    {
        id:1,
        text:"this is my first Task",
        day:"22, feb 2:30pm",
        reminder:false
    },
    {
        id:2,
        text:"this is my second Task",
        day:"22, feb 2:30pm",
        reminder:false
    },
    {
        id:3,
        text:"this is my third Task",
        day:"22, feb 2:30pm",
        reminder:false
    }
])

const deleteTask=(id)=>{
 
  // setTask((state, props) => ({
  //   task: state.task.filter((item)=>item.id !=id)
  // }));
  
  setTask(task.filter((item)=>item.id !=id))
  console.log(task)
}

const toggleReminder=(id)=>{
  setTask(task.map((item)=>item.id === id
  ? {...item, reminder: !item.reminder} : item))
}

const onAdd = (addTask)=>{
  let id = Math.floor(Math.random()*10000 )+ 1

  const newTask = {id, ...addTask}
  setTask([newTask, ...task])
}


const [showInput, setShowInput] = useState(false)

const showFunction= ()=>{
  setShowInput(!showInput)
}
  return (
    <div className="container">
      <Header title= {name} buttonClick = {showFunction}/>
      {showInput && <AddTask onAdd = {onAdd}/>}
      {
        task.length >0 ? <Task task={task} onToggle={toggleReminder} onDelete={deleteTask}/>:"There is no Task"
      }
      
    </div>
  );
}

export default App;
