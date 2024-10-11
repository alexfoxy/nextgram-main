'use client'
import Link from 'next/link'
import { Modal } from '../../../components/modal'
import useVm from '../../../hooks/useVM'

class ViewModel {
  willFocus(o: any) {
    console.log("FOCUS PHOTO", o)
  }
}

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string }
}) {
  const vm = useVm(ViewModel, { photoId })

  return <Modal modalPath={"/photos/*"}>
    <h3>Photo: {photoId}</h3>
    <div>
      <Link href={`/photos/${photoId}/user/${photoId}`}>User Profile</Link>
    </div>
  </Modal>
}
