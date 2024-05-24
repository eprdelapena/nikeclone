import React from 'react'
import { services } from '../constants/index.js'
import ServicesCard from './ServicesCard.jsx'

const Services = () => {
  return (
    <div className="max-container flex flex-wrap justify-between gap-9">
      {services.map((element) => {
        return <ServicesCard element={element} />
      })}
    </div>
  )
}

export default Services