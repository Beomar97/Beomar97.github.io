import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faXing } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
	return (
		<nav
			className="navbar is-fixed-top"
			role="navigation"
			aria-label="main navigation">
			<div className="navbar-brand">
				<Link className="navbar-item" to="/">
					<h1 className="title has-text-primary is-uppercase">
						Forster
					</h1>
				</Link>
				<a
					role="button"
					className="navbar-burger"
					aria-label="menu"
					aria-expanded="false"
					data-target="navbar">
					<span aria-hidden="true" />
					<span aria-hidden="true" />
					<span aria-hidden="true" />
				</a>
			</div>
			<div id="navbar" className="navbar-menu">
				<div className="navbar-start">
					<a className="navbar-item" href="#about">
						About
					</a>
					<a className="navbar-item" href="#photos">
						Photos
					</a>
					<a className="navbar-item" href="#videos">
						Videos
					</a>
					<a className="navbar-item" href="#code">
						Coding
					</a>
				</div>

				<div className="navbar-end">
					<a
						className="navbar-item"
						aria-label="GitHub Link"
						href="https://github.com/Beomar97">
						<span className="icon fa-lg">
							<FontAwesomeIcon icon={faGithub} />
						</span>
					</a>
					<a
						className="navbar-item"
						aria-label="LinkedIn Link"
						href="https://www.linkedin.com/in/marco-forster/">
						<span className="icon fa-lg">
							<FontAwesomeIcon icon={faLinkedin} />
						</span>
					</a>
					<a
						className="navbar-item"
						aria-label="Xing Link"
						href="https://www.xing.com/profile/Marco_Forster15/">
						<span className="icon fa-lg">
							<FontAwesomeIcon icon={faXing} />
						</span>
					</a>
				</div>
			</div>
		</nav>
	);
}
