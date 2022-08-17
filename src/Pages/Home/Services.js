import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';

function Services() {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            desc: 'Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist.',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            desc: 'If you have symptoms , you might have pain in your teeth or . Cavity pain depends on the extent of your cavity.',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            desc: 'Everyone notices a bright, white, glowing smile. And everyone notices how confident you feel when you have that beautiful smile.',
            img: whitening
        },
    ];
    return (
        <div className='my-12'>
            <div className='text-center'>
                <h1 className='text-primary texl-8xl font-bold uppercase'>Our Services</h1>
                <h2 className='text-2xl'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    )
}

export default Services