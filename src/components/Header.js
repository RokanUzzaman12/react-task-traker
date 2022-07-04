import React from 'react'
import { Button } from './reuse/Button'

export const Header = ({title,buttonClick}) => {
   const onSubmit = ()=>{
    buttonClick()
    }
  return (
    <header className='header'>
        <h1> {title}</h1>
        <Button onClick={onSubmit}  color='green' text='Add'/>
    </header>
  )
}

Header.defaultProps = {
    title:"this is default title"
}

