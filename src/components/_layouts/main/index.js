import React from 'react'

export default function MainLayout({ children }) {
  return (
    <div css={{ maxWidth: 960, margin: '0 auto' }}>
      <main>{children}</main>
    </div>
  )
}
