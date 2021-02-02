import Button from '@/components/atoms/Button'
import cn from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './Hero.module.css'

/**
 * Render the Hero component.
 *
 * @param {object} props                 Hero component props.
 * @param {string} props.backgroundImage The background image object.
 * @param {string} props.body            Text for the body.
 * @param {string} props.className       The className.
 * @param {object} props.ctaText         The cta text.
 * @param {object} props.ctaUrl          The cta url.
 * @param {string} props.subtitle        Text for the subtitle.
 * @param {string} props.title           Text for the title.
 * @param {object} props.children        React children.
 * @return {Element}                     The Hero component.
 */
export default function Hero({
  backgroundImage,
  body,
  className,
  ctaText,
  ctaUrl,
  subtitle,
  title
}) {
  return (
    <section
      className={cn(styles.hero, className)}
      style={{
        // These css custom properties are used inside the css module file to set the card's background image, tint overlay, and fallback bg color.
        '--image-url': `url(${backgroundImage})`,
        '--image-tint-color': `#00000020`,
        '--image-fallback-color': `#000`
      }}
    >
      <div className={styles.content}>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        <h1 className={styles.title}>{title}</h1>
        {body && <p className={styles.body}>{body}</p>}
        {ctaText && ctaUrl && (
          <Button
            className={styles.button}
            url={ctaUrl}
            text={ctaText}
            icon="arrowRight"
            type="primary"
            size="md"
          />
        )}
      </div>
    </section>
  )
}

Hero.propTypes = {
  backgroundImage: PropTypes.string,
  body: PropTypes.string,
  className: PropTypes.string,
  ctaText: PropTypes.string,
  ctaUrl: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string
}
