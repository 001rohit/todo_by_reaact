import  "./App.css"
import React from 'react'
import { useState } from 'react'
const App=()=> {
  const [task,setTask] = useState([" first task "," second task "]);
  const [newTask,setNewTask] = useState("");
  function handleTaskInput(event){
    setNewTask(event.target.value)
  }
  function addTask(){
    if(newTask.trim()!=""){
      setTask((t)=>[...t,newTask])
      setNewTask("")
    }
  }
  function deleteTask(index){
    const updatedTasks = task.filter((element,i)=>i!==index);
    setTask(updatedTasks);
  }
  function moveTaskUp(index){
    if(index>0){
      const updatedTasks =[...task];
      [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
      setTask(updatedTasks);
    }
  }
  function moveTaskDown(index){
    if(index<task.length-1){
      const updatedTasks =[...task];
      [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
      setTask(updatedTasks);
    }
  }
  return (
    <div className="container">
    <div>
      <h1 className='title'>To-Do-List</h1>
      <input type='text' onChange={handleTaskInput} value={newTask}/>
      <button onClick={addTask}>Add</button>
    </div>
     <ol>
      {task.map((e,index)=><li key={index}><span className='text'> {e} </span> <button className='delete-btn' onClick={()=>deleteTask(index)}> delete </button> <button onClick={()=>moveTaskUp(index)}> 👆 </button> <button onClick={()=>moveTaskDown(index)}> 👇 </button></li>)}
     </ol>
    </div>
  )
}
export default  App