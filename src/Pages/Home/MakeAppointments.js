import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

function MakeAppointments() {
    return (
        <section
            className='flex justify-center items-center'
            style={{
                background: `url(${appointment})`
            }}>

            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt='doc' />
            </div>
            <div className='flex-1 sm:ml-4 sm:mt-4'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an Appointment Today</h2>
                <p className='text-white mt-2'>The awe of discovering the human body. The honor of being trusted to give advice. The gratitude for helping someone through a difficult illness. These things never grow old. I would still ‘do it again’ despite all the difficulty of training and roadblocks to just practice medicine. Truly is worth it.</p>
                <div className='mt-4'>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </section>
    )
}

export default MakeAppointments