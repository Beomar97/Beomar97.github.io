import React from "react";
import Layout from "../utils/layout";
import SectionTitle from "../utils/sectionTitle";
import Anchor from "../utils/anchor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Videos() {
	return (
		<Layout>
			<Anchor id="videos" />
			<div className="container">
				<SectionTitle>
					videos(
					<FontAwesomeIcon
						className="has-text-primary"
						icon={faYoutube}
					/>
					)
				</SectionTitle>
				<div className="columns">
					<div className="column">
						<figure className="image is-16by9">
							<iframe
								className="has-ratio"
								src="https://www.youtube.com/embed/H_w5y_6e-Gs"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							/>
						</figure>
					</div>
					<div className="column">
						<div className="content">
							<h1 className="title">
								Annapurna Circuit, Nepal🇳🇵
							</h1>
							<h2 className="subtitle is-6">
								Trekking through the Himmalayan Highlands for
								over ten days 🏔
							</h2>
							<p>
								Hiked more than 160km through the incredible and
								beautifully stunning Annapurna region with two
								friends in August 2019. Watch how our journey
								all starts in the capital of Kathmandu, and
								follow us through our adventure of trying to
								complete the mighty Annapurna Circuit and its
								highest point at Thorung La pass
								(5416m/17&apos;769ft).
							</p>
							<div className="tags">
								<span className="tag">Hiking</span>
								<span className="tag">Adventure</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
