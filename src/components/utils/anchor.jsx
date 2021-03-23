import React from "react";
import PropTypes from "prop-types";

Anchor.propTypes = {
	id: PropTypes.string
};

export default function Anchor(props) {
	return <div id={props.id} className="container my-6 py-2" />;
}
