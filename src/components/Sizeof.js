'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

function Sizeof({ children }) {
  const pathname = usePathname()

  return (
    <div className={pathname === '/' ? 'overflow-hidden' : 'overflow-x-hidden'}>
      {children}
    </div>
  )
}

export default Sizeof