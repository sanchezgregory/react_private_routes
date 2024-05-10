import { Link } from 'react-router-dom'
import { SEE_POST } from "../config/routes/routes"
import '../assets/posts.css'

export default function Post({post}) {
    
  return (
    <div className='post'>  
          <div>{post.title}</div>
          <div className='links'>
            <Link to={`${SEE_POST}/${post.id}`}> See </Link>
            <Link to={`${SEE_POST}/${post.id}`}> Del </Link>
            <Link to={`${SEE_POST}/${post.id}`}> Edit </Link>
          </div> 
    </div>
  )
}