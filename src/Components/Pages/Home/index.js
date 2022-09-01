import React from 'react'
import Banners from './Components/Banner/Banner'
import Carousel from './Components/Carousel/Carousel'
import Content from './Components/Content/Content'

function Home() {
  return (
    <div className='w-100'>
      <Banners />
      <div className='mt-2 mb-2'>
        <Carousel />
      </div>
      <div className='container'>
        <Content />
      </div>
    </div>
  )
}

export default Home