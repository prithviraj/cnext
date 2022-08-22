import Link from "next/link"

const Index = () => {

    return (
        <div>
            <h1>Homepage</h1>
            <br/>
            <Link href="/blog">Blog</Link>
        </div>
    )
}

export default Index;