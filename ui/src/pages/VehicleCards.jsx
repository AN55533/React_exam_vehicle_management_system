import { useState } from 'react'
import { useEffect} from 'react'

import React from 'react'
import VehicleCard from '../components/VehicleCard'

const VehicleCards = () => {
    const [vehicle, setVehicle] = useState([]);

    useEffect(() => {
  
        const fetchvehicle = async () => {
            try {
                const res = await fetch('/api/vehicle_details');
                const data = await res.json()
                setVehicle(data)
            } catch (error) {
                console.log('error', error)
            }
        };
        fetchvehicle()
    },[])
    
    return (
        <>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 my-10'>
                {vehicle.map((vehicle) => (
                    <VehicleCard key={vehicle._id} vehicle={vehicle} />
                ))}
            </div>
        </>
    )
}


export default VehicleCards

