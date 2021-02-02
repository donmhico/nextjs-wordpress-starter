import Button from '@/components/atoms/Button'
import PropTypes from 'prop-types'

/**
 * Button Block
 *
 * The core Button block from Gutenberg.
 *
 * @author WebDevStudios
 * @param {string} anchor     Optional anchor/id.
 * @param {string} className  Optional classnames.
 * @param {string} linkTarget The target for the link.
 * @param {string} rel        The rel attribute for the link.
 * @param {string} text       The link label.
 * @param {string} title      The target for the link.
 * @param {string} url        The link for the button.
 * @return {Element} The Button component.
 */
export default function BlockButton({
  anchor,
  className,
  linkTarget,
  rel,
  text,
  url
}) {
  return (
    <Button
      className={className}
      text={text}
      url={url}
      urlExternal={true}
      attributes={{
        id: anchor || null,
        target: linkTarget || null,
        rel: rel || null
      }}
    />
  )
}

BlockButton.propTypes = {
  anchor: PropTypes.string,
  className: PropTypes.string,
  linkTarget: PropTypes.string,
  rel: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string
}
