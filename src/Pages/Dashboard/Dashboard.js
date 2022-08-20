import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Dashboard() {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-center py-4 text-3xl text-purple-500 font-bold'>Welcome to your Dashboard</h2>
                <hr/>
                <Outlet></Outlet>
                

            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Appointments</Link></li>
                    <li><Link to="/dashboard/review">My Reviews</Link></li>
                    <li><Link to="/dashboard/history">My History</Link></li>
                </ul>

            </div>
        </div>
    )
}

export default Dashboard