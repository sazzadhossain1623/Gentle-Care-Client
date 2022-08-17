import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';

    function Testimonials() {
        const reviews = [
            {
                _id: 1,
                name: 'Wilson Harry',
                review: 'These done fit well and look great.  I love the smoothness of the edges and the extra.',
                img:  people1,
                location: 'Texas'
            },
            {
                _id: 2,
                name: 'Ariana Grande',
                review: 'Very nice set. Good quality. We have had the set for two months now and have not been.',
                img:  people2,
                location: 'California'
            },
            {
                _id: 1,
                name: 'Suzie Bates',
                review: 'These are so flimsy! They are not the quality you would expect from a piece of furniture.',
                img:  people3,
                location: 'London'
            },
        ]
        return (
            <section className='my-12'>
                <div className='flex justify-between'>
                    <div>
                        <h4 className='text-xl text-primary font-bold'>Testimonials</h4>
                        <h2 className='text-xl'>What Our Patients Say!</h2>
                    </div>
                    <div>
                        <img className='lg:w-36 sm:w-24' src={quote} />
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grip-gap gap-5'>
                    {
                        reviews.map(review => <Review
                        key={review._id}
                        review={review}
                        ></Review>)
                    }
                </div>
            </section>
        )
    }

export default Testimonials