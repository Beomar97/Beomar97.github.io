import React from "react";
import IndexLink from "../utils/indexLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faXing } from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
	return (
		<div
			style={{
				backgroundImage:
					"url(https://live.staticflickr.com/65535/51050689088_c248c92f75_o.jpg)",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "right"
			}}>
			<section className="hero is-fullheight">
				<div className="hero-body">
					<div className="column is-3 is-offset-3">
						<h1 className="title is-size-1 has-text-white">
							Developer
							<span className="has-text-primary">.</span>{" "}
							Student
							<span className="has-text-primary">.</span>{" "}
							Esports Enthusiast
							<span className="has-text-primary">.</span>
						</h1>
						<h2 className="subtitle has-text-white">
							Hi! 👋 I&apos;m{" "}
							<IndexLink to="#about"
									   style="info">
								Marco
							</IndexLink>{" "}
							and welcome to my page.
							<br /> Have a look at my{" "}
							<IndexLink to="#photos"
									   style="warning">
								Photos
							</IndexLink>{" "}
							and&nbsp;
							<IndexLink to="#videos"
									   style="danger">
								Videos
							</IndexLink>
							!<br /> I also like to{" "}
							<IndexLink to="#code"
									   style="success">
								Code
							</IndexLink>{" "}
							on the side!
						</h2>
						<div className="field is-grouped">
							<p className="control">
								<a href="https://github.com/Beomar97">
									<button className="button is-dark">
											<span className="icon fa-lg">
												<FontAwesomeIcon
													icon={faGithub}
												/>
											</span>
										<span>GitHub</span>
									</button>
								</a>
							</p>
							<p className="control">
								<a href="https://www.linkedin.com/in/marco-forster/">
									<button className="button is-link">
											<span className="icon fa-lg">
												<FontAwesomeIcon
													icon={faLinkedin}
												/>
											</span>
										<span>LinkedIn</span>
									</button>
								</a>
							</p>
							<p className="control">
								<a href="https://www.xing.com/profile/Marco_Forster15/">
									<button className="button is-success">
											<span className="icon fa-lg">
												<FontAwesomeIcon
													icon={faXing}
												/>
											</span>
										<span>Xing</span>
									</button>
								</a>
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
