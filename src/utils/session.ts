import { v4 as uuidv4 } from 'uuid'

/**
 * Retrieves the session ID from local storage. If no session ID exists,
 * a new one is generated, stored in local storage, and then returned.
 *
 * @returns {Object} An object containing the session ID and a flag indicating if it was newly created.
 */
export const getSessionId = (): { sessionId: string; isNew: boolean } => {
  let sessionId = localStorage.getItem('sessionId')
  let isNew = false
  if (!sessionId) {
    sessionId = uuidv4()
    localStorage.setItem('sessionId', sessionId)
    isNew = true
  }
  return { sessionId, isNew }
}
