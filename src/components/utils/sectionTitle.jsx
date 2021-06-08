import React from "react";
import PropTypes from "prop-types";

SectionTitle.propTypes = {
	children: PropTypes.array
};

export default function SectionTitle(props) {
	return (
		<h1
			className="title is-size-2 has-text-centered pb-5">
			{props.children}
			<span className="has-text-primary">.</span>
		</h1>
	);
}
