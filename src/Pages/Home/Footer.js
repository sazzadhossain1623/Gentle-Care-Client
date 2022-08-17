import React from 'react';
import footer from '../../assets/images/footer.png';

function Footer() {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var d = new Date();
    var monthName = months[d.getMonth()];
    return (
        <footer
            style={{
                background: `url(${footer})`,
                backgroundSize: 'cover'
            }}
            className="p-10">
            <div className='footer'>
                <div className='m-auto'>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Emergency Checkup</a>
                    <a className="link link-hover">Monthly Checkup</a>
                    <a className="link link-hover">Weekly Checkup</a>
                    <a className="link link-hover">Deep Checkup</a>
                </div>
                <div className='m-auto'>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">Fluoride Treatment</a>
                    <a className="link link-hover">Cavity Filling</a>
                    <a className="link link-hover">Teeth Whitening</a>
                    <a className="link link-hover">Dental Implants</a>
                </div>
                <div className='m-auto'>
                    <span className="footer-title">Gentle Care</span>
                    <a className="link link-hover">About US</a>
                    <a className="link link-hover">Contact US</a>
                    <a className="link link-hover">Services</a>
                    <a className="link link-hover">Appointment</a>
                </div>
            </div>
            <div className='my-10 text-center'>
                <p>Copyright © {new Date().getDate()} {monthName}, {new Date().getFullYear()} || All right reserved by Gentle Care</p>
            </div>
        </footer>
    )
}

export default Footer