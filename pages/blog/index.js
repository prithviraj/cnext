import Posts from "../../posts.json"
import Link from "next/link"

const Blog = () => {

    const PostLinks = () => { 


        return Object.entries(Posts).map((item) => {
      
            return (<li><Link href={"blog/"+item[0]}>{item[1].title}</Link></li>)
           
         })


    }     

    return (
        <div>
            <style jsx>{`
                h1 {
            font-size: 3rem;
            color: blue;
                }
                `}</style>
            <h1>Blog</h1>
            <br/>
            <ul>
            <PostLinks/>
            </ul>
        </div>
    )
}

export default Blog;
