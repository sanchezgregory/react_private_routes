import {useNavigate, useLocation } from 'react-router-dom'
import { useAuthContext } from '../contexts/authContext'
import { useState } from 'react'
import { ADMIN } from '../config/routes/routes'

const resgisterObj = {
  username:'',
  name:'',
  password:''
}

export const Register = () => {

  const navigate = useNavigate()
  const {register} = useAuthContext()
  const [registerUser, setRegisterUser] = useState(resgisterObj)

  const handleChange = (key, value) => {
    const regis = {
      ...registerUser,
      [key]:value
    }
    setRegisterUser(regis)
  }
  const handleSubmit = (e) => {
      e.preventDefault()
      const result = register(registerUser)
      if(result) {
        navigate('/admin', {state: { registerUser}})
      }
  }


  return (
    <div className="login">
      <h4>Register</h4>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="text_area">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username"
            className="text_input"
            onChange={(e) => {handleChange(e.target.name, e.target.value)}}
          />
        </div>
        <div className="text_area">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="name"
            className="text_input"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </div>
        <div className="text_area">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            className="text_input"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </div>
        <input
          type="submit"
          value="Accept"
          className="btn-login-register"
        />
      </form>
    </div>
  )
}
