import { useLocation } from 'react-router-dom'
import {useAppPostContext} from '../contexts/appPostContext'
import DragonBallCard from '../components/DragonBallCard'
import DragonBallCard_2 from '../components/DragonBallCard_2'
import DragonBallCard_3 from '../components/DragonBallCard_3'
import styled from 'styled-components'

const CardsContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`
export const Dashboard = () => {

  const {chars} = useAppPostContext()

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
        <hr />
        <CardsContainer>
          {chars && chars.length > 0 && chars.map((char) => (
            char.id < 4 ? <DragonBallCard_2 key={char.id} Character={{char}} /> :
            char.id < 8 ? <DragonBallCard_3 key={char.id} Character={{char}} /> :
            <DragonBallCard key={char.id} Character={{char}}/>
          ))
        }
        </CardsContainer>
      </>
      
  )
}
