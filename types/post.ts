export type PostType = {
  slug: string
  title: string
  date: string
  featured?: boolean
  coverImage?: string
  summary?: string
  ogImage?: {
    url: string
  }
  content: string
  tags: string[]
}

type ProjectImage = {
  src: string
  name: string
  alt: string
}

type Detail = {
    name: string
    items: string[]
}

export type ProjectType = PostType & 
{
  project?: boolean
  images: ProjectImage[]
  details: Detail[]
}

