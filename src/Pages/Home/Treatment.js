import React from 'react';
import treatments from '../../assets/images/treatment.png';
import PrimaryButton from '../Shared/PrimaryButton';

function Treatment() {
    return (
        <div className="mb-12">
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='pl-16'>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, On Your Terms!</h1>
                        <p className="py-6">It is so important to brush your teeth, take care of your oral health, and thank your dental hygienist. Every tooth in a man's head is more valuable than a diamond. Hair is the first thing. And teeth the second. Hair and teeth. A man got those two things, he hass got it all.</p>
                        <PrimaryButton>Learn More</PrimaryButton>
                    </div>
                    <img alt='treament of a child' src={treatments} className="max-w-sm rounded-lg shadow-2xl hidden lg:block" />
                </div>
            </div>
        </div>
    )
}

export default Treatment