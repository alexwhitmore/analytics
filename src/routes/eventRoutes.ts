import { Router } from 'express'
import {
  getEvent,
  getEvents,
  recordPageview,
  trackEvent,
} from '../controllers/eventController'

const router = Router()

router.post('/track', trackEvent)
router.get('/events', getEvents)
router.get('/events/:id', getEvent)
router.post('/pageview', recordPageview)

export default router
