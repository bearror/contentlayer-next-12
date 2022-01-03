import type { Router } from 'next/router'
import { allPosts } from '.contentlayer/data'

/**
 * The support for dynamic routes is through an injected `router` prop at the
 * time of writing. This is a temporary workaround and will change eventually.
 * Sorry for the jank...
 *
 * @see https://github.com/vercel/next-rsc-demo/issues/6
 */
type WithInjectedRouter = { router: Router }

const Page = ({ router }: WithInjectedRouter) => {
  const [, , slug] = router.route.split('/') // the actual `.query` is empty
  const post = allPosts.find(post => post.slug === slug)

  if (!post) return <main>Could not find that post.</main>

  return (
    <main>
      <article dangerouslySetInnerHTML={{ __html: post.body.html }} />
    </main>
  )
}

export default Page
