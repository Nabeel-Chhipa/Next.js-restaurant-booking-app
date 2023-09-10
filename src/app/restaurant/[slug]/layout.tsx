import { Metadata } from 'next';
import React from 'react'
import Header from './components/Header'

export const metadata: Metadata = {
  title: '| Name | Menu',
  description: 'Restaurant name & menu meta description',
  keywords: ['kfc', `mcdonald's`]
}

export default function RestauranttLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        {children}
      </div>
    </>
  )
}
