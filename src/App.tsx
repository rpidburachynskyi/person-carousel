import React, { useState } from "react";
import Carousel from "./Carousel";
import { CardType, LayerTypeEnums } from "./types";

import CardBack from "./images/example/card.png";
import RedBorder from "./images/example/red_border.png";

import HiddenCardBack from "./images/hidden/card.png";
import HiddenPerson from "./images/hidden/person.png";
import HiddenFront from "./images/hidden/front.png";
import HiddenBack from "./images/hidden/back.png";
import ToolPanel from "./ToolPanel";

const createCard: (index: number) => CardType = (index: number) => {
	if (Math.random() > 0.5) {
		return {
			id: `${index}`,
			index: index,
			cardBack: {
				src: HiddenCardBack,
			},
			layers: [
				{
					index: 1,
					type: LayerTypeEnums.OTHER,
					src: HiddenBack,
				},
				{
					index: 2,
					type: LayerTypeEnums.PERSON,
					src: HiddenPerson,
				},
				{
					index: 3,
					type: LayerTypeEnums.OTHER,
					src: HiddenFront,
				},
			],
		};
	}
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

function App() {
	const [cards, setCards] = useState(
		Array.from({
			length: 150,
		}).map((_, index) => createCard(index))
	);

	const [slowly, setSlowly] = useState(false);

	return (
		<div>
			<ToolPanel slowly={slowly} setSlowly={setSlowly} />
			<Carousel slowly={slowly} cards={cards} />
		</div>
	);
}

export default App;
