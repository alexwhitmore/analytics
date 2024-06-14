import { useEffect } from 'react'
import { pageview } from '../../src/utils/analytics'

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000'

function Analytics(
  props: any & { framework?: string; path?: string | null }
): null {
  useEffect(() => {
    if (props.route && props.path) {
      pageview({
        route: props.route,
        path: props.path,
        url: API_BASE_URL,
      })
    }
  }, [props.route, props.path])

  return null
}

export default Analytics
