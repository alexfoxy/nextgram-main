'use client'

import { useParams, usePathname, useSelectedLayoutSegment, useSelectedLayoutSegments } from 'next/navigation'

const RouteListener = () => {
  const segments = useSelectedLayoutSegments('modal')
  const path = usePathname()

  return <h3>{segments.join(':')} {path}</h3>
}

export default RouteListener