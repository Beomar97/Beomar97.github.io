import React from "react";
import PropTypes from "prop-types";

Layout.propTypes = {
	children: PropTypes.node
};

export default function Layout({ children }) {
	return (
		<section className="section">
			<div className="column is-three-fifths is-offset-one-fifth">
				{children}
			</div>
		</section>
	);
}
