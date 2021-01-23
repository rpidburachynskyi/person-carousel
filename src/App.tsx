import React, { useEffect, useState } from "react";
import classes from "./App.module.scss";

import Carousel from "./Carousel";
import { LayerTypeEnums } from "./types";

import CardBack from "./images/example/card.png";
import RedBorder from "./images/example/red_border.png";

import IronManBack from "./images/iron-man/card.png";
import IronMan from "./images/iron-man/iron-man.png";
import IronManLabel from "./images/iron-man/label.png";

import ToolPanel from "./ToolPanel";

const createHiddenPersonCard = (index: number) => {
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
	if (Math.random() > 0.5) {
		return createHiddenPersonCard(index);
	}
	return createExampleCard(index);
};

const createCards = (
	count: number,
	{ onlyHiddenPersonCard = false }: { onlyHiddenPersonCard?: boolean }
) => {
	return Array.from({
		length: count,
	}).map((_, index) => {
		if (onlyHiddenPersonCard) return createHiddenPersonCard(index);

		return createCard(index);
	});
};

function App() {
	const [slowly, setSlowly] = useState(false);
	const [onlyHiddenPersonCard, setOnlyHiddenPersonCard] = useState(false);

	const [cards, setCards] = useState(
		createCards(150, { onlyHiddenPersonCard })
	);

	useEffect(() => {
		setCards(createCards(150, { onlyHiddenPersonCard }));
		setCards(createCards(150, { onlyHiddenPersonCard }));
	}, [onlyHiddenPersonCard]);

	return (
		<div className={classes.App}>
			<ToolPanel
				slowly={slowly}
				setSlowly={setSlowly}
				onlyHiddenPersonCard={onlyHiddenPersonCard}
				setOnlyHiddenPersonCard={setOnlyHiddenPersonCard}
			/>
			<Carousel slowly={slowly} cards={cards} />
		</div>
	);
}

export default App;
