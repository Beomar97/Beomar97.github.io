import React, { useState } from "react";
import Layout from "../utils/layout";
import Gallery from "../gallery";
import SectionTitle from "../utils/sectionTitle";
import Anchor from "../utils/anchor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlickr } from "@fortawesome/free-brands-svg-icons";

export default function Photos() {
	const [key, setKey] = useState("ch");

	let album;
	if (key === "ch") {
		album = {
			title: "Switzerland 🇨🇭 (2020)",
			pictures: [
				"https://live.staticflickr.com/65535/51050689088_f1f1745d06_k.jpg",
				"https://live.staticflickr.com/65535/51050688953_3bace66690_k.jpg",
				"https://live.staticflickr.com/65535/51051498397_5dd3a50a5e_k.jpg",
				"https://live.staticflickr.com/65535/51051498382_0ccb98ae06_k.jpg",
				"https://live.staticflickr.com/65535/51051498312_53e2a23937_k.jpg",
				"https://live.staticflickr.com/65535/51050688658_50b8be86ca_k.jpg"
			]
		};
	} else if (key === "np") {
		album = {
			title: "Nepal 🇳🇵 (2019)",
			pictures: [
				"https://live.staticflickr.com/65535/51062965158_eda3f02f60_k.jpg",
				"https://live.staticflickr.com/65535/51063676151_ab5a064f74_k.jpg",
				"https://live.staticflickr.com/65535/51063765057_07d4931d9e_k.jpg",
				"https://live.staticflickr.com/65535/51063677436_7e16687dfe_k.jpg",
				"https://live.staticflickr.com/65535/51063676981_c09df41486_k.jpg",
				"https://live.staticflickr.com/65535/51062966523_f86074e5d9_k.jpg"
			]
		};
	} else {
		album = {
			title: "New Zealand 🇳🇿 (2018)",
			pictures: [
				"https://live.staticflickr.com/65535/51063796651_0bfd3ab654_k.jpg",
				"https://live.staticflickr.com/65535/51063797816_590657a1cd_k.jpg",
				"https://live.staticflickr.com/65535/51063796836_72352f26d9_k.jpg",
				"https://live.staticflickr.com/65535/51063086898_8bede9943b_k.jpg",
				"https://live.staticflickr.com/65535/51063086293_9fd3560753_k.jpg",
				"https://live.staticflickr.com/65535/51063797701_f7dbfeaf56_k.jpg"
			]
		};
	}

	return (
		<Layout>
			<Anchor id="photos" />
			<div className="container">
				<SectionTitle>
					Photos
				</SectionTitle>
				<div className="tabs is-centered is-fullwidth">
					<ul>
						<li className={key === "ch" ? "is-active" : ""}>
							<a onClick={() => setKey("ch")}>
								Switzerland 🇨🇭 (2020)
							</a>
						</li>
						<li className={key === "np" ? "is-active" : ""}>
							<a onClick={() => setKey("np")}>Nepal 🇳🇵 (2019)</a>
						</li>
						<li className={key === "nz" ? "is-active" : ""}>
							<a onClick={() => setKey("nz")}>
								New Zealand 🇳🇿 (2018)
							</a>
						</li>
					</ul>
				</div>
				<Gallery album={album} />
				<div className="content pt-2">
					<a href="https://www.flickr.com/photos/192601791@N08/">
						<button className="button is-small is-dark is-inverted">
							<span className="icon fa-lg">
								<FontAwesomeIcon icon={faFlickr} />
							</span>
							<span>more on Flickr</span>
						</button>
					</a>
				</div>
			</div>
		</Layout>
	);
}
