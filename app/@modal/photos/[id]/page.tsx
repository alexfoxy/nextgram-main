import Link from 'next/link'
import { Modal } from '../../../components/modal'

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string }
}) {
  return <Modal modalPath={"/photos/*"}>
    <h3>Photo: {photoId}</h3>
    <div>
      <Link href={`/photos/${photoId}/user/${photoId}`}>User Profile</Link>
    </div>
  </Modal>
}
