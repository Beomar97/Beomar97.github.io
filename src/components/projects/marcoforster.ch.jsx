import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faWindowMaximize } from "@fortawesome/free-solid-svg-icons";

export default function MarcoForsterCh() {
	return (
		<div className="card">
			<div className="card-image">
				<figure className="image is-16by9">
					<img
						src="https://i.imgur.com/B9uSRNP.png"
						alt="Cover for marcoforster.ch"
					/>
				</figure>
			</div>
			<div className="card-content">
				<h1 className="title">marcoforster.ch</h1>
				<h2 className="subtitle">
					My personal website built with Gatsby and Bulma.
				</h2>
				<div className="field is-grouped">
					<p className="control">
						<a href="https://github.com/Beomar97/marcoforster.ch">
							<button className="button is-dark">
								<span className="icon fa-lg">
									<FontAwesomeIcon icon={faGithub} />
								</span>
								<span>GitHub</span>
							</button>
						</a>
					</p>
					<p className="control">
						<a href="https://marcoforster.ch/">
							<button className="button is-link">
								<span className="icon fa-lg">
									<FontAwesomeIcon icon={faWindowMaximize} />
								</span>
								<span>Visit Site</span>
							</button>
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}
