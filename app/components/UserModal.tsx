'use client'

import Link from 'next/link'
import { Modal } from './modal'

export default function UserModal({
  id,
  modalPath,
}: {
  id: string,
  modalPath?: string
}) {
  return <Modal modalPath={modalPath}>
    User Profile: {id}
  </Modal>
}
