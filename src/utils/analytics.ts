function injectAnalyticsScript(props: any) {
  const src = props.srcScript

  if (document.head.querySelector(`script[src*="${src}"]`)) return

  const script = document.createElement('script')
  script.src = src
  script.defer = true

  script.onerror = () => {
    const errorMessage =
      'There was an error when trying to load your Analytics script.'
  }

  document.head.appendChild(script)
}

export const pageview = async ({
  route,
  path,
  url,
}: {
  route?: string
  path?: string
  url?: string
}): Promise<void> => {
  if (!route || !path) {
    console.error('Route and path are required for pageview')
    return
  }

  console.log('Sending pageview request:', { route, path })

  try {
    const response = await fetch(`${url}/api/pageview`, {
      // Ensure full URL with port
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ route, path }),
      credentials: 'include', // Ensure credentials are included if needed
    })

    if (!response.ok) {
      console.error(
        'Failed to record pageview, response status:',
        response.status
      )
      const responseText = await response.text()
      console.error('Response text:', responseText)
      throw new Error('Failed to record pageview')
    }

    console.log('Pageview recorded successfully')
  } catch (error) {
    console.error('Error recording pageview:', error)
  }
}
