import React from 'react'
import TopBar from './Components/Topbar/index'
import Produk from "./Components/Product/index"


const page = () => {
  return (
    <div className=' bg-slate-100'>
      <TopBar/>
      <Produk />
    </div>
  )
}

export default page