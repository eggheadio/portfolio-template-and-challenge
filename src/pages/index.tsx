import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import type PostType from '../../types/post'
import PostCard from '../components/PostCard'
import ProjectCard from '../components/ProjectCard'
import { getFeaturedPosts } from '../utils/posts'



const Home: NextPage<{posts: PostType[]}> = ({posts}) => {
  return (
    <div className=''>
      <section 
        className='flex min-h-screen justify-center items-center bg-gradient-to-b from-primary via-secondary  to-transparent'
        // style={{
        //   backgroundImage: `url('/assets/background.svg')`,
        //   backgroundSize: `cover`
        // }}
        >
        <div className='flex flex-row items-center'>
          <div className="ml-4">
            <h1 className="font-bold text-3xl sm:text-6xl">
              Hello world, this is my portfolio
            </h1>
            <p className="pt-2 text-base text-center">
              Where I show you my expertise and thoughts as I build
            </p>
          </div>
        </div>
      </section>

      <section className='container max-w-4xl  mx-auto my-10 min-h-screen' >
        <div className='flex flex-col sm:flex-row w-fit mx-auto justify-center  gap-4'>
          <div className="flex self-center justify-center items-center bg-gray-400 w-64 h-64 lg:w-96 lg:h-96 rounded-lg min-w-96">
              <p>put an image of you here</p>
          </div>
          <div className='mt-4 sm:ml-4 sm:mt-0'>
            <h2 className="text-3xl font-bold">
                About Me
            </h2>
            <div className="mt-4 w-96">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              </p>  
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru.
              </p>
            </div>
          </div>
          
        </div>
      </section>

      <section className='container max-w-4xl mx-auto w-fit mt-0 sm:-mt-40' >
          <h2 className="text-3xl font-bold p-4">
              Projects
          </h2>
          <div className="mt-4 p-4 w-96 sm:w-auto">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>  
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto w-fit mt-4'>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
      </section>

      <section className='container max-w-4xl mx-auto mt-12 w-fit' >
          <h2 className="text-3xl font-bold p-4">
              Articles
          </h2>
          <div className="mt-4 p-4 w-96 sm:w-auto">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>  
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru.
            </p>
          </div>
          <div>
            <div className='flex justify-center items-center'>
            </div>
            <ul className='mt-4'>
              {posts.map((post) => {
                return (
                  <PostCard key={post.slug} post={post} />
                )
              })}
            </ul>
          </div>
      </section>
    </div>
  )
}

export async function getStaticProps() {

  const posts = getFeaturedPosts(['slug', 'title', 'tags', 'date', 'summary'])

  return {
    props: {
      posts
    }
  }
}

export default Home
