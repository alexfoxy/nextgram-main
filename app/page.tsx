'use client'
import Link from 'next/link'
import useVm from './hooks/useVM'
import { useSelectedLayoutSegments } from 'next/navigation'

class ViewModel {
  willFocus(o: any) {
    console.log("FOCUS PHOTO LIST", o)
  }
}

export default function Page(o: any) {
  let photos = Array.from({ length: 6 }, (_, i) => i + 1)

  const vm = useVm(ViewModel, o.params)

  // const segments = useSelectedLayoutSegments('@users')
  // debugger


  return <>
    <h1>Photos</h1>
    <section className="cards-container">
      {photos.map((id) => (
        <Link className="card" key={id} href={`/photos/${id}`} passHref>
          {id}
        </Link>
      ))}
    </section>
  </>
}
