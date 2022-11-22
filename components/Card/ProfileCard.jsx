import React from "react";
import "./Card.css"
function ProfileCard({ image, title }) {
	return (
		<>
			<div className="card">
				<h1>{title}</h1>
				<img src={image} alt="" />
			</div>
		</>
	);
}

export default ProfileCard;
