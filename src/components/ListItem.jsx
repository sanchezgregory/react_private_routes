import React from 'react'
import { useState } from 'react'

 


export const ListItem = ({item, onUpdate, onDelete}) => {

  const [isEdit, setIsEdit] = useState(false)
  const [isDelete, setIsDelete] = useState(false)

  function DeleteItem() {
    
    return (
        <div className="edit-item">
          Dou you really want to delete this item? 
          <br /> <strong>{ item.title} </strong>
          <br /><button onClick={() => onDelete(item.id)}  className='btn-edit-item'>Delete</button>
        </div>
    )
  }

  function EditItem() {

    const [newValue, setNewValue] = useState(item.title)
    function handleSubmit(e) {
        e.preventDefault()
        onUpdate(item.id, newValue)
        setIsEdit(false)

    }
    function handleOnChange(e) {
        const {value} = e.target
        setNewValue(value)
    }
    return (
        <form className="form-edit-item" onSubmit={handleSubmit}>
            <input type="text" defaultValue={newValue} onChange={handleOnChange}/>
            <button type='submit'>Update</button>
        </form>
    )
  }

  function Item (){
    return (
        <div className="item">
            Title: {item.title} Completed: {item.completed}
            <button onClick={() => setIsEdit(true)} className='btn-edit-item'>Edit</button>
            <button onClick={() => setIsDelete(true)} className='btn-delete-item'>Delete</button>
        </div>
    )
}
  return (
    <div className='list-item'>

        {isEdit ? <EditItem /> : isDelete ?  <DeleteItem /> : <Item />  } 
        
    </div>
  )
}
