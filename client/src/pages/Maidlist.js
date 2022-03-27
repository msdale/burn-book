import React from "react";
import "./Maidlist.css"

//import images
import Maid1 from "../assets/card/maid1.jpg"
import Maid2 from "../assets/card/maid2.jpg"
import Maid3 from "../assets/card/maid3.jpg"

//import page

const Maidlist = () => {
	return (
		<div className="section is-medium is-responsive card-container" style={{}}>
			<div className="card">
				<div className="card-image">
					<figure className="image is-4by3">
						<img src={Maid1} alt="maid" />
					</figure>
				</div>
				<div className="card-content">
					<div className="media">
						<div className="media-left">
							<figure className="image is-48x48">
								<img src={Maid1} alt="maid" />
							</figure>
						</div>
						<div className="media-content">
							<p className="title is-4">Maria R.</p>
							<p className="subtitle is-6">@mariamops</p>
						</div>
					</div>

					<div className="content">
						Clean space, clean mind. Book now for a zen space.
						<br />
						<br />
						<a href="/maidinfo" className="button is-danger is-rounded more-info" onClick="<BookNow/>">More Info</a>
						<a href="/maidinfo" className="button is-danger is-rounded" onClick="<BookNow/>">Book Now</a>
					</div>
				</div>
			</div>
			{/* card2 */}
			<div className="card">
				<div className="card-image">
					<figure className="image is-4by3">
						<img src={Maid2} alt="maid" />
					</figure>
				</div>
				<div className="card-content">
					<div className="media">
						<div className="media-left">
							<figure className="image is-48x48">
								<img src={Maid2} alt="maid" />
							</figure>
						</div>
						<div className="media-content">
							<p className="title is-4">Kelly K.</p>
							<p className="subtitle is-6">@kkleans</p>
						</div>
					</div>

					<div className="content">
						Clean space, clean mind. Book now for a zen space.
						<br />
						<br />
						<a href="/maidinfo" className="button is-danger is-rounded more-info" onClick="<BookNow/>">More Info</a>
						<a href="/maidinfo" className="button is-danger is-rounded" onClick="<BookNow/>">Book Now</a>
					</div>
				</div>
			</div>
			{/* card3 */}
			<div className="card">
				<div className="card-image">
					<figure className="image is-4by3">
						<img src={Maid3} alt="maid" />
					</figure>
				</div>
				<div className="card-content">
					<div className="media">
						<div className="media-left">
							<figure className="image is-48x48">
								<img src={Maid3} alt="maid" />
							</figure>
						</div>
						<div className="media-content">
							<p className="title is-4">Sam J.</p>
							<p className="subtitle is-6">@samsweeps</p>
						</div>
					</div>

					<div className="content">
						Clean space, clean mind. Book now for a zen space.
						<br />
						<br />
						<a href="/maidinfo" className="button is-danger is-rounded more-info" onClick="<BookNow/>">More Info</a>
						<a href="/maidinfo" className="button is-danger is-rounded" onClick="<BookNow/>">Book Now</a>					
						</div>
				</div>
			</div>
		</div>
	);
}

export default Maidlist