import {useParams} from 'react-router-dom'
import usePost from '../hooks/usePost'

const SeePost = () => {

    const {id_post} = useParams()
    const [post,  isLoading]  = usePost(id_post)

  return (
    <>
        {!isLoading ? 
            <div className='individual-post'>
                <p />Title: {post.title} 
                <p />Body: {post.body} 
            </div> 
        :
            <div>Cargando</div>
        }
    </>
  )
}
export default SeePost