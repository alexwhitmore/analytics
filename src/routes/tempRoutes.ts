import { Request, Response, Router } from 'express'
import { createClient } from '../utils/supabase'

const router = Router()

router.get('/temp', async (req: Request, res: Response) => {
  console.log('Cookies:', req.cookies)
  const supabase = createClient({ req, res })

  try {
    const { data, error } = await supabase.from('temp').select('*')

    if (error) {
      console.error('Supabase query error:', error)
      return res.status(500).json({ error: error.message })
    }

    console.log('Supabase query data:', data)
    res.status(200).json(data)
  } catch (error) {
    console.error('Unexpected error:', error)
    res.status(500).json({ error: 'An unexpected error occurred.' })
  }
})

export default router
