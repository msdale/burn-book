import React from 'react'

import ReivewList from '.../components/ReviewList';
import ReviewForm from '../components/ReactionForm';

const MaidInfo = () => {
  return (
    <div>
      <div>This is the maid info</div>
      <ReviewForm/>
      <h2>My Reviews:</h2>
      <ReivewList/>
    
    </div>
  )
}

export default MaidInfo