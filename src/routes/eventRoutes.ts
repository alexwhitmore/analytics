import { Router } from 'express'
import {
  getEvent,
  getEvents,
  recordPageview,
  recordUniqueVisitor,
  trackEvent,
} from '../controllers/eventController'

const router = Router()

router.post('/track', trackEvent)
router.get('/events', getEvents)
router.get('/events/:id', getEvent)
router.post('/pageview', recordPageview)
router.post('/unique-visitor', recordUniqueVisitor)

export default router
