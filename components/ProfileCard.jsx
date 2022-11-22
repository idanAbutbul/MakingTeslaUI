import React from "react";

function ProfileCard({ image, title }) {
	return (
		<>
			<div>
				<h1>{title}</h1>
				<img src={image} alt="" />
			</div>
		</>
	);
}

export default ProfileCard;
