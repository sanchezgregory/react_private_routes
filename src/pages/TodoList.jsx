import React, {useState} from 'react'
import { useRef } from 'react'
import { ListItem } from '../components/ListItem'

export const TodoList = () => {

    const [title, setTitle] = useState('')
    const [list, setList] = useState([])
    const handleAddItem = () => {
        
        const item = {
            id: crypto.randomUUID(),
            title: title,
            completed:false
        }
        setList([...list, item])
        setTitle('')
    }
    function handleChange(e) {
        const {value} = e.target
        setTitle(value)
    }
    function handleUpdate(id, value) {
        const temp = [...list]
        const item = temp.find(item => item.id == id)
        item.title = value
        setList(temp)
    }
    function handleDelete(id) {
        const temp = list.filter(item => item.id !== id )
        setList(temp)
    }

    return (
        <>
            <div className='todo-list-title'>
                <h2>Lista de tareas</h2>
                <input type="text" className='input-text' onChange={handleChange} value={title}/>
                <button onClick={handleAddItem} className='todo-button'>Agregar </button>
            </div>
            <div className='todo-list'>
                {list && list.length > 0 ? 
                    list.map((item) => (
                    <ListItem key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete}/>
                    ))
                    : <div>No hay datos</div>
                }
            </div>
        </>
    )
}