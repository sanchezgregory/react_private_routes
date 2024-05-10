import { useRef } from "react"
import Post from "../components/Post"
import { useAppPostContext } from "../contexts/appPostContext"
import '../assets/posts.css'

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
                <div className="data-posts">
                    <div className="data-header">
                        <button className='btn-reload' onClick={onReload}>Reload Posts</button>
                        <div className="filter-posts">
                            <input type="text" name="filter" placeholder='filter' onChange={(e) => handleSearch(e)} id='input-filter'/>
                        </div>
                        <div className="add-post">
                            <input type="text" name="title" ref={titleRef} placeholder="Title"/>
                            <input type="text" name="body" ref={bodyRef} placeholder="Body"/>
                            <button onClick={handleAddPost}>+</button>
                        </div>
                    </div>
                    <div className="data-body">
                    {isFiltering && filteredPosts.length > 0 ? filteredPosts.map(post => (
                                <Post key={post.id} post={post}/>
                            )) 
                            :
                                posts && posts.length > 0 ? posts.map(post => (
                                   <Post key={post.id} post={post}/>
                            )) : 
                                <div className="no-data">
                                    No hay datos para mostrar
                                </div>
                            }
                    </div>
                </div>
            }
        </div>
    </>
    )
  }