import React from "react";
import "./Maidlist.css"
import MaidCard from "../components/MaidCard";

import { useQuery } from "@apollo/client";
import { QUERY_MAIDS } from '../utils/queries';

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