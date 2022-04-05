import Image from "next/image"
import Link from "next/link"
import React from "react"

const Layout = (props: any) => {
    let [state, setState] = React.useState(false)

    let hideMenu = state ? "" : "hidden"

    let handleClick = () => {
        setState(!state)
    }

    return (
    <div>
        <nav>
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex justify-between space-x-7">
                        <Link href="/">
                            <a href="#" className="flex items-center py-4 px-2">
                                <Image src="/assets/eggo.png" alt="an eggo" width={32} height={32}/>
                                <span className="font-semibold text-gray-900 text-lg ml-2"
                                    >My Name</span
                                >
                            </a>                            
                        </Link>
                    <div className="hidden md:flex items-center space-x-1">
                        <Link href="/blog">
                            <a
                                className="py-4 px-2 text-gray-700  hover:text-primary font-semibold "
                                >Blog</a
                            >
                        </Link>
                        <Link href="/projects">
                            <a
                                className="py-4 px-2 text-gray-700 font-semibold hover:text-primary transition duration-300"
                                >Projects</a
                            >
                        </Link>
                        <Link href="/about">
                            <a
                                className="py-4 px-2 text-gray-700 font-semibold hover:text-primary transition duration-300"
                                >About</a
                            >
                        </Link>
                        <Link href="/resume">
                            <a
                                className="py-4 px-2 text-gray-700 font-semibold hover:text-primary transition duration-300"
                                >Resume</a
                            >
                        </Link>
                    </div>
                    <div className="relative md:hidden h-fit self-center">
                        <button type="button" onClick={handleClick} className="text-gray-900 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary" aria-expanded="false">
                        <span>Links</span>
                        <svg className="text-gray-900 ml-2 h-5 w-5 hover:text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                        </button>
                        <div className={`absolute z-10 -left-4 transform -translate-x-1/3 mt-3 px-2 w-36 max-w-xs sm:px-0 ${hideMenu}`}>
                        <div className="rounded shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                <div className="-m-3 p-3 block rounded-md hover:bg-slate-200">
                                    <Link href="/blog" >
                                        <a
                                            className="py-4 px-2 text-gray-700  hover:text-primary font-semibold "
                                            >Blog</a
                                        >
                                    </Link> 
                                </div>
                                <div className="-m-3 p-3 block rounded-md hover:bg-slate-200">
                                    <Link href="/projects">
                                        <a
                                            className="py-4 px-2 text-gray-700 font-semibold hover:text-primary transition duration-300"
                                            >Projects</a
                                        >
                                    </Link>
                                </div>

                                <div className="-m-3 p-3 block rounded-md hover:bg-slate-200">
                                    <Link href="/about">
                                        <a
                                            className="py-4 px-2 text-gray-700 font-semibold hover:text-primary transition duration-300"
                                            >About</a
                                        >
                                    </Link>
                                </div>

                                <div className="-m-3 p-3 block rounded-md hover:bg-slate-200">
                                    <Link href="/resume">
                                        <a
                                            className="py-4 px-2 text-gray-700 font-semibold hover:text-primary transition duration-300"
                                            >Resume</a
                                        >
                                    </Link>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
            <div className="" >
            {props.children}
            </div>
        <footer aria-labelledby="footer-heading" className="bg-white border-t border-gray-200 mt-56">
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-20">
              <div className="grid grid-cols-1 md:grid-cols-12 md:grid-flow-col md:gap-x-8 md:gap-y-16 md:auto-rows-min">
                {/* Image section */}
                <div className="col-span-1 md:col-span-2 lg:row-start-1 lg:col-start-1">
                  <Image src="/assets/eggo.png" alt="an eggo" width={32} height={32}/>
                </div>

                {/* Sitemap sections */}
                <div className="mt-10 col-span-6 grid grid-cols-2 gap-8 sm:grid-cols-3 md:mt-0 md:row-start-1 md:col-start-3 md:col-span-8 lg:col-start-2 lg:col-span-6">
                  <div className="grid grid-cols-1 gap-y-12 sm:col-span-2 sm:grid-cols-2 sm:gap-x-8">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Links</h3>
                      <div role="list" className="flex flex-row gap-2 mt-6 align-middle">
                            <a className="cursor-pointer">
                                <Image 
                                    src="/assets/github.svg" 
                                    alt="an eggo" 
                                    width={20} 
                                    height={20}
                                />
                            </a>
                            <a className="cursor-pointer">
                                <Image 
                                    src="/assets/twitter.svg" 
                                    alt="an eggo" 
                                    width={20} 
                                    height={20}
                                />
                            </a>
                            <a className="cursor-pointer">
                                <Image 
                                    src="/assets/linkedin.svg" 
                                    alt="linked in" 
                                    width={20} 
                                    height={20}

                                />
                            </a>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Site</h3>
                      <ul role="list" className="mt-6 space-y-6">
                      <li className="text-sm">
                            <a className="text-gray-500 hover:text-primary cursor-pointer">
                              Blog
                            </a>
                          </li>
                          <li className="text-sm">
                            <a className="text-gray-500 hover:text-primary cursor-pointer">
                              About
                            </a>
                          </li>
                          <li className="text-sm">
                            <a className="text-gray-500 hover:text-primary cursor-pointer">
                              Projects
                            </a>
                          </li>
                      </ul>
                    </div>
                  </div>
                  
                </div>

                {/* Newsletter section */}
                <div className="mt-12 md:mt-0 md:row-start-2 md:col-start-3 md:col-span-8 lg:row-start-1 lg:col-start-9 lg:col-span-4">
                  <h3 className="text-sm font-medium text-gray-900">Sign up for my newsletter</h3>
                  <p className="mt-6 text-sm text-gray-500">No spam, promised.</p>
                  <form className="mt-2 flex sm:max-w-md">
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      type="text"
                      autoComplete="email"
                      required
                      className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                    />
                    <div className="ml-4 flex-shrink-0">
                      <button
                        type="submit"
                        className="w-full bg-primary border border-transparent rounded-md shadow-sm py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-secondary hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
                      >
                        Sign up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 py-10 text-center">
              <p className="text-sm text-gray-500">&copy; 2021 My Name, Inc. All rights reserved.</p>
            </div>
          </div>
        </footer>
    </div>
    )
}

export default Layout