import type { NextPage } from 'next'
import type PostType from '../../../types/post'
import Link from 'next/link'
import { getAllPosts } from '../../utils/posts'


const Blog: NextPage<{posts: PostType[]}> = ({posts}) => {
    return (
      <div className='max-w-4xl mx-auto'>
        <div className='flex justify-center items-center mt-14'>
          <h1 className="text-3xl font-bold">
            Hello world, this is my Blog page
          </h1>

          
        </div>
        <ul className='mt-10'>
          {posts.map((post) => {
            return (
              <Link href={`/blog/${post.slug}`}>
                <li className='w-full h-36 p-6 m-2 bg-slate-50 rounded hover:bg-slate-200 hover:cursor-pointer hover:py-8 transition-all'>
                  <div className='flex flex-row justify-between'>
                    <p className='text-xl'>
                      {post.title}
                    </p>
                    <div className='flex flex-col gap-2 my-2'>
                      <span className='float-right'>{post.date}</span>
                      {
                        post.tags ?
                        (<ul className='flex flex-row gap-1 justify-end'>
                            {post.tags.map((tag)=> {
                              return <li className='bg-green-400 px-2 rounded-xl w-fit' key="tag">{tag}</li>
                            })}
                          </ul>) : null
                      } 
                    </div>
                  </div>
                  
                
                </li>
              </Link>
            )
          })}
        </ul>
      </div>
    )
  }
  
  export default Blog


  export async function getStaticProps() {

    const posts = getAllPosts(['slug', 'title', 'tags', 'date'])

    return {
      props: {
        posts
      }
    }
  }