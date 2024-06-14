import { Event, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const createEvent = async (data: {
  eventName: string
  properties: object
}): Promise<Event> => {
  return prisma.event.create({
    data,
  })
}

export const getAllEvents = async (): Promise<Event[]> => {
  return prisma.event.findMany()
}

export const getEventById = async (id: number): Promise<Event | null> => {
  return prisma.event.findUnique({
    where: { id },
  })
}
