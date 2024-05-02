import { useRef } from "react"
import Post from "../components/Post"
import { useAppPostContext } from "../contexts/appPostContext"


export default function Posts() {

    const titleRef = useRef()
    const bodyRef = useRef()
    const {posts, filteredPosts, isLoading, isFiltering, filterPost, resetFilter, addPost, load, setLoad} = useAppPostContext()

    const handleSearch = (e) => {
        const search = e.target.value
        if (search.length >=3) {
            filterPost(search)
        } else {
            resetFilter()
        }
    }

    const onReload = () => {
        setLoad(!load)
    }

    const handleAddPost = () => {
        const post = {
            title: titleRef.current.value,
            body: bodyRef.current.value
        }
        addPost(post)
    }

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
                                <td colSpan={2}>
                                    <button onClick={onReload}>ReloadPosts</button>
                                    Filter: <input type="text" name="filter" placeholder='filter' onChange={(e) => handleSearch(e)}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    Title <input type="text" name="title" ref={titleRef}/>
                                    Body: <input type="text" name="body" ref={bodyRef}/>
                                    <button onClick={handleAddPost}>+</button>
                                </td>

                            </tr>
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
                            {isFiltering && filteredPosts.length > 0 ? filteredPosts.map(post => (
                                <tr key={post.id}>
                                    <Post post={post}/>
                                </tr>
                            )) 
                            :
                                posts && posts.length > 0 ? posts.map(post => (
                                <tr key={post.id}> 
                                   <Post post={post}/>
                                </tr>
                            )) : 
                            <tr>
                                <td colSpan={2}>
                                    No hay datos para mostrar
                                </td>
                            </tr>
                            }
                            
                        </tbody>
                    </table>
                </div>
            }
        </div>
    </>
    )
  }