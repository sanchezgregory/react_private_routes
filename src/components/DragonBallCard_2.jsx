import { Children } from 'react'
import styled from 'styled-components'

const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 384px;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background: #fff;
    box-shadow: 14px 17px 42px -3px rgba(0,0,0,0.3);
    margin-bottom: 5px;
`

const CardImg = styled.div`
    height: 145px;
    width: 100%; 

    overflow: hidden;
    margin-bottom: 20px;
`

const CardAvatar = styled.div`
    height: 100px;
    width: 40%;
    border-radius: 50%;
    overflow: hidden;
    margin-top: -40px;
    border: 3px solid #fff;
    transition: all 1.2s;
    margin-bottom: -17px;
    filter:drop-shadow(3px -2px 3px #000);
    &:hover {
        scale: 1.1;
    }
`

const CardTitle = styled.div`
     display: flex;
     justify-content: flex-end;
     width: 100%;
     height: 15px;
     font-weight: 500;
     padding-right: 20px;
     font-size: 25px;
     color: #000;
     background: linear-gradient(90deg, rgba(0,0,0,1) 20%, rgba(203,52,29,1) 36%, rgba(240,244,245,1) 76%);
     margin-bottom: 15px;
 `

 const CardDescription = styled.div`
    flex-grow: 1;
    flex-shrink: 1;
    margin-top: 10px;
    font-weight: 400;
    font-size: 15px;
    color: #78858f;
 `
const CardWrapper = styled.div`
    background: orange;
    width: 100%;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
`
const DragonBallCard_2 = ({Character}) => {
    const {char} = Character

    function truncate(str) {
        return  str.length <= 90 ? str : str.substring(0, 90) + "...";
    }

    
  return (
    <Card >
        <CardImg >
            <img src="../public/DB_logo.png" style={{width:'100%', borderRadius:'20px 20px 0 0'}} />
        </CardImg>
        <CardAvatar>
            <img src={char.image} style={{ width:'100%', height:'150px' }} />
        </CardAvatar>
        <CardTitle>
            {char.name}
        </CardTitle>
        <CardDescription>
            {truncate(char.description)}  
        </CardDescription>
        <CardWrapper>
            <button className='btn1'>+ info</button>
            <button className='btn1'>ver</button>
        </CardWrapper>
    </Card>
  )
}


export default DragonBallCard_2