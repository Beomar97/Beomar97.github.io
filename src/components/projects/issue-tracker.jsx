import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

export default function IssueTracker() {
	return (
		<div className="card">
			<div className="card-image">
				<figure className="image is-16by9">
					<img
						src="https://i.imgur.com/mILT9fD.png"
						alt="Cover for issue-tracker"
					/>
				</figure>
			</div>
			<div className="card-content">
				<h1 className="title">issue-tracker</h1>
				<h2 className="subtitle">
					Simple Issue Tracker done with Riot v3.
				</h2>
				<div className="field is-grouped">
					<p className="control">
						<a href="https://github.com/Beomar97/issue-tracker">
							<button className="button is-dark">
								<span className="icon fa-lg">
									<FontAwesomeIcon icon={faGithub} />
								</span>
								<span>GitHub</span>
							</button>
						</a>
					</p>
					<p className="control">
						<a href="http://issue-tracker-reloaded.herokuapp.com/">
							<button
								className="button has-text-white"
								style={{
									backgroundColor: "#79589F"
								}}>
								<span className="icon fa-lg">
									<FontAwesomeIcon icon={faCloud} />
								</span>
								<span>Heroku Demo</span>
							</button>
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}
