import React, { useState } from "react";
import classes from "./App.module.scss";
import { createBlackWidowCard } from "./cards/createBlackWidow";
import { createCaptainAmericaCard } from "./cards/createCaptainAmericaCard";
import { createHulk } from "./cards/createHulk";
import { createIronManCard } from "./cards/createIronManCard";
import { createSpiderManCard } from "./cards/createSpiderManCard";

import Carousel from "./Carousel";

import ToolPanel from "./ToolPanel";
import { CardType } from "./types";

const createCard = (index: number): CardType => {
	const creators = [
		createIronManCard,
		createCaptainAmericaCard,
		createSpiderManCard,
		createBlackWidowCard,
		createHulk,
	];

	return creators[index % creators.length](index);
};

const createCards = (count: number): CardType[] => {
	return Array.from({
		length: count,
	}).map((_, index) => {
		return createCard(index);
	});
};

function App() {
	const [slowly, setSlowly] = useState(false);

	const [cards] = useState(createCards(150));

	return (
		<div className={classes.App}>
			<ToolPanel slowly={slowly} setSlowly={setSlowly} />
			<Carousel slowly={slowly} cards={cards} />
		</div>
	);
}

export default App;
