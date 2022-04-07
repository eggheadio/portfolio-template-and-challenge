import type { PostType } from '../../../types/post'
import Link from 'next/link'

const PostCard = ({ post }: { post: PostType }) => {
  return (
    <Link href={`/blog/${post.slug}`}>
        <div  tabIndex={0} className='p-6 m-4 mx-auto transition-all rounded w-96 min-h-fit sm:w-5/6 bg-slate-50 hover:ring-2 ring-secondary hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary '>
          <div className='flex flex-row justify-between'>
            <div>
              <p className='text-xl'>
                {post.title}
              </p>
              <p className='w-5/6 my-2 line-clamp-4'>
                {post.summary}
              </p>
            </div>
            <div className='flex flex-col justify-center gap-2 my-2'>
              <span className='text-right'>{post.date}</span>
              {
                post.tags ?
                  (<ul className='flex flex-row justify-end gap-1'>
                    {post.tags.map((tag) => {
                      return <li className='px-2 text-sm bg-primary text-slate-50 rounded-xl w-fit' key="tag">{tag}</li>
                    })}
                  </ul>) : null
              }
            </div>
          </div>
        </div>
    </Link>
  )
}

export default PostCard