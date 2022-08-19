import React from 'react'
import Banner from './Banner'
import Contact from './Contact'
import Footer from '../Shared/Footer'
import Info from './Info'
import MakeAppointments from './MakeAppointments'
import Services from './Services'
import Testimonials from './Testimonials'
import Treatment from './Treatment'

function Home() {
    return (
        <>
            <div>
                <Banner></Banner>
                <Info></Info>
                <Services></Services>
                <Treatment></Treatment>
            </div>
            <MakeAppointments></MakeAppointments>
            <div className='px-12'>
                <Testimonials></Testimonials>
            </div>
            <Contact></Contact>
            <Footer></Footer>
        </>
    )
}

export default Home