import { Link } from 'react-router-dom'
import { SEE_POST } from "../config/routes/routes"

export default function Post({post}) {
    
  return (
    <>  
        <td>{post.title} </td>
        <td> 
            <Link to={`${SEE_POST}/${post.id}`}> See </Link> |
            Delete | 
            Update
        </td>
    </>
  )
}