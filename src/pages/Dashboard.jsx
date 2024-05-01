import { useLocation } from 'react-router-dom'

export const Dashboard = () => {

  const Greeting = ({username, name}) => {
    return (
        <>
          <h1>Welcome new user!!!</h1>
          <br />
          Usernam: {username} 
          <br /> 
          Name: {name }
        </>
    )
  }
  
  const location = useLocation();
  const data = location?.state?.registerUser ?? null

  return (
      <>
        {data ?
          <Greeting {...data} />
          :
          <h1> Your are not a new registred user </h1>
        }
      </>
      
  )
}
