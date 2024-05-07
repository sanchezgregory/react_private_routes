import { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-wrap: ${props => (props.wrap ? 'wrap' : 'nowrap')};
flex-direction: row;
padding: 5px;
height: 50px;
justify-content: space-between;
align-items: center;
border-radius: 5px;
height: auto;
transition: all .3s ease;
  &:hover {
    background: white;
    color:#000;
  }
`

const Input = styled.input`
  padding: 5px;
  width: 100%;
  height: 40px;
`

const Button = styled.button`
  width:60px;
  height: 40px;
  border-radius: 5px;
  background: ${props => props.delete ? 'red' : props.update ? 'green' : 'blue'};
  color: white;
`

const ToRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  margin-top: 20px;
`

export const ListItem = ({item, onUpdate, onDelete}) => {

  const [isEdit, setIsEdit] = useState(false)
  const [isDelete, setIsDelete] = useState(false)

  function DeleteItem() {
    return (
      <Container wrap='true'>
          Dou you really want to delete this item? 
          <strong>{ item.title} </strong>
          <ToRight>
            <Button delete='true' onClick={() => onDelete(item.id)} >Delete</Button>
            <Button onClick={() => setIsDelete(!isDelete)} >Cancelar</Button>
          </ToRight>
            
      </Container>
    )
  }

  function EditItem() {

    const [newValue, setNewValue] = useState(item.title)

    function handleSubmit() {
        onUpdate(item.id, newValue)
        setIsEdit(false)
    }

    function handleOnChange(e) {
        const {value} = e.target
        setNewValue(value)
    }

    return (
      <Container wrap='true'>
          <Input type="text" defaultValue={newValue} onChange={handleOnChange}/>
          <ToRight>
            <Button update='true'  onClick={handleSubmit}>Update</Button>
            <Button onClick={()=> setIsEdit(!isEdit)}>Cancelar</Button>
          </ToRight>
      </Container>
    )
  }

  function Item (){
    return (
      <Container>
          {item.title} 
          <br />Completed: {item.completed}
          <div className="buttns">
              <Button onClick={() => setIsEdit(true)} >Edit</Button>
              <Button onClick={() => setIsDelete(true)} >Delete</Button>
          </div>
      </Container>
    )
}
  return (
    <div className='list-item'>

        {isEdit ? <EditItem /> : isDelete ?  <DeleteItem /> : <Item />  } 
        
    </div>
  )
}
