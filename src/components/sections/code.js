import React from "react";
import PropTypes from "prop-types";
import Layout from "../utils/layout";
import Anchor from "../utils/anchor";
import SectionTitle from "../utils/sectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import IssueTracker from "../projects/issue-tracker";
import MarcoForsterCh from "../projects/marcoforster.ch";
import RaceTrack from "../projects/racetrack";

Code.propTypes = {
	data: PropTypes.any
};

export default function Code() {
	return (
		<Layout>
			<Anchor id="code" />
			<div className="container">
				<SectionTitle>
					code(
					<FontAwesomeIcon
						className="has-text-primary"
						icon={faCode}
					/>
					)
				</SectionTitle>
				<div className="columns">
					<div className="column">
						<MarcoForsterCh />
					</div>
					<div className="column">
						<RaceTrack />
					</div>
					<div className="column">
						<IssueTracker />
					</div>
				</div>
			</div>
		</Layout>
	);
}
