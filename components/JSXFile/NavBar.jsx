import React from "react";
import "../CSSFile/NavBar.css";

function NavBar({image}) {
	return<div className="Header">

		<a className="headerLeft" href="x">
			<img className="Logo" src={image} alt="" />
		</a>
		<section class="headerMid">
			<header>
				<span><a class="" href="a">Model S</a></span>
				<span><a class="" href="a">Model 3</a></span>
				<span><a class="" href="a">Model x</a></span>
				<span><a class="" href="a">Model y</a></span>
				<span><a class="" href="a">Solar Roof</a></span>
				<span><a class="" href="a">Solar Panel</a></span>
			</header>
			</section>
		<div class="headerRight">
		<span><a class="headernavbtn" href="a">Shop</a></span>
		<span><a class="headernavbtn" href="b">Account</a></span>
		<span><a class="headernavbtn" href="c">Menu</a></span>
		</div>


</div>
}

export default NavBar;
