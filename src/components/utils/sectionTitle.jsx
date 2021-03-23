import React from "react";
import PropTypes from "prop-types";

SectionTitle.propTypes = {
	children: PropTypes.array
};

export default function SectionTitle(props) {
	return (
		<h1
			className="title is-size-2 has-text-centered pb-5"
			style={{ fontFamily: "courier" }}>
			<span className="has-text-primary">.</span>
			{props.children}
		</h1>
	);
}
