import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import type { PostType, ProjectType } from '../../types/post'
import PostCard from '../components/PostCard'
import ProjectCard from '../components/ProjectCard'
import { getFeaturedPosts, getProjectPosts } from '../utils/posts'



const Home: NextPage<{posts: PostType[], projects: ProjectType[]}> = ({posts, projects}) => {
  return (
    <div className=''>
      <section 
        className='flex items-center justify-center h-screen min-h-full min'
        >
        <div className='flex flex-row items-center'>
          <div className="m-4 sm:ml-4">
            <h1 className="text-3xl font-bold sm:text-6xl">
              Hello world, this is my portfolio
            </h1>
            <p className="pt-2 text-base">
              Where I show you my expertise and thoughts as I build
            </p>
          </div>
        </div>
      </section>

      <section className='container p-4 mx-auto my-10 sm:p-0 sm:max-w-4xl w-fit' >
        <div className='flex flex-col justify-center gap-4 mx-auto sm:flex-row w-fit'>
        <div className='flex flex-col justify-between'>
            <Image className="rounded-lg" height={768} width={768} src="/assets/erick-butler-xWGoK1tqxyo-unsplash.jpeg" />
            <p className='mt-2 text-sm text-gray-400'>
              Photo by  <a className='rounded hover:ring-2 ring-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary hover:no-underline' href="https://unsplash.com/@erickwalterbutler?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Erick Butler</a> on <a className='rounded hover:ring-2 ring-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary hover:no-underline' href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </p>
          </div>
          <div className='sm:ml-4'>
              <h2 className="text-3xl font-bold transition-all duration-300 rounded cursor-pointer w-fit hover:ring-2 ring-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary hover:no-underline">
                  About Me
              </h2>
            <div className="mt-4 ">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              </p>  
              <p className='mt-2'>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru.
              </p>
            </div>
          </div>
          
        </div>
      </section>

      <section className='container p-4 mx-auto mt-20 sm:p-0 sm:max-w-4xl w-fit' >
          <Link  href="/projects">
            <a className="text-3xl font-bold transition-all duration-300 rounded cursor-pointer w-fit hover:ring-2 ring-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary hover:no-underline">
              Projects
            </a>
          </Link>
          <div className="mt-4 w-96 sm:w-auto">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>  
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru.
            </p>
          </div>
          <div className='grid grid-cols-1 gap-4 mx-auto mt-6 md:grid-cols-2 w-fit'>
            {projects.map((project) => {
              return <ProjectCard project={project} key={project.slug} />
            })}
          </div>
      </section>

      <section className='container p-4 mx-auto mt-20 sm:p-0 sm:max-w-4xl w-fit' >
          <Link href="/blog">
            <a className="text-3xl font-bold transition-all duration-300 rounded cursor-pointer w-fit hover:ring-2 ring-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary hover:no-underline">
              Articles
            </a>
          </Link>
          <div className="mt-4 w-96 sm:w-auto">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>  
            <p className='mt-2'>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru.
            </p>
          </div>
          <div>
            <div className='flex items-center justify-center'>
            </div>
            <div className='mt-6'>
              {posts.map((post) => {
                return (
                  <PostCard key={post.slug} post={post} />
                )
              })}
            </div>
          </div>
      </section>
    </div>
  )
}

export async function getStaticProps() {

  const posts = getFeaturedPosts(['slug', 'title', 'tags', 'date', 'summary'])
  const projects =  getProjectPosts(['slug', 'title', 'tags', 'date', 'summary', 'images', 'details'])

  return {
    props: {
      posts,
      projects
    }
  }
}

export default Home
