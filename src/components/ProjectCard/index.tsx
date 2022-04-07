
import Link from 'next/link'
import Image from 'next/image'
import type { ProjectType } from '../../../types/post'

const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <Link href={`/projects/${project.slug}`}>
      <a tabIndex={0} className='p-8 rounded cursor-pointer w-fit h-fit bg-slate-100 hover:ring-2 ring-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary'>
        <div className='flex flex-col mx-auto w-fit'>
          <div>
          </div>
          <Image
            height={211} width={288}
            className="rounded-lg"
            src={project.images[0].src} alt={project.images[0].alt} />
          <h2 className='mt-8 text-lg w-fit '>{project.title}</h2>
          <p className='mt-4 text-base w-72 line-clamp-4'>{project.summary}</p>
        </div>
      </a>
    </Link>
  )
}

export default ProjectCard