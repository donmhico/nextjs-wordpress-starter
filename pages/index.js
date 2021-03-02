import Container from '@/components/atoms/Container'

/**
 * Render the HomePage component.
 *
 * @author WebDevStudios
 * @param {object} props      The component attributes as props.
 * @param {object} props.post Post data from WordPress.
 * @return {Element}          The HomePage component.
 */
export default function HomePage() {
  // Display static page content as fallback.
  return (
    <Container>
      <article>
        <p>
          To display your WordPress homepage dynamically, set your homepage to a
          static page via the WP dashboard (Settings: Reading Settings).
        </p>
      </article>
    </Container>
  )
}
