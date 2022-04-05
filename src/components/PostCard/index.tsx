import type PostType from '../../../types/post'
import Link from 'next/link'

const PostCard  = ({post}: {post: PostType}) => {
    return (
      <Link href={`/blog/${post.slug}`}>
        <li className='w-96 min-h-fit sm:w-full sm:h-40 p-6 m-4 bg-slate-50 rounded hover:bg-slate-200 hover:cursor-pointer transition-all'>
          <div className='flex flex-row justify-between'>
            <div className=''>
              <p className='text-xl'>
                {post.title}
              </p>
              <p className='my-2 w-5/6'>
                {post.summary}
              </p>
            </div>
            <div className='flex flex-col gap-2 my-2 justify-center'>
              <span className='text-right'>{post.date}</span>
              {
                post.tags ?
                (<ul className='flex flex-row gap-1 justify-end'>
                    {post.tags.map((tag)=> {
                      return <li className='bg-primary text-slate-50 text-sm px-2 rounded-xl w-fit' key="tag">{tag}</li>
                    })}
                  </ul>) : null
              } 
            </div>
          </div>
        </li>
      </Link>
    )
  }

export default PostCard