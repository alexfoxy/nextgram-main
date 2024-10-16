'use client'
import { useRouter } from 'next/navigation'
import { type ElementRef, useEffect, useRef } from 'react'

export function Modal({ children, modalPath }: { children: React.ReactNode, modalPath?: string }) {
  const router = useRouter()
  const dialogRef = useRef<ElementRef<'dialog'>>(null)

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal()
    }
  }, [])

  function onDismiss() {
    router.push('.')
  }

  return <div className="modal-backdrop">
    <dialog ref={dialogRef} className="modal" onClose={onDismiss}>
      {children}
      <button onClick={onDismiss} className="close-button" />
    </dialog>
  </div>
}
