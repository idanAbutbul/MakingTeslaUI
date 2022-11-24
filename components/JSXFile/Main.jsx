import React from "react";
import "../CSSFile/Main.css";

function ProfileCard({ image ,title,subtitle}) {
	return (
		<>
		<div className="center">
				<h1 className="title">{title}</h1>
				<a href="x"className="subtitle">{subtitle}</a>
		</div>
			<section className="section">
				<img class="TIMG" src={image} alt="Tesla Img" />
			</section>
		</>
	);
}

export default ProfileCard;
