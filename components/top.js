import Link from "next/link"

const Top = () => {

    return (
        <div>
            <h1>Portal</h1>
            <br/>
            <Link href="/">Home</Link> | <Link href="/blog">Blog</Link> 
        </div>
    )
}

export default Top