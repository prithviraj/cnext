import { useRouter } from "next/router";
import Posts from "../../posts.json";
import Top from "../../components/top";

const Blog = () => {

    const router =  useRouter()

    const Post =  Posts[router.query.id]

        

    if(!Post){

        return (<p>No Blog Found!</p>)
    }

    return (
        <div>
            <Top/>
            <br/>
          
            <h3>{Post.title}</h3>
            <i>{ router.query.id }</i>
            <br/>
            <p>{Post.body}</p>
        
                
 
        </div>
    )

}

export default Blog;