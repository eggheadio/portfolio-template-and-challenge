import type { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import type PostType from '../../../types/post'
import { getPostBySlug, getAllPosts, markdownToHtml } from '../../utils/posts'

type PagePost = {
  post: PostType
}


const Post: NextPage<PagePost> = ({post}) => {
    return (
      <div className='max-w-4xl mx-auto mt-8'>
        <h1 className="text-4xl font-bold mx-auto">
          {post.title}
        </h1>
        <div className='flex flex-row gap-2 my-2'>
          <span>{post.date}</span>
          {
            post.tags ?
              (<ul>
                {post.tags.map((tag)=> {
                  return <li className='bg-green-400 px-2 rounded-xl' key="tag">{tag}</li>
                })}
              </ul>) : null
          } 
        </div>
        <article dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    )
  }


  
export default Post

export async function getStaticProps({ params }: {params: PostType}) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'ogImage',
    'tags',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')
  
  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths<GetStaticPaths>() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}