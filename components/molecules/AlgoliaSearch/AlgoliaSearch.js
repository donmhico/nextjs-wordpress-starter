import cn from 'classnames'
import parseQuerystring from '@/functions/parseQuerystring'
import {useRouter} from 'next/router'
import PropTypes from 'prop-types'
import React, {useRef, useState} from 'react'
import styles from './AlgoliaSearch.module.css'
import dynamic from 'next/dynamic'
import SearchPlaceholder from './components/SearchPlaceholder'
const Search = dynamic(() => import('./components/Search'), {
  loading: () => <SearchPlaceholder />
})

// TODO: Create Storybook for this component.
export default function AlgoliaSearch({
  indexName,
  useHistory,
  usePlaceholder,
  className
}) {
  const router = useRouter()
  const path = router?.asPath // URL from router.
  const query = path.includes('q=') ? parseQuerystring(path, 'q') : '' // Parse the querystring.
  const [loadAlgolia, setLoadAlgolia] = useState(0)
  const searchRef = useRef()

  /**
   * Set a min-height value on the search wrapper to avoid DOM movement during dynamic render.
   */
  const setMinHeight = () => {
    const minHeight =
      searchRef?.current && usePlaceholder
        ? searchRef.current.offsetHeight
        : '0'
    return {minHeight: `${minHeight}px`}
  }

  return (
    <div
      className={cn(styles.algoliaSearch, className)}
      ref={searchRef}
      style={setMinHeight()}
    >
      {!!loadAlgolia || !usePlaceholder ? (
        <Search indexName={indexName} useHistory={useHistory} query={query} />
      ) : (
        <SearchPlaceholder query={query} setLoadAlgolia={setLoadAlgolia} />
      )}
    </div>
  )
}

AlgoliaSearch.propTypes = {
  indexName: PropTypes.string.isRequired,
  useHistory: PropTypes.bool,
  usePlaceholder: PropTypes.bool,
  className: PropTypes.string
}

AlgoliaSearch.defaultProps = {
  useHistory: true,
  usePlaceholder: true
}
