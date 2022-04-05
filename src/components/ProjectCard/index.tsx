
import Link from 'next/link'

const ProjectCard  = ({post}: any) => {
    return (
      <Link href={`/projects/TODO`}>
        <div className='w-80 h-96 bg-slate-100 rounded hover:ring-2 ring-secondary  cursor-pointer'>
            <div className='flex flex-col mx-auto w-fit'>
            <div className='bg-slate-400 h-40 w-72  mt-4 rounded-lg'><p>put an image of your project here</p></div>
            <h2 className='w-fit mt-8 text-lg'>Project title</h2>
            <p className='w-72 mt-4 text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
      </Link>
    )
  }

export default ProjectCard