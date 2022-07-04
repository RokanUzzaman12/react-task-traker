import React from 'react'
import {FaTimes} from 'react-icons/fa'

export const SingleTask = ({item, onDelete, onToggle}) => {
  return (
    <div className={`task ${item.reminder ? 'reminder': ''}`} onDoubleClick={()=>onToggle(item.id)}>
         <h3 >{item.text}
         <FaTimes onClick={()=>onDelete(item.id)}  style={{color:'red', cursor:'pointer'}}/></h3>
         <p>{item.day}</p>
    </div>
   
  )
}
