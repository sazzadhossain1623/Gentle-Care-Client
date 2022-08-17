import React from 'react'
import InfoCard from './InfoCard'
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

function Info() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
        <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" cardDesc="10:00AM - 8:00PM" cardTitle="Opening Hours" img={clock}></InfoCard>
        <InfoCard bgClass="bg-slate-700" cardDesc="House 203, Road 09, New D.O.H.S, Mohakhali, Dhaka-1206." cardTitle="Our Location" img={marker}></InfoCard>
        <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" cardDesc="+8801688-5361448" cardTitle="Contact US" img={phone}></InfoCard>
    </div>
  )
}

export default Info