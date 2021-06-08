import React, { useState } from "react";
import PropTypes from "prop-types";

Picture.propTypes = {
	src: PropTypes.string,
	alt: PropTypes.string
};

export default function Picture(props) {
	const [clicked, setClicked] = useState(false);
	const toggleClicked = () => setClicked(!clicked);

	return (
		<div className="container">
			<figure className="image is-3by2">
				<img
					src={props.src}
					alt="Gallery Image"
					onClick={toggleClicked}
				/>
			</figure>
			<div className={clicked ? "modal is-active" : "modal"}>
				<div className="modal-background"
					 onClick={toggleClicked} />
				<div className="modal-content">
					<img src={props.src}
						 alt="Modal of Gallery Image" />
				</div>
				<button
					className="modal-close is-large"
					aria-label="close"
					onClick={toggleClicked} />
			</div>
		</div>
	);
}
