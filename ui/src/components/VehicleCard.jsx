import React, { useState } from 'react'
const VehicleCard = ({ vehicle }) => {
  return (
    <>
    
      <div className=' bg-purple-100  rounded-md shadow-2xl flex flex-col items-center justify-center mx-5 my-5 py-10'>
        <h2 className=' font-bold text-lg text-purple-900 '>SERVICE NUMBER:      {vehicle.service_no}</h2>
        <p className='text-black group-hover:text-white my-2 mx-5'>{vehicle.vehicle_no} </p>
        <p className='text-black group-hover:text-white my-2 mx-5'>{vehicle.Vehicle_type} </p>
        <p className='text-black group-hover:text-white my-2 mx-5'>{vehicle.Service_date} </p>
        <p className='text-black group-hover:text-white my-2 mx-5'>{vehicle.service_competion} </p>
        <p className='text-black group-hover:text-white my-2 mx-5'>{vehicle.Service_details} </p>
      </div>
    </>
  )
}
export default VehicleCard