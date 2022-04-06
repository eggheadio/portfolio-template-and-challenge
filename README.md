# Developer Portolio Site Template and Challenge

This project's purpose is to give you a head start on your portfolio site if you are yet to create one as well as give you meaningful challenges that will equip you to build out your portfolio whether you're using this template or not. If you have a site and want to checkout the challenges, visit the [GitHub Project Page](https://github.com/eggheadio/portfolio-template-and-challenge/projects/1).

You can also [sign up for eggheads Developer Portfolio Foundations email course](https://egghead.io/developer-portfolio-foundations) for more information and a guided experience building out your portfolio.

## 🌱 About the Template

This template is built with the minimal set of features required to have a solid developer portfolio. We intentionally kept the design of the site simple as the design itself is not the main focus for many developers. With that being said, feel free to make the site your own design-wise.

This site features About, Blog, Projects, and Resume pages.

Employers want to know who you are, what technical ability you have, how you communicate, and what your work experience is.

### About

This section is here to talk about yourself. Fill in details that you want people and future employers to know about you and possibly provide a picture so we know what you look like.

### Blog

Having the ability to post your learnings, thoughts, and notes to your portfolio site (or your own blog) is huge for showing that you are an avid learner and thinker and know how to communicate with others about technical solutions.

The blog in this template is 100% file based. This means that when you add files into [_posts](https://github.com/eggheadio/portfolio-template-and-challenge/tree/main/_posts), they will be indexed on `/blog` and accessed based on the file name that you provide.

Check out the front matter of the posts provided and you'll notice that you can set a `feature` flag to feature posts on the home page of the site for the articles that you're most proud of and want others to read.

### Projects

Projects are the lynch pin of a developer's portfolio.

Can you execute on a technical project?

This section should answer that question in full detail! Joel Hooks has a [great article on what makes for a stand out business oriented developer portfolio](https://joelhooks.com/developer-portfolio). You might notice that this template and challenges use that article as inspiration.

In this template, project case studies are added to the same `_posts` folder as articles are but you indicate that it is a case study with `project: true` set in the front matter of the article. This will feature the project on the home page section as well as on `/projects`.

### Resume

TODO: build out resume page

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
