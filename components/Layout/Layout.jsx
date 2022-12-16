import { useRouter } from 'next/router'
import React from 'react'
import Footer from './Footer'
import Header from './Header'

export const Layout = ({children}) => {
  const navigate = useRouter()
  return (
    <div className="content">
        <Header/>
        {children}
        {navigate.pathname !== "/orderNowModelS" ? <Footer/> : null}
    </div>
  )
}
