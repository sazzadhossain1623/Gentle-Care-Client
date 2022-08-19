import { format } from 'date-fns';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

function BookingModal({ treatment, setTreatment, date }) {
    const { name, _id, slots } = treatment;
    const [user] = useAuthState(auth);
    console.log(user);

    const handleBoking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(slot, _id, name);
        setTreatment(null);
    }

    return (
        <div className='text-center'>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h2 className="mb-3 font-bold text-xl text-accent">Booking For <i className="fa-solid fa-down"></i><br /> <h1 className='text-2xl text-secondary'>{name}</h1></h2>
                    <form onSubmit={handleBoking} className='grid grid-cols-1 gap-3 justify-items-center'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name="slot" className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="number" name='phone' placeholder="Your Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-secondary w-24 text-white m-auto" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BookingModal