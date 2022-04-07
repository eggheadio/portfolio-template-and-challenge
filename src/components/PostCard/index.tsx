import type { PostType } from '../../../types/post'
import Link from 'next/link'

const PostCard = ({ post }: { post: PostType }) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <a tabIndex={0}>
        <li className='p-6 m-4 mx-auto transition-all rounded w-96 min-h-fit sm:w-5/6 bg-slate-50 hover:ring-2 ring-secondary hover:cursor-pointer'>
          <div className='flex flex-row justify-between'>
            <div className=''>
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
        </li>
      </a>
    </Link>
  )
}

export default PostCard