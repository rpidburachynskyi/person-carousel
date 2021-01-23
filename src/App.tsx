import React, { useEffect, useState } from "react";
import classes from "./App.module.scss";

import Carousel from "./Carousel";
import { LayerTypeEnums } from "./types";

import CardBack from "./images/example/card.png";
import RedBorder from "./images/example/red_border.png";

import IronManBack from "./images/iron-man/card.png";
import IronMan from "./images/iron-man/iron-man.png";
import IronManLabel from "./images/iron-man/label.png";

import CaptainAmericaBack from "./images/captain-america/card.png";
import CaptainAmerica from "./images/captain-america/captain-america.png";
import CaptainAmericaLabel from "./images/captain-america/label.png";

import ToolPanel from "./ToolPanel";

const createIronManCard = (index: number) => {
	return {
		id: `${index}`,
		index: index,
		cardBack: {
			src: IronManBack,
		},
		layers: [
			{
				index: 2,
				type: LayerTypeEnums.PERSON,
				src: IronMan,
			},
			{
				index: 3,
				type: LayerTypeEnums.OTHER,
				src: IronManLabel,
			},
		],
	};
};

const createCaptainAmericaCard = (index: number) => {
	return {
		id: `${index}`,
		index: index,
		cardBack: {
			src: CaptainAmericaBack,
		},
		layers: [
			{
				index: 2,
				type: LayerTypeEnums.PERSON,
				src: CaptainAmerica,
			},
			{
				index: 3,
				type: LayerTypeEnums.OTHER,
				src: CaptainAmericaLabel,
			},
		],
	};
};

const createExampleCard = (index: number) => {
	return {
		id: `${index}`,
		index: index,
		cardBack: {
			src: CardBack,
		},
		layers: [
			{
				index: 1,
				type: LayerTypeEnums.OTHER,
				src: RedBorder,
			},
		],
	};
};

const createCard = (index: number) => {
	const creators = [
		createIronManCard,
		createCaptainAmericaCard,
		// createExampleCard,
	];

	return creators[Math.floor(Math.random() * creators.length)](index);
};

const createCards = (count: number) => {
	return Array.from({
		length: count,
	}).map((_, index) => {
		return createCard(index);
	});
};

function App() {
	const [slowly, setSlowly] = useState(false);

	const [cards, setCards] = useState(createCards(150));

	return (
		<div className={classes.App}>
			<ToolPanel slowly={slowly} setSlowly={setSlowly} />
			<Carousel slowly={slowly} cards={cards} />
		</div>
	);
}

export default App;
