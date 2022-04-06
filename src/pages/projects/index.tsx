import type { ProjectType } from "../../../types/post"
import type { NextPage } from 'next'
import { Tabs, Tab as RTab, TabList, TabPanel, TabPanels } from "@reach/tabs"
import { Disclosure, DisclosureButton, DisclosurePanel, } from '@reach/disclosure'
import { ArrowNarrowRightIcon, ChevronDoubleDownIcon } from '@heroicons/react/outline'
import { getProjectPosts } from "../../utils/posts"
import Link from "next/link"



function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

const Projects: NextPage<{ projects: ProjectType[] }> = ({ projects }) => {

  let project = projects[0]

  return (
    <>
      {projects.map((project) => {
        return <Project project={project} />
      })}
    </>
  )
}

const Project = ({ project }: { project: ProjectType }) => {
  return (
    <div className="max-w-4xl m-4 rounded bg-slate-50 sm:mx-auto">
      <div className="max-w-2xl p-8 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          {/* Image gallery */}
          <Tabs className="flex flex-col-reverse"
          >
            {/* Image selector */}
            <div className="hidden w-full max-w-2xl mx-auto mt-6 sm:block lg:max-w-none">
              <TabList className="grid grid-cols-4 gap-6">
                {project.images.map((image) => (
                  <RTab
                    key={image.src}
                    className="relative flex items-center justify-center h-24 text-sm font-medium text-gray-900 uppercase bg-white rounded-md cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                  >
                    <span className="sr-only">{image.name}</span>
                    <span className="absolute inset-0 overflow-hidden rounded-md">
                      <img src={image.src} alt="" className="object-cover object-center w-full h-full" />
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
                    className="object-cover object-center w-full h-full sm:rounded-lg"
                  />
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>

          {/* project info */}
          <div className="px-4 mt-10 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{project.title}</h1>

            <div className="mt-3">
              <h2 className="sr-only">Project information</h2>
              <p className="text-base text-gray-600">{project.date}</p>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <p className="space-y-6 text-base text-gray-700 h-42 line-clamp-6 text-ellipsis">
                {project.summary}
              </p>
            </div>

            <Link href={`/projects/${project.slug}`}>
              <a
                className="flex items-center justify-center flex-1 max-w-xs px-8 py-3 mt-4 text-base font-medium text-white border border-transparent rounded-md bg-primary hover:text-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-secondary sm:w-full"
              >
                Read the Case Study <ArrowNarrowRightIcon className='ml-2 h-7 w-7' />
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
                      <DisclosureButton className="relative flex items-center justify-between w-full py-6 text-left group">
                        <span
                          className='text-primary'
                        >
                          {detail.name}
                        </span>
                        <span className="flex items-center ml-6">
                          <ChevronDoubleDownIcon
                            className="block w-6 h-6 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel as="div" className="pb-6 prose-sm prose">
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