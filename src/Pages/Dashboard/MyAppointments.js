import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

function MyAppointments() {

    const [user] = useAuthState(auth);
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`)
                .then(res => res.json())
                .then(data => setAppointments(data));
        }
    }, [user])

    return (
        <div>
            <h1 className='text-center text-xl py-2'>Hey <span className='text-secondary font-bold'>{user.displayName},</span> Here are your {appointments.length} Appointments.</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            appointments.map((a, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{a.patientName}</td>
                                    <td>{a.date}</td>
                                    <td>{a.slot}</td>
                                    <td>{a.slot}</td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default MyAppointments