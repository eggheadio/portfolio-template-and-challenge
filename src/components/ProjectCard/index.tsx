
import Link from 'next/link'
import Image from 'next/image'
import type { ProjectType } from '../../../types/post'

const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <Link href={`/projects/TODO`}>
      <div className='px-6 py-8 rounded cursor-pointer w-fit h-fit bg-slate-100 hover:ring-2 ring-secondary'>
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
      </div>
    </Link>
  )
}

export default ProjectCard