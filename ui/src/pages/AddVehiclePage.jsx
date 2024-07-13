import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddVehiclePage = () => {
  const [service_no, setService_no] = useState('');
  const [vehicle_no, setVehicle_no] = useState('')
  const [Vehicle_type, setVehicle_type] = useState('');
  const [Service_date, setService_date] = useState('');
  const [service_competion, setservice_competion] = useState('');
  const [Service_details, setService_details] = useState('');





  const navigate = useNavigate()

  const submitForm = (e) => {
    e.preventDefault()
    const newVehicle = {
        service_no,
        vehicle_no,
        Vehicle_type,
        Service_date,
        service_competion,
        Service_details,
     
    }
    const res = addVehicleSubmit(newVehicle)
    toast.success('Vehicle details added successfully')
    navigate('/home')
  }

  const addVehicleSubmit = async (newVehicle) => {
    const res = await fetch('http://localhost:5000/add-vehicledetails', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify(newVehicle)
    })
    return res;
  }

  return (
    <>

      <section className="bg-white mb-20">
        <div className="container m-auto max-w-2xl py-2">
          <div className="bg-purple-100 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">

            <form onSubmit={submitForm}>
              <h2 className="text-3xl text-purple-800 text-center font-semibold mb-6">
                Add Vehicle
              </h2>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Service NUmber
                </label>
                <input
                  type="text"
                  id="service_no"
                  name="service_no"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="Enter service number"
                  required
                  value={service_no}
                  onChange={(e) => setService_no(e.target.value)}

                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="ingredients"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Vehicle Number
                </label>
                <textarea
                  id="vehicle_no"
                  name="vehicle_no"
                  className="border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="vehicle_no Required"
                  value={vehicle_no}
                  onChange={(e) => setVehicle_no(e.target.value)}
                ></textarea>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="Vehicle_type"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Vehicle Type
                </label>
                <textarea
                  id="Vehicle_type"
                  name="Vehicle_type"
                  className="border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="Vehicle_type"
                  value={Vehicle_type}
                  onChange={(e) => setVehicle_type(e.target.value)}
                ></textarea>
              </div>


              <div className="mb-4">
                <label
                  htmlFor="Service_date"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Service date
                </label>
                <input
                  id="Service_date"
                  name="Service_date"
                  type= "date"
                  className="border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="Service_date"
                  value={Service_date}
                  onChange={(e) => setService_date(e.target.value)}
                ></input>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="service_competion"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Service completion
                </label>
                <input
                  id="service_competion"
                  name="service_competion"
                  type='date'
                  className="border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="service_competion"
                  value={service_competion}
                  onChange={(e) => setservice_competion(e.target.value)}
                ></input>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="Service_details"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Service details
                </label>
                <textarea
                  id="Service_details"
                  name="Service_details"
                  className="border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="Service_details"
                  value={Service_details}
                  onChange={(e) => setService_details(e.target.value)}
                ></textarea>
              </div>





              <div>
                <button
                  className="bg-purple-500 hover:bg-purple-600 my-10  text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Add Vehicledetails
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default AddVehiclePage