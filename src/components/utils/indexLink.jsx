import React, { useState } from "react";
import PropTypes from "prop-types";

IndexLink.propTypes = {
	children: PropTypes.string,
	to: PropTypes.string,
	style: PropTypes.string
};

export default function IndexLink(props) {
	const [hovered, setHovered] = useState(false);
	const toggleHovered = () => setHovered(!hovered);

	return (
		<a
			className={
				hovered
					? `has-text-${props.style} has-background-${props.style}-light`
					: `has-text-${props.style}`
			}
			href={props.to}
			onMouseEnter={toggleHovered}
			onMouseLeave={toggleHovered}>
			{props.children}
		</a>
	);
}
