import type { NextPage } from "next/types"
import type { ProjectType } from "../../../types/post"
import { getPostBySlug, getProjectPosts, markdownToHtml } from "../../utils/posts"

type PageProject = {
  project: ProjectType
}


const Project: NextPage<PageProject> = ({ project }) => {
  console.log(project)
  return (
    <div className='max-w-4xl mx-auto mt-8'>
      <h1 className="mx-auto text-4xl font-bold">
        {project.title}
      </h1>
      <div className='flex flex-row gap-2 my-2'>
        <span>{project.date}</span>
        {
          project.tags ?
            (<ul>
              {project.tags.map((tag) => {
                return <li className='px-2 bg-green-400 rounded-xl' key="tag">{tag}</li>
              })}
            </ul>) : null
        }
      </div>
      <article dangerouslySetInnerHTML={{ __html: project.content }} />
    </div>
  )
}



export default Project



export async function getStaticProps({ params }: { params: ProjectType }) {
  const project = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'details',
    'images',
    'tags',
    'coverImage',
  ])
  const content = await markdownToHtml(project.content || '')

  return {
    props: {
      project: {
        ...project,
        content,
      },
    },
  }
}

export async function getStaticPaths<GetStaticPaths>() {
  const projects = getProjectPosts(['slug'])

  return {
    paths: projects.map((project) => {
      return {
        params: {
          slug: project.slug,
        },
      }
    }),
    fallback: false,
  }
}