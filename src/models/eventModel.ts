import { Event, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// export const createEvent = async (data: {
//   eventName: string
//   properties: object
// }): Promise<Event> => {
//   return prisma.event.create({
//     data,
//   })
// }

interface EventProperties {
  route?: string
  path?: string
  sessionId: string
}

export const createEvent = async ({
  eventName,
  properties,
}: {
  eventName: string
  properties: EventProperties
}) => {
  return prisma.event.create({
    data: {
      eventName,
      properties: JSON.stringify(properties),
    },
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
