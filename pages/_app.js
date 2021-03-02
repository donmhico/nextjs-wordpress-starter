import '@/styles/demo.css'
import '@/styles/index.css'
import { Provider } from 'next-auth/client'
import PropTypes from 'prop-types'
import 'tailwindcss/tailwind.css'

/**
 * Render the App component.
 *
 * @author WebDevStudios
 * @param {object}  props           The component attributes as props.
 * @param {object}  props.Component Page component to display.
 * @param {boolean} props.pageProps Page component props.
 * @return {Element}                The App component.
 */
export default function App({Component, pageProps}) {
  console.log('App');

  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  )
}

App.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object.isRequired
}
