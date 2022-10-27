import Head from 'next/head'
import Image from 'next/image'

export default function Home({ comments }) {
    return (
    <div>
        <Head>
            <title>Test App</title>
            <meta name="description" content="ez egy test"/>
        </Head>
        <h1>Szia Andras</h1>
        <p>Kiprobalom a data fetchinget</p>

        {comments.map((comment) => (
            <h3>{comment.name}</h3>
        ))}
    </div>
  )
}

export const  getStaticProps = async () => {
    const  res = await fetch("https://jsonplaceholder.typicode.com/post/1/comments")
    const  comments = await res.json()

    return{
        props: {
            comments
        }
    }
}
