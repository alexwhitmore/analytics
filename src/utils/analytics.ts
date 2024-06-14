import { getSessionId } from './session'

/**
 * Tracks a PageView event by sending the route, path, and session ID to the specified URL.
 * @param {Object} params - The parameters for the PageView.
 * @param {string} params.route - The route of the PageView.
 * @param {string} params.path - The path of the PageView.
 * @param {string} params.url - The base URL to send the PageView data to.
 * @returns {Promise<void>} - A promise that resolves when the PageView is recorded.
 * @throws {Error} - Throws an error if the fetch request fails.
 */
export const trackPageView = async ({
  route,
  path,
  url,
}: {
  route?: string
  path?: string
  url?: string
}): Promise<void> => {
  if (!route || !path) {
    console.error('Route and path are required for PageView')
    return
  }

  const { sessionId } = getSessionId()

  try {
    const response = await fetch(`${url}/api/pageview`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ route, path, sessionId }),
      credentials: 'include',
    })

    if (!response.ok) {
      throw new Error(
        `Failed to record PageView, response status: ${response.status}`
      )
    }

    console.info('[SUCCESS]: PageView recorded.')
  } catch (error) {
    console.error('[ERROR]: Unable to record PageView', error)
  }
}

/**
 * Tracks a unique visitor by sending the session ID to the specified URL.
 * @param {Object} params - The parameters for tracking the unique visitor.
 * @param {string} params.url - The base URL to send the unique visitor data to.
 * @returns {Promise<void>} - A promise that resolves when the unique visitor is recorded.
 * @throws {Error} - Throws an error if the fetch request fails.
 */
export const trackUniqueVisitor = async ({
  url,
}: {
  url: string
}): Promise<void> => {
  const { sessionId, isNew } = getSessionId()

  if (!isNew) {
    // console.info(
    //   '[INFO]: Session ID already exists, not recording unique visitor.'
    // )
    return
  }

  try {
    const response = await fetch(`${url}/api/unique-visitor`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ sessionId }),
      credentials: 'include',
    })

    if (!response.ok) {
      throw new Error(
        `Failed to record unique visitor, response status: ${response.status}`
      )
    }

    console.info('Unique visitor recorded successfully')
  } catch (error) {
    console.error('Error recording unique visitor:', error)
  }
}
