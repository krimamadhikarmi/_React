import { useEffect, useState } from "react"
import PostCard from "../components/post_card"

const PostScreen = ()=>{
    const [allPosts, setAllPost] = useState([])
    useEffect(
        ()=>{
            fetch("https://jsonplaceholder.typicode.com/posts"
            ).then(
                (response)=>{
                    response.json().then(
                        (data)=>{
                            setAllPost(data)
                        }
                    )
                }
            )
        },
        []
    )
    return(
        <div id="all-posts">
            {
                allPosts.map(
                    (post)=>{
                        return(
                            <PostCard post={post}/>
                        )
                    }
                )
            }
        </div>
    )
}

export default PostScreen