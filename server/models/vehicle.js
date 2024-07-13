const { Schema} =require('mongoose');
const { model} =require('mongoose');

const vehicleSchema = new Schema({
    service_no: { type: String, required: true ,unique:true},
    vehicle_no: { type: String, required: true,unique: true },
    Vehicle_type: { type: String, required: true },
    Service_date: { type: Date, required: true },
    service_competion: { type: Date, required: true },
    Service_details: { type: String, required: true },
   
});

const vehicle = model('vehicle', vehicleSchema);

module.exports = vehicle;

