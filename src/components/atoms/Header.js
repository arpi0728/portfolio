import React, { useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
	const location = useLocation();
	const menuitems = [
		{
			name: "_hello",
			key: 1,
		},
		{
			name: "_about-me",
			key: 2,
		},
		{
			name: "_projects",
			key: 3,
		},
	];

	useEffect(() => {
		document.title = `Arpit Jangir | ${location.pathname.slice(1)}`;
		const activeRoute = document.getElementById(
			`${location.pathname.slice(1)}`
		);
		menuitems.map((item) => {
			document.getElementById(`${item.name}`).classList.remove("active-hover");
		});
		if (activeRoute) {
			activeRoute.classList.add("active-hover");
		}
		if (location.pathname === "/_contact") {
			document.getElementById("_contact").classList.add("active-hover");
		} else {
			document.getElementById("_contact").classList.remove("active-hover");
		}
	}, [location]);

	useEffect(() => {
		const activeDoc = document.getElementById("_hello");
		activeDoc.classList.add("active-hover");
		const cursor = document.getElementById("cursor");
		window.addEventListener("mousemove", (event) => {
			cursor.style.top = event.pageY - (window.innerHeight * 15) / 100 + "px";
			cursor.style.left = event.pageX - (window.innerHeight * 15) / 100 + "px";
		});
	}, []);
	return (
		<>
			<span id="cursor" className="cursor"></span>
			<div className="header-component row">
				<Link to="_hello" className="header-logo col-3">
					arpit-jangir
				</Link>
				<div className="header-items row col-6">
					{menuitems.map((m, i) => {
						return (
							<Link
								key={i}
								to={m.name}
								id={m.name}
								className="menu-items-navbar col-2"
							>
								{m.name}
							</Link>
						);
					})}
				</div>
				<div className=" col-2"></div>
				<Link to="_contact" id="_contact" className="header-contact col-1">
					_contact
				</Link>
			</div>
		</>
	);
}

export default Header;
