import { useRouter } from "next/router";
import Posts from "../../posts.json";

const Blog = () => {

    const router =  useRouter()

    const Post =  Posts[router.query.id]

        

    if(!Post){

        return (<p>No Blog Found!</p>)
    }

    return (
        <div>
            <h1>Blog</h1>
            <br/>
          
            <h3>{Post.title}</h3>
            <i>{ router.query.id }</i>
            <br/>
            <p>{Post.body}</p>
        
                
 
        </div>
    )

}

export default Blog;