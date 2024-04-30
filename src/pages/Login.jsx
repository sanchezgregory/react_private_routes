import {useState} from 'react'
import {Link, useNavigate, useLocation,} from 'react-router-dom'
import { ADMIN, REGISTER } from '../config/routes/routes'
import { useAuthContext } from '../contexts/authContext'

export const Login = () =>  {

  const {login} = useAuthContext()
  const navigate = useNavigate()
  const referal = useLocation()

  let initialFormData = {
    username:'',
    password:''
  }

  const [data, setData] = useState(initialFormData)

  const handleChange = (key, value) => {
    initialFormData = {
      ...data,
      [key] : value
    }
    setData(initialFormData)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    login()
    const redirectTo = referal?.state?.location?.pathname ?? ADMIN
    console.log(redirectTo)
    navigate(redirectTo)
  } 

  return (
    <div className="login">
      <h4>Login</h4>
      <form onSubmit={(e)=> {handleSubmit(e)}}>
        <div className="text_area">
          <input
            type="text"
            id="username"
            name="username"
            onChange={(e) => {handleChange(e.target.name, e.target.value)}}
            placeholder="username"
            className="text_input"
          />
        </div>
        <div className="text_area">
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => {handleChange(e.target.name, e.target.value)}}
            placeholder="password"
            className="text_input"
          />
        </div>
        <input
          type="submit"
          value="LOGIN"
          className="btn-login-register"
        />
      </form>

      <span className="link"><Link to={REGISTER} > Sign Up </Link></span>
    </div>
  )
}
