import CustomFormField from "./customFormField"

const PostForm=({onChangeTitle,onChangeDescription,placeholder,onChangeUserId})=>{
    return(
        <div>
            <CustomFormField label="Title" placeholder={"Enter post title"} type={"text"} cName={"title"} onChange={onChangeTitle}/>
            <CustomFormField label="Description" placeholder={"Enter post description"} type={"text"} cName={"body"} onChange={onChangeDescription}/>
            <CustomFormField label="User Id" placeholder={"Enter user id"} type={"number"} cName={"userId"} onChange={onChangeUserId}/>
            <div>
                <input type="submit" value={"Add Post"} style={
                    {
                        backgroundColor:"purple",
                        color:"white",
                        fontSize: "18px",
                        borderRadius: "10px",
                        padding:"10px 2px",
                        border:"none",
                        cursor:"pointer",
                    }
                }/>
            </div>
        </div>
    )
}
export default PostForm;