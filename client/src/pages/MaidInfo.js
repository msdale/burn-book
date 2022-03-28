import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_MAID, QUERY_MAIDS } from '../utils/queries';

import ReviewForm from '../components/ReviewForm';
import ReivewList from '../components/ReviewList';

const MaidInfo = (props) => {

  const { maid_username: userParam } = useParams();

  const { loading, data } = useQuery(QUERY_MAID, {
    variables: { maidUsername: userParam },
  });

  const maid = data?.maid || {};

  return (
    <div>
      <div>This is the maid info</div>
      <ReviewForm/>
      <h2>My Reviews:</h2>
      <ReivewList
        reviews={maid.reviews}
      />
    
import React from 'react'
import Maid2 from "../assets/card/maid2.jpg"
import "./MaidInfo.css";

function MaidInfo() {
  return (
    <div className='columns'>
      {/* coloum 1 that holds card */}
      <div className='column'>
        <div className='maid-into-container has-content is-centered'>
          <section className=" section more-about-me">
            <div className="card">
              <header class="card-header ">
                <p class="card-header-title">
                  More About Me
                </p>
              </header>
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={Maid2} alt="cleaning supplies" />
                </figure>
              </div>
              <div className="card-content ">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img src={Maid2} alt="cleaning supplies" />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">Maria R.</p>
                    <p className="">@mariamops</p>
                  </div>
                </div>
                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris.
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* coloum 2 that holds reviews */}
      {/* <div className='column'></div> */}
      <div className='is-flex is-align-self-center'>
        <div className='column'>
          <div className="card demo-review">
            <div className="card-content ">
              <div className="content">
                <p className="title">
                  “Amazing Service. Maria treats every home like her own.”
                </p>
              </div>
              <p class="subtitle">
                KJenner
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MaidInfo