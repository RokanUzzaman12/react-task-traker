import React from 'react'
import { useState } from 'react'

export const AddTask = ({onAdd}) => {
    const [text,setText] = useState('')
    const [day,setDay] = useState('')
    const [reminder,setReminder] = useState('')
    const submit=(e)=>{
        e.preventDefault()
        if(!text){
            alert('please add a task')
            return
        }
        onAdd({text, day, reminder})
        setText('')
        setDay('')
        setReminder(false)
    }
  return (
    <form className='add-form' onSubmit={submit}>
        <div className='form-control'>
            <label>Task</label>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder = "Add new Task"/>
        </div>

        <div className='form-control'>
            <label>Date and Time</label>
            <input type="text" value={day} onChange={(e)=>setDay(e.target.value)}  placeholder = "Add new Task"/>
        </div>

        <div className='form-control form-control-check'>
            <label>Set Reminder</label>
            <input type="checkbox" checked={reminder} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}  placeholder = "Add new Task"/>
        </div>
        <input type='submit' className='btn btn-block' value='Save'/>
    </form>
  )
}
