import { Children } from 'react'
import styled from 'styled-components'



const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 384px;
    border-radius: 20px;
    background-color:red;
    transition: 0.4s;
    &:hover {
        scale: 1.1;
    }
`

const CardImg = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    height: 170px;
    width: 250px;    
    filter:drop-shadow(5px -4px 10px #000);
`

const CardTitle = styled.div`
    width: 100%;
    padding: 5px;
    background-color: black;
    color: white;
    z-index: 10;
`
const CardDescription = styled.div`
    color: gray;
    padding: 10px;
    background-color: white;
    height: 150px;
    width: 100%;
    z-index: 2;
    text-align: justify;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    
`
const CardButton = styled.div`
    width: 100%;
    height: 50px;
    flex-grow: 1;
    flex-shrink: 1;
`
const DragonBallCard_3 = ({Character}) => {
    const {char} = Character

    function truncate(str) {
        return  str.length <= 180 ? str : str.substring(0, 180) + "...";
    }

    
  return (
    <Card >
        <CardImg>
            <img className='imgDB' src={char.image} />
        </CardImg>
        
        <CardTitle>
            {char.name}
        </CardTitle>
        <CardDescription>
            {truncate(char.description)}  
            
        </CardDescription>
        <CardButton>
            <button className='btn1'>+ info</button>
        </CardButton>
    </Card>
  )
}


export default DragonBallCard_3