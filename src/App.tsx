import React, { useState } from "react";
import classes from "./App.module.scss";
import { createCaptainAmericaCard } from "./cards/createCaptainAmericaCard";
import { createIronManCard } from "./cards/createIronManCard";
import { createSpiderManCard } from "./cards/createSpiderManCard";

import Carousel from "./Carousel";

import ToolPanel from "./ToolPanel";

const createCard = (index: number) => {
	const creators = [
		createIronManCard,
		createCaptainAmericaCard,
		createSpiderManCard,
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

	const [cards] = useState(createCards(150));

	return (
		<div className={classes.App}>
			<ToolPanel slowly={slowly} setSlowly={setSlowly} />
			<Carousel slowly={slowly} cards={cards} />
		</div>
	);
}

export default App;
