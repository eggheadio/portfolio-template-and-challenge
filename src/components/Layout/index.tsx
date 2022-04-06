import Image from "next/image"
import Link from "next/link"
import React from "react"
import {
  Menu,
  MenuList,
  MenuButton,
  MenuLink,
} from "@reach/menu-button";

const Layout = (props: any) => {
  return (
    <div>
      <nav>
        <div className="max-w-4xl px-4 mx-auto">
          <div className="flex justify-between space-x-7">
            <Link href="/">
              <a href="#" className="flex items-center px-2 py-4">
                <Image src="/assets/eggo.png" alt="an eggo" width={32} height={32} />
                <span className="ml-2 text-lg font-semibold text-gray-900"
                >My Name</span
                >
              </a>
            </Link>
            <div className="items-center hidden space-x-1 md:flex">
              <Link href="/blog">
                <a
                  className="px-2 py-1 font-semibold text-gray-700 transition-all duration-300 rounded hover:ring-2 ring-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
                >Blog</a
                >
              </Link>
              <Link href="/projects">
                <a
                  className="px-2 py-1 font-semibold text-gray-700 transition-all duration-300 rounded hover:ring-2 ring-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
                >Projects</a
                >
              </Link>
              <Link href="/about">
                <a
                  className="px-2 py-1 font-semibold text-gray-700 transition-all duration-300 rounded hover:ring-2 ring-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
                >About</a
                >
              </Link>
              <Link href="/resume">
                <a
                  className="px-2 py-1 font-semibold text-gray-700 transition-all duration-300 rounded hover:ring-2 ring-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
                >Resume</a
                >
              </Link>
            </div>
            <Menu className="" >
              <MenuButton className="self-center block text-lg text-gray-900 md:hidden h-fit">
                Links <span aria-hidden>▾</span>
              </MenuButton>
              <MenuList className="absolute z-10 grid max-w-xs px-5 py-4 mt-1 overflow-hidden transform bg-white rounded shadow-lg -left-8 -translate-x-1/3 w-36 sm:px-0 ring-1 ring-black ring-opacity-5 sm:p-6">
                <MenuLink
                  as="a"
                  href="/blog"
                  className="block px-2 py-4 font-semibold text-center text-gray-700 rounded-md cursor-pointer hover:text-gray-900 hover:ring-2 ring-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary">
                  Blog
                </MenuLink>
                <MenuLink
                  as="a"
                  href="/projects"
                  className="block px-2 py-4 font-semibold text-center text-gray-700 rounded-md cursor-pointer hover:text-gray-900 hover:ring-2 ring-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary">
                  Projects
                </MenuLink>
                <MenuLink
                  as="a"
                  href="/about"
                  className="block px-2 py-4 font-semibold text-center text-gray-700 rounded-md cursor-pointer hover:text-gray-900 hover:ring-2 ring-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary">
                  About
                </MenuLink>
                <MenuLink
                  as="a"
                  href="/resume"
                  className="block px-2 py-4 font-semibold text-center text-gray-700 rounded-md cursor-pointer hover:text-gray-900 hover:ring-2 ring-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary">
                  Resume
                </MenuLink>
              </MenuList>
            </Menu>
          </div>
        </div>
      </nav>
      <div className="" >
        {props.children}
      </div>
      <footer aria-labelledby="footer-heading" className="mt-56 bg-white border-t border-gray-200">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="py-20">
            <div className="grid grid-cols-1 md:grid-cols-12 md:grid-flow-col md:gap-x-8 md:gap-y-16 md:auto-rows-min">
              {/* Image section */}
              <div className="col-span-1 md:col-span-2 lg:row-start-1 lg:col-start-1">
                <Image src="/assets/eggo.png" alt="an eggo" width={32} height={32} />
              </div>

              {/* Sitemap sections */}
              <div className="grid grid-cols-2 col-span-6 gap-8 mt-10 sm:grid-cols-3 md:mt-0 md:row-start-1 md:col-start-3 md:col-span-8 lg:col-start-2 lg:col-span-6">
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
                    <h3 className="px-2 text-sm font-medium text-gray-900">Site</h3>
                    <ul role="list" className="mt-6 space-y-6">
                      <li className="text-sm">
                        <Link href="/blog">
                          <a className="px-2 py-1 text-gray-500 rounded cursor-pointer hover:ring-2 ring-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary">
                            Blog
                          </a>
                        </Link>
                      </li>
                      <li className="text-sm">
                        <Link href="/about">
                          <a className="px-2 py-1 text-gray-500 rounded cursor-pointer hover:ring-2 ring-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary">
                            About
                          </a>
                        </Link>
                      </li>
                      <li className="text-sm">
                        <Link href="/projects">
                          <a className="px-2 py-1 text-gray-500 rounded cursor-pointer hover:ring-2 ring-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary">
                            Projects
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>

              {/* Newsletter section */}
              <div className="mt-12 md:mt-0 md:row-start-2 md:col-start-3 md:col-span-8 lg:row-start-1 lg:col-start-9 lg:col-span-4">
                <h3 className="text-sm font-medium text-gray-900">Sign up for my newsletter</h3>
                <p className="mt-6 text-sm text-gray-500">No spam, promised.</p>
                <form className="flex mt-2 sm:max-w-md">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    type="text"
                    autoComplete="email"
                    required
                    className="w-full min-w-0 px-4 py-2 text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                  />
                  <div className="flex-shrink-0 ml-4">
                    <button
                      type="submit"
                      className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white transition-all border border-transparent rounded-md shadow-sm bg-primary hover:ring-2 ring-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
                    >
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="py-10 text-center border-t border-gray-100">
            <p className="text-sm text-gray-500">&copy; 2021 My Name, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout