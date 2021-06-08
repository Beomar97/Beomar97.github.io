import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";

export default function RaceTrack() {
	return (
		<div className="card">
			<div className="card-image">
				<figure className="image is-16by9">
					<img
						src="https://i.imgur.com/yc1eTDG.jpg"
						alt="Cover for RaceTrack"
					/>
				</figure>
			</div>
			<div className="card-content">
				<h1 className="title">RaceTrack</h1>
				<h2 className="subtitle">
					A Java implementation of the paper & pencil game
					&apos;Racetrack&apos;.
				</h2>
				<div className="field is-grouped">
					<p className="control">
						<a href="https://github.zhaw.ch/PathFinder/PSIT3-FS20-IT18ta_WIN-Team5">
							<button className="button is-dark">
								<span className="icon fa-lg">
									<FontAwesomeIcon icon={faGithub} />
								</span>
								<span>GitHub@ZHAW</span>
							</button>
						</a>
					</p>
					<div className="field has-addons">
						<p className="control">
							<a href="http://dublin.zhaw.ch/~tsengmar/package/RaceTrack_Windows64.zip">
								<button
									className="button is-dark is-outlined"
									aria-label="Download for Windows">
									<span className="icon fa-lg">
										<FontAwesomeIcon icon={faWindows} />
									</span>
								</button>
							</a>
						</p>
						<p className="control">
							<a href="http://dublin.zhaw.ch/~tsengmar/package/RaceTrack%201.0.dmg">
								<button
									className="button is-dark is-outlined"
									aria-label="Download for macOS">
									<span className="icon is-small">
										<span className="icon fa-lg">
											<FontAwesomeIcon icon={faApple} />
										</span>
									</span>
								</button>
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
