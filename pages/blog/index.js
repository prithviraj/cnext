import Posts from "../../posts.json"
import Link from "next/link"
import Top from "../../components/top"

const Blog = () => {

    const PostLinks = () => { 


        return Object.entries(Posts).map((item) => {
      
            return (<li><Link href={"blog/"+item[0]}>{item[1].title}</Link></li>)
           
         })


    }     

    return (
        <div>
           <Top/>
            <br/>
            <ul>
            <PostLinks/>
            </ul>
        </div>
    )
}

export default Blog;
