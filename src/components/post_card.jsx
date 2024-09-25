import "../styles/post-card.css"
const PostCard = ({post})=>{
    return(
        <div className="post-card">
            <div className="post-id">
                {post.id}
            </div>
            <div className="post-title-desc">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        </div>
    )
}
export default PostCard