import React from "react";
import PropTypes from "prop-types";
import Picture from "../components/picture";

Gallery.propTypes = {
	album: PropTypes.shape({
		title: PropTypes.string,
		pictures: PropTypes.array
	})
};

export default function Gallery(props) {
	const table = getItems(props);

	return (
		<div className="container">
			<h1 className="title is-centered">{props.album.title}</h1>
			{table}
		</div>
	);
}

const getItems = (props) => {
	const items = [];
	const nrOfColumnsPerRow = 3;

	const numberOfRows = Math.ceil(
		props.album.pictures.length / nrOfColumnsPerRow
	);
	for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
		items.push(
			<div key={rowIndex} className="columns">
				<div className="column">
					<Picture
						src={
							props.album.pictures[
								rowIndex * nrOfColumnsPerRow + 0
							]
						}
					/>
				</div>
				<div className="column">
					<Picture
						src={
							props.album.pictures[
								rowIndex * nrOfColumnsPerRow + 1
							]
						}
					/>
				</div>
				<div className="column">
					<Picture
						src={
							props.album.pictures[
								rowIndex * nrOfColumnsPerRow + 2
							]
						}
					/>
				</div>
			</div>
		);
	}

	return items;
};
