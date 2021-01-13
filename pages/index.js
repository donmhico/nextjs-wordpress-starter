import getPostTypeStaticProps from '@/api/wordpress/_global/getPostTypeStaticProps'
import getMenus from '@/api/wordpress/_global/getMenus'
import Layout from '@/components/common/Layout'
import Hero from '@/components/molecules/Hero'
import PropTypes from 'prop-types'
import Page from './[...slug]'

// Define route post type.
const postType = 'page'

/**
 * @param root0
 * @param root0.post
 * @param root0.menus
 */
export default function HomePage({post, menus}) {
  // Display dynamic page data if homepage retrieved from WP.
  if (post) {
    return <Page post={post} menus={menus} />
  }

  // Display static page content as fallback.
  return (
    <Layout
      menus={menus}
      title="Query from Yoast SEO"
      description="Query from Yoast SEO"
      noIndex={false} // query from yoast seo
      noFollow={false} // query from yoast seo
      openGraph={{
        title: 'Query from Yoast SEO',
        description: 'Query from Yoast SEO',
        images: [
          {
            url: 'Query from Yoast SEO',
            alt: 'Query from Yoast SEO'
          }
        ]
      }}
    >
      <Hero
        background="https://images.unsplash.com/photo-1513106021000-168e5f56609d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2560&q=70"
        title="Next.js Starter"
        description="A slightly opinionated, yet bare-bones Next.js starter."
      />
      <p>
        To display your WordPress homepage dynamically, set your homepage to a
        static page via the WP dashboard (Settings: Reading Settings).
      </p>
    </Layout>
  )
}

/**
 * Get post static props.
 *
 * @see https://github.com/WebDevStudios/nextjs-starter-wordpress/blob/main/themes/wds_headless/inc/menus.php
 * @param {object}  context             Context for current post.
 * @param {boolean} context.preview     Whether requesting preview of post.
 * @param {object}  context.previewData Post preview data.
 * @return {object}                      Post props.
 */
export async function getStaticProps() {
  const post = await getPostTypeStaticProps({slug: '/'}, postType)
  const menus = await getMenus(['primary-menu', 'footer-menu', 'mobile-menu'])

  return {
    props: {
      post: post,
      menus: menus
    }
  }
}
