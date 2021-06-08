import React from "react";
import Layout from "../utils/layout";
import SectionTitle from "../utils/sectionTitle";
import Anchor from "../utils/anchor";

export default function About() {
	return (
		<Layout>
			<Anchor id="about" />
			<div className="container">
				<SectionTitle>
					About
				</SectionTitle>
				<div className="columns">
					<div className="column">
						<figure className="image">
							<img
								src="https://live.staticflickr.com/65535/51065373466_3166f82c5e_b.jpg"
								alt="Me at Thorung La Pass, Nepal"
							/>
						</figure>
					</div>
					<div className="column">
						<div className="content has-text-justified">
							Hi everybody! ✌️ The name&apos;s Marco and I&apos;m
							a big newbie when it comes to coding. I am currently
							studying Computer Science 👨‍🎓 at the Zurich
							University of Applied Sciences and am also working
							as a Junior Software Engineer at the moment. I was
							born and raised in Zurich 🇨🇭 and was fortunate
							enough to get into computers at a very young age.
							After having been in the field of systems
							engineering for the past 4+ years, I am starting to
							go down the rabbit hole 🐰 of software engineering
							🧑🏼‍💻. Privately I am a big fan of all things space
							🛰️ and esports 🎮.
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
