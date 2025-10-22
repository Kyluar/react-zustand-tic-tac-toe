import React from 'react'

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='pt-br'>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
