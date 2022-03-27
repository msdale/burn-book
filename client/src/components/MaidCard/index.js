import React from 'react';
import { Link } from 'react-router-dom';

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
//import "../pages/Maidlist.css"

//import images
/*
import Maid1 from "../assets/card/maid1.jpg"
import Maid2 from "../assets/card/maid2.jpg"
import Maid3 from "../assets/card/maid3.jpg"
*/

const MaidCard = ({ maids }) => {

    console.log(maids)
    return (
        <div>
          {maids &&
            maids.map(maid => (
              <div key={maid._id} className="card mb-3">
                <p className="card-header">
                  <Link
                    to={`/profile/${maid.name}`}
                    style={{ fontWeight: 700 }}
                    className="text-light"
                  >
                    {maid.maid_username}
                  </Link>{' '}
                  thought on {maid.createdAt}
                </p>
              </div>
            ))}
        </div>
      );
};

export default MaidCard;