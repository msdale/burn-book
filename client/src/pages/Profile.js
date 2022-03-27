import React from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css"

// import ReviewList from '../components/ReviewList';
// import FriendList from '../components/FriendList';
// import ReviewForm from '../components/ReviewForm';

// import { useQuery, useMutation } from '@apollo/client';
// import { QUERY_USER, QUERY_ME } from '../utils/queries';
// import { ADD_FRIEND } from '../utils/mutations';

import Auth from '../utils/auth';

//images
import DashboardImage from "../assets/profile/profile.png"

const Profile = (props) => {
  var loggedIn = Auth.loggedIn()
  const navigate = useNavigate()
  console.log("LOGIN STATUS " + loggedIn);
  if (!loggedIn) { navigate("/login") }
  
  return (
    <main>
      <div className='page-container'>
        <section className="hero is-small is-light">
          <div className="hero-body">
            <img src={DashboardImage} alt="dashboard logo"></img>
          </div>
        </section>
        <hr />
        <div className='scheduled-cleanings-container'>
          <h1 className='title'>
            Appointment Requests
          </h1>
          <div className='scheduled-cleanings-list'>
            <div className='calendar'>
            </div>
            <form>
            <div className="field ">
              <div className="field-label">
              <p className="control">
                    <input
                      className="input"
                      placeholder="date"
                      name="date"
                      type="date"
                      id="date"
                    />
                  </p>
                  <button className="button is-info">
                      Submit
                    </button>
              </div>
                  
                </div>
                
            </form>
          </div>
        </div>
        <hr />
        <div className='maid-reviews-container'>
          <h1 className='title'>
            My Requests
          </h1>
          <div className='maid-reviews-list'>
            <div>
              
              </div>
          </div>
        </div>
        <hr />
        <div className='maid-rating-container'>
          <h1 className='title'>
            Reviews Left
          </h1>
          <div className='maid-rating-list'>
          </div>
        </div>
      </div>    
    </main>
  );
};

export default Profile;