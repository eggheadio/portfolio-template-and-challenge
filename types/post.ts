type PostType = {
  slug: string
  title: string
  date: string
  coverImage?: string
  summary?: string
  ogImage?: {
    url: string
  }
  content: string
  tags: string[]
}

export default PostType