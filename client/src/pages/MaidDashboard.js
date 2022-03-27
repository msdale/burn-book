import React from 'react';

import DashboardImage from '../assets/dashboard/dashboard.png';

const MaidDashboard = () => {

	return (
            <div id="maid-dashboard">
                <div>
                    <figure className="image is-4x3 is-inline-block">
                        <img src={DashboardImage} alt="cleaning the kitchen"/>
                    </figure>
                </div>
                <div className='section'>
                    <div className='title is-2'>Scheduled Cleanings</div>
                    <div className='columns is-vcentered'>
                        <div className='column is-one-third has-text-centered'>
                            <div className="card">
                                <header className="card-header">
                                    <p className="card-header-title">
                                        4/1/2022 @ 1pm
                                    </p>
                                </header>
                                <div class="card-content">
                                    <div class="content">
                                        Sue Smith
                                        <br/>
                                        Partial clean
                                        <br/>
                                        123 Main St
                                    </div>
                                </div>
                                <footer class="card-footer">
                                    <a href="#" class="card-footer-item">Contact</a>
                                    <a href="#" class="card-footer-item">Cancel</a>
                                </footer>
                            </div>
                        </div>
                        <div className='column is-one-third has-text-centered'>
                        <div className="card">
                                <header className="card-header">
                                    <p className="card-header-title">
                                        4/3/2022 @ 10am
                                    </p>
                                </header>
                                <div class="card-content">
                                    <div class="content">
                                        Danny Davito
                                        <br/>
                                        Full clean
                                        <br/>
                                        654 First St.
                                    </div>
                                </div>
                                <footer class="card-footer">
                                    <a href="#" class="card-footer-item">Contact</a>
                                    <a href="#" class="card-footer-item">Cancel</a>
                                </footer>
                            </div>
                        </div>
                        <div className='column is-one-third has-text-centered'>
                        <div className="card">
                                <header className="card-header">
                                    <p className="card-header-title">
                                        4/5/2022 @ 8am
                                    </p>
                                </header>
                                <div class="card-content">
                                    <div class="content">
                                        Jane Doe
                                        <br/>
                                        Move-Out clean
                                        <br/>
                                        789 Electric Ave.
                                    </div>
                                </div>
                                <footer class="card-footer">
                                    <a href="#" class="card-footer-item">Contact</a>
                                    <a href="#" class="card-footer-item">Cancel</a>
                                </footer>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='section has-background-info-light'>
                    <div className='title is-2'>Client Feedback</div>
                </div>
                <div className='section'>
                    <div className='title is-2'>My Rating</div>
                </div>
                <div className='section'>
                    <div className='columns is-vcentered'>
                        <div className='column is-one-third has-text-centered'>
                            <button className='button is-primary'>Contact Supervisor</button>
                        </div>
                        <div className='column is-one-third has-text-centered'>
                            <button className='button is-link'>Rating Forgiveness Request</button>
                        </div>
                        <div className='column is-one-third has-text-centered'>
                            <button className='button is-danger'>Request PTO</button>
                        </div>
                    </div>
                </div>
            </div>
            
        );
}

export default MaidDashboard