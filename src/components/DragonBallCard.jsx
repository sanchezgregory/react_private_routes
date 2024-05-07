import { Children } from 'react'
import styled from 'styled-components'

const CardImg = styled.div`
    height: 250px;
    width: 250px;
    background-size: cover;
    background-image: ${(props) => `url(${props.imgUrl})`};
    filter:drop-shadow(5px -4px 10px #000);    
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 350px;
    justify-content: center;
    align-items: center;
    border-radius: 10%;
    background-color: #10e;
    transition: 300ms;
    margin: 8px;
    &:hover {
        ${CardImg} {
            transition: 1s;
            transform: scale(1.3);
        }
    }
    &:hover {
        transform: scale(1.1);
    }
`

const CardTitle = styled.div`
    width: 100%;
    padding: 5px;
    background-color: black;
    color: white;
`
const CardDescription = styled.div`
   
   padding: 10px;
   display: -webkit-box;
   -webkit-line-clamp: 3;
           line-clamp: 3; 
   -webkit-box-orient: vertical;
    background-color: white;
    height: 150px;
    width: 100%;
    z-index: 2;
    grid-template-rows: 1fr 1fr 1fr;
    text-align: justify;
    
`
const CardButton = styled.div`
    width: 100%;
    background: white;
    padding: 8px;    
`
const DragonBallCard = ({Character}) => {
    const {char} = Character

    function truncate(str) {
        return  str.length <= 180 ? str : str.substring(0, 180) + "...";
    }

    
  return (
    <Card >
        <CardImg imgUrl={char.image} ></CardImg>
        
        <CardTitle>
            {char.name}
        </CardTitle>
        <CardDescription>
            {truncate(char.description)}  
            
        </CardDescription>
        <CardButton>
            <button>+ info</button>
        </CardButton>
    </Card>
  )
}


export default DragonBallCard