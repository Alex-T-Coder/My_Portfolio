# guitton.co

## References

Next + Tailwind + MDX

- https://github.com/timlrx/tailwind-nextjs-starter-blog#extend--customize

Note on MDX support:

- mdx v1 libraries such as `next-mdx-remote`
- mdx v2 libraries such as `mdx-bundler`

Next + markdown

- https://github.com/vercel/next.js/blob/canary/examples/blog-starter
- https://github.com/timlrx/tailwind-nextjs-starter-blog
- https://nextjs.org/learn/basics/dynamic-routes/render-markdown
- https://github.com/forestryio/next-blog-forestry

## Notes on JSON Resume implementation

- types were adapted from code generated from the jsonschema available at https://github.com/jsonresume/resume-schema/blob/master/schema.json using https://tryjsonschematypes.appspot.com/#typescript
- components were adapted from https://github.com/phoinixi/jsonresume-theme-stackoverflow/tree/master/theme/partials
- styles were adapted from https://github.com/phoinixi/jsonresume-theme-stackoverflow/blob/master/style.css

## TODO

Critical path:

- [ ] milk tailwind-nextjs-starter-blog typescript code for more goodies
- [ ] generate rss.xml https://github.com/leerob/leerob.io/blob/main/scripts/generate-rss.mjs
  - [ ] compare with https://guitton.co/index.xml

Nice to haves:

- [ ] add 2048 as native and easter-egg on 404 page
- [ ] add tutos
  - [ ] add https://github.com/louisguitton/guitton.co-hugo/blob/master/content/posts/2018-07-22-design.md as tuto
  - [ ] add https://github.com/louisguitton/guitton.co-hugo/blob/master/content/posts/2019-10-12-project-management.md as tuto
  - [ ] add https://github.com/louisguitton/guitton.co-hugo/blob/master/content/posts/2020-04-14-cloud-cost-optimisation.md
  - [ ] add https://github.com/louisguitton/guitton.co-hugo/blob/master/content/posts/2020-05-09-ml-engineer-stack.md
- [ ] add breadcrumbs https://tailwindui.com/components/application-ui/navigation/breadcrumbs
- [ ] add SSG support for tweets and gists

Next steps

- [ ] add search page for the lolz https://docs.google.com/presentation/d/1Iqb4rz1txVASXHpdjwogbiDvetVkjI9GMa7lQoIh7j4/edit#slide=id.g10a562423c5_0_4
- [ ] add mentions page that combines:
  - [ ] https://www.reddit.com/search.json?sort=new&q=site:guitton.co OR author:laguitte OR selftext:"guitton.co"
  - [ ] https://news.ycombinator.com/from?site=guitton.co
  - [ ] https://twitter.com/search?q=%22guitton.co%22%20OR%20%22louis%20guitton%22%20-from%3Alouis_guitton%20-%40louis_guitton%20-bag%20-purse%20-from%3Alouisguitton&src=typed_query&f=live

Tests

- [ ] add test: HTTPS page has internal links to HTTP
- [ ] add test: link to broken page 404
- [ ] add test: H1 tag missing or empty
