import { Request, Response } from 'express'
import { createEvent, getAllEvents, getEventById } from '../models/eventModel'

export const trackEvent = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { eventName, properties } = req.body

  if (!eventName) {
    res.status(400).send('Event name is required')
    return
  }

  try {
    const event = await createEvent({ eventName, properties })
    res.status(201).json(event)
  } catch (error) {
    console.error('Error saving event:', error)
    res.status(500).send('Internal Server Error')
  }
}

export const getEvents = async (req: Request, res: Response): Promise<void> => {
  try {
    const events = await getAllEvents()
    res.status(200).json(events)
  } catch (error) {
    console.error('Error fetching events:', error)
    res.status(500).send('Internal Server Error')
  }
}

export const getEvent = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params

  try {
    const event = await getEventById(parseInt(id, 10))
    if (!event) {
      res.status(404).send('Event not found')
      return
    }

    res.status(200).json(event)
  } catch (error) {
    console.error('Error fetching event:', error)
    res.status(500).send('Internal Server Error')
  }
}

export const recordPageview = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { route, path, sessionId } = req.body

  if (!route || !path) {
    console.error('Route and path are required')
    res.status(400).send('Route and path are required')
    return
  }

  try {
    const pageView = await createEvent({
      eventName: 'pageview',
      properties: { route, path, sessionId },
    })
    res.status(201).json(pageView)
  } catch (error) {
    console.error('Error recording pageview:', error)
    res.status(500).send('Internal Server Error')
  }
}

export const recordUniqueVisitor = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { sessionId } = req.body

  if (!sessionId) {
    res.status(400).send('Session ID is required')
    return
  }

  try {
    const uniqueVisitor = await createEvent({
      eventName: 'uniqueVisitor',
      properties: { sessionId },
    })
    res.status(201).json(uniqueVisitor)
  } catch (error) {
    console.error('Error recording unique visitor:', error)
    res.status(500).send('Internal Server Error')
  }
}
