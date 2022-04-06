import type { ProjectType } from "../../../types/post"
import type { NextPage } from 'next'
import {Tabs, Tab as RTab, TabList, TabPanel, TabPanels} from "@reach/tabs"
import {Disclosure, DisclosureButton, DisclosurePanel, }from '@reach/disclosure'
import { ArrowNarrowRightIcon, ChevronDoubleDownIcon } from '@heroicons/react/outline'
import { getProjectPosts } from "../../utils/posts"
import Link from "next/link"



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Projects: NextPage<{projects: ProjectType[]}> = ({projects}) => {

  let project = projects[0]

  return (
    <>
      {projects.map((project) => {
          return <Project project={project} />
        })}
    </>
  )
}

const Project = ({project}: {project: ProjectType}) => {
  return (
    <div className="bg-slate-50 rounded max-w-4xl m-4 sm:mx-auto">
      <div className="max-w-2xl mx-auto p-8 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          {/* Image gallery */}
          <Tabs className="flex flex-col-reverse"
          >
            {/* Image selector */}
            <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
              <TabList className="grid grid-cols-4 gap-6">
                {project.images.map((image) => (
                  <RTab
                    key={image.src}
                    className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                  >
                    <span className="sr-only">{image.name}</span>
                    <span className="absolute inset-0 rounded-md overflow-hidden">
                      <img src={image.src} alt="" className="w-full h-full object-center object-cover" />
                    </span>
                    <span
                      aria-hidden="true"
                    />
                  </RTab>
                ))}
              </TabList>
            </div>

            <TabPanels className="w-full aspect-w-1 aspect-h-1">
              {project.images.map((image) => (
                <TabPanel key={image.src}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-center object-cover sm:rounded-lg"
                  />
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>

          {/* project info */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{project.title}</h1>

            <div className="mt-3">
              <h2 className="sr-only">Project information</h2>
              <p className="text-base text-gray-600">{project.date}</p>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <p className="text-base h-42 text-gray-700 space-y-6 line-clamp-6 text-ellipsis">
                {project.summary}
              </p>
            </div>

            <Link href={`/projects/${project.slug}`}>
                  <a
                    className="max-w-xs flex-1 bg-primary border border-transparent rounded-md py-3 px-8 mt-4 flex items-center justify-center text-base font-medium text-white hover:text-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-secondary sm:w-full"
                  >
                    Read More <ArrowNarrowRightIcon className='ml-2 h-7 w-7' />
                  </a>
            </Link>

            <section aria-labelledby="details-heading" className="mt-12">
              <h2 id="details-heading" className="sr-only">
                Additional project details
              </h2>

              <div className="border-t divide-y divide-gray-200">
                {project.details.map((detail) => (
                  <Disclosure key={detail.name}>
                        <h3>
                          <DisclosureButton className="group relative w-full py-6 flex justify-between items-center text-left">
                            <span
                              className='text-primary'
                            >
                              {detail.name}
                            </span>
                            <span className="ml-6 flex items-center">
                                <ChevronDoubleDownIcon
                                  className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                  aria-hidden="true"
                                />
                            </span>
                          </DisclosureButton>
                        </h3>
                        <DisclosurePanel as="div" className="pb-6 prose prose-sm">
                          <ul role="list">
                            {detail.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </DisclosurePanel>
                  </Disclosure>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects

export async function getStaticProps() {

  const projects = getProjectPosts(['slug', 'title', 'tags', 'date', 'summary', 'images', 'details'])

  return {
    props: {
      projects
    }
  }
}