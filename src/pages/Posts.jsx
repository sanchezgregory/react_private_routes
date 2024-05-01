import { SEE_POST } from "../config/routes/routes"
import { useAppPostContext } from "../contexts/appPostContext"
import { Link } from 'react-router-dom'


export default function Posts() {

  const {posts, isLoading, error} = useAppPostContext()
    
  return (
    <>
        <div className="list-posts">
            <h2>Posts </h2>
            <hr />
            {isLoading ? 
                <div className="is-loading">
                    Cargando...
                </div> : 
                <div className="table-data">
                    <table border="1">
                        <thead>
                            <tr>
                                <th>
                                    Title
                                </th>
                                <th>
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts && posts.length > 0 ? posts.map(post => (
                                <tr key={post.id}> 
                                    <td>{post.title} </td>
                                    <td> 
                                        <Link to={`${SEE_POST}/${post.id}`}> See </Link> |
                                        Delete | 
                                        Update
                                    </td>
                                </tr>
                            )) : 
                            <div>
                                No hay datos para mostrar
                            </div>
                            }
                        </tbody>
                    </table>
                </div>
            }
        </div>
    </>
    )
  }