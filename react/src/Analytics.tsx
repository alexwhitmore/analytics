import { useEffect } from 'react'
import { trackPageView, trackUniqueVisitor } from '../../src/utils/analytics'

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000'

function Analytics(): null {
  useEffect(() => {
    const route = window.location.pathname
    const path = window.location.href

    trackUniqueVisitor({ url: API_BASE_URL })
    trackPageView({
      route,
      path,
      url: API_BASE_URL,
    })
  }, [])

  return null
}

export default Analytics
