import React from 'react'
import { SingleTask } from './SingleTask'


export const Task = ({task, onDelete, onToggle}) => {



  return (
    <>
        {task.map((item)=>(
         <SingleTask key={item.id} item={item} onToggle={onToggle} onDelete={onDelete}/> 
         ))}
    </>
  )
}
