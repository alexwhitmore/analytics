const { createServerClient } = require('@supabase/ssr')
import { Request, Response } from 'express'

interface Context {
  req: Request
  res: Response
}

export const createClient = (context: Context) => {
  return createServerClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY,
    {
      cookies: {
        get: (key: string) => {
          const cookies = context.req.cookies
          const cookie = cookies ? cookies[key] ?? '' : ''
          return decodeURIComponent(cookie)
        },
        set: (key: string, value: string, options?: any) => {
          if (!context.res) return
          context.res.cookie(key, encodeURIComponent(value), {
            ...options,
            sameSite: 'Lax',
            httpOnly: true,
          })
        },
        remove: (key: string, options?: any) => {
          if (!context.res) return
          context.res.cookie(key, '', { ...options, httpOnly: true })
        },
      },
    }
  )
}
