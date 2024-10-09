'use client'

import { usePathname, useRouter } from 'next/navigation'
import { type ElementRef, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

function getBackPath(url: string, segmentPattern: string) {
  // Convert the segment pattern into a regular expression
  const regex = new RegExp(segmentPattern.replace('*', '[^/]*') + '$')

  // Remove the matched segment from the URL
  const newPath = url.replace(regex, '').replace(/\/$/, '') // Remove any trailing slash

  return newPath || '/' // Return '/' if the resulting path is empty
}

export function Modal({ children, modalPath }: { children: React.ReactNode, modalPath?: string }) {
  const router = useRouter()
  const path = usePathname()
  const dialogRef = useRef<ElementRef<'dialog'>>(null)

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal()
    }
  }, [])


  function onDismiss() {
    if (modalPath && window.history.length < 5) { // Need another way to detect this, do we need a path stack?
      const backPath = getBackPath(path, modalPath)
      router.push(backPath)
    } else {
      router.back()
    }
  }

  return <div className="modal-backdrop">
    <dialog ref={dialogRef} className="modal" onClose={onDismiss}>
      {children}
      <button onClick={onDismiss} className="close-button" />
    </dialog>
  </div>
}
