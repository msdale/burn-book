import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
//import "./Maidlist.css"

import MaidCard from "../components/MaidCard";

import { useQuery } from "@apollo/client";
import { QUERY_MAIDS } from '../utils/queries';

//import page
const Maidlist = () => {
	const { loading, data } = useQuery(QUERY_MAIDS);
  	const maids = data?.maids || [];

	return (
		<div className="section is-medium is-responsive card-container" style={{}}>
			<MaidCard
				maids={maids}
			/>
		</div>
	);
}

export default Maidlist