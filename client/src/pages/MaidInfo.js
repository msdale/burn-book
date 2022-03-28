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
    
    </div>
  )
}

export default MaidInfo