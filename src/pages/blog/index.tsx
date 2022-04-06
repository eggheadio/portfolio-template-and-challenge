import type { NextPage } from 'next'
import type { PostType } from '../../../types/post'
import PostCard from '../../components/PostCard'
import { getAllPosts } from '../../utils/posts'


const Blog: NextPage<{ posts: PostType[] }> = ({ posts }) => {
  return (
    <div className='max-w-4xl mx-auto'>
      <div className='flex items-center justify-center mt-14'>
        <h1 className="font-sans text-3xl font-bold">
          Hello world, this is my Blog page
        </h1>
      </div>
      <ul className='mt-10'>
        {posts.map((post) => {
          return (
            <PostCard key={post.slug} post={post} />
          )
        })}
      </ul>
    </div>
  )
}

export default Blog


export async function getStaticProps() {

  const posts = getAllPosts(['slug', 'title', 'tags', 'date', 'summary'])

  return {
    props: {
      posts
    }
  }
}