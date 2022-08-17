import React from 'react';
import appointment from '../../assets/images/appointment.png';

function Contact() {
    return (
        <section
            className='contact-section'
            style={{
                background: `url(${appointment})`
            }}
        >
            <div className='py-12 text-center'>
                <h1 className='text-primary texl-8xl font-bold uppercase'>Contact US</h1>
                <h2 className='text-2xl text-white'>Stay Connected With US</h2>
                <div className='form-container my-4'>
                    <div className='py-2'>
                        <input className=" appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" placeholder="Email Address" />
                    </div>
                    <div className='py-2'>
                        <input className=" appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" placeholder="Subject" />
                    </div>
                    <div className='py-2'>
                        <textarea className=" appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" placeholder="Your Message" />
                    </div>
                    <div className='py-2 pb-0'>
                        <button className="bg-primary w-28 h-12 text-white font-bold py-2 px-4 rounded">
                            Submit
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contact