import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import Card from "./Card/Card";
import { CardType } from "./Card/Card";
import classes from "./Carousel.module.scss";

import back from "../Untitled-3.png";
import Overlay from "./Card/Overlay";

const getTypeByIndexes = (currentCardIndex: number, index: number) => {
	if (currentCardIndex <= index - 4) return "left-outer";
	if (currentCardIndex === index - 3) return "left-fourth";
	if (currentCardIndex === index - 2) return "left-third";
	if (currentCardIndex === index - 1) return "left-second";
	if (currentCardIndex === index) return "main";
	if (currentCardIndex === index + 1) return "right-second";
	if (currentCardIndex === index + 2) return "right-third";
	if (currentCardIndex === index + 3) return "right-fourth";

	return "right-outer";
};

const sliceCards = (cards: number[], currentIndex: number) => {
	return cards.filter(
		(c, i) => i >= currentIndex - 6 && i <= currentIndex + 6
	);
};

const Carousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [cards] = useState(Array.from({ length: 130 }).map((c, i) => i));

	const viewCards = sliceCards(cards, currentIndex);

	const turnTo = (nextIndex: number) => {
		if (nextIndex < 0) return 0;
		if (nextIndex >= cards.length) return cards.length - 1;

		setCurrentIndex(nextIndex);
	};

	const onTurnLeft = () => turnTo(currentIndex - 1);
	const onTurnRight = () => turnTo(currentIndex + 1);

	const handlers = useSwipeable({
		onSwipedLeft: onTurnRight,
		onSwipedRight: onTurnLeft,
		preventDefaultTouchmoveEvent: true,
		trackMouse: true,
	});

	return (
		<div className={classes.page}>
			<div className={classes.back}></div>
			<div className={classes.carousel}>
				<div className={classes.slider} {...handlers}>
					{viewCards.map((c, i) => {
						return (
							<Card
								key={c}
								type={getTypeByIndexes(c, currentIndex)}
								onMoveTo={() => turnTo(c)}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Carousel;
