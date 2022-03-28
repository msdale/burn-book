import React from 'react'
import Maid2 from "../assets/card/maid2.jpg"
import "./MaidInfo.css";

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_MAID } from '../utils/queries';

import ReviewForm from '../components/ReviewForm';
import ReivewList from '../components/ReviewList';

function MaidInfo(props) {

  const { maid_username: userParam } = useParams();

  const { data } = useQuery(QUERY_MAID, {
    variables: { maidUsername: userParam },
  });

  const maid = data?.maid || {};
  
  console.log(maid)
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
                    <p className="title is-4">{maid.name}</p>
                    <p className="">@{maid.maid_username}</p>
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
                  “Amazing Service. {maid.name} treats every home like her own.”
                </p>
              </div>
              <p class="subtitle">
                KJenner
              </p>
            </div>
          </div>
        </div>
      </div>

      <ReviewForm/>
      <h2>My Reviews:</h2>
      <ReivewList
        reviews={maid.reviews}
      />

    </div>
  )
}

export default MaidInfo