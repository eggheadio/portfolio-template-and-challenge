import type { NextPage } from "next/types"
import type {ProjectType} from "../../../types/post"
import { getPostBySlug, getProjectPosts, markdownToHtml } from "../../utils/posts"

type PageProject = {
  project: ProjectType
}


const Project: NextPage<PageProject> = ({project}) => {
    return (
      <div className='max-w-4xl mx-auto mt-8'>
        <h1 className="text-4xl font-bold mx-auto">
          {project.title}
        </h1>
        <div className='flex flex-row gap-2 my-2'>
          <span>{project.date}</span>
          {
            project.tags ?
              (<ul>
                {project.tags.map((tag)=> {
                  return <li className='bg-green-400 px-2 rounded-xl' key="tag">{tag}</li>
                })}
              </ul>) : null
          } 
        </div>
        <article dangerouslySetInnerHTML={{ __html: project.content }} />
      </div>
    )
  }


  
export default Project



export async function getStaticProps({ params }: {params: PostType}) {
  const project = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'ogImage',
    'images',
    'tags',
    'coverImage',
  ])
  const content = await markdownToHtml(project.content || '')
  
  return {
    props: {
      post: {
        ...project,
        content,
      },
    },
  }
}

export async function getStaticPaths<GetStaticPaths>() {
  const posts = getProjectPosts(['slug'])

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