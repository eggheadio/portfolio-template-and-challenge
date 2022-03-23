import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'



const Home: NextPage = () => {
  return (
    <div
    >
      <div 
        className='flex min-h-screen justify-center items-center  bg-gradient-to-t from-green-200 to-transparent'
        // style={{
        //   backgroundImage: `url('/assets/background.svg')`,
        //   backgroundSize: `cover`
        // }}
      >
        <div className='flex flex-row items-center'>
          <div className="flex justify-center items-center bg-white w-96 h-96 rounded-lg ">
              <p>put an image here</p>
          </div>
          <div className="ml-4">
            <h1 className="text-3xl font-bold">
            Hello world, this is my portfolio
            </h1>
            <p className="pt-2 text-base">
              Where I show you my expertise and thoughts as I build
            </p>
          </div>
        </div>
      </div>

      <div>
        <span>
          something else
        </span>
      </div>
    </div>
  )
}

export default Home
