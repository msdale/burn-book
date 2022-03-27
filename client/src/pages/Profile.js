import React from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css"

// import ReviewList from '../components/ReviewList';
// import FriendList from '../components/FriendList';
import ReviewForm from '../components/ReviewForm';

// import { useQuery, useMutation } from '@apollo/client';
// import { QUERY_USER, QUERY_ME } from '../utils/queries';
// import { ADD_FRIEND } from '../utils/mutations';

import Auth from '../utils/auth';

//component
import Requests from "../components/Requests/Requests";

//images
import DashboardImage from "../assets/profile/profile.png"
// import ReviewImage from "../assets/profile/heart.png"

const Profile = (props) => {
  var loggedIn = Auth.loggedIn()
  const navigate = useNavigate()
  console.log("LOGIN STATUS " + loggedIn);
  if (!loggedIn) { navigate("/login") }

  return (
    <main>
      <div className='page-container-profile has-background-white-bis '>
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
              <div className="field date-line">
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
                  <button className="button is-primary">
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
            <div className="columns is-vcentered">
              <div className="column is-one-third has-text-centered">
              <Requests/>
               </div>
               <div className="column is-one-third has-text-centered">
              <Requests/>
               </div>
               <div className="column is-one-third has-text-centered">
              <Requests/>
               </div>
            </div>
            </div>
          </div>
        </div>
        <hr />
        {/* maid rating container */}
        <div className='maid-rating-container'>
          <div className="title">
            <h1>
              Leave Some Love
              {/* <img src={ReviewImage} alt="review logo" className='image is-24x24'></img> */}
            </h1>
          </div>
          <div className="review-list">
            <ReviewForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;