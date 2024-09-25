import { useState } from "react";
import PostForm from "../components/posts_form"

const AddPost=()=>{
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const [userId, setUserId]=useState("1");
    const handleSubmit=(event)=>{
       event.preventDefault();
       console.log("Title",title);
       console.log("Description",description);
       console.log("User Id",userId);
    }
    return(
        <form onSubmit={handleSubmit}>
            <h1>Add Post</h1>
            <PostForm 
              onChangeTitle={
                (e)=>setTitle(e.target.value)}
              onChangeDescription={
                (e)=>setDescription(e.target.value)
              }
              onChangeUserId={
                (e)=> setUserId(e.target.value)
              }
            />
        </form>
    )
}
export default AddPost;