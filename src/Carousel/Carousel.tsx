import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import CardComponent from "./Card";
import classes from "./Carousel.module.scss";

import back from "../Untitled-3.png";
import Overlay from "./Card/Overlay";
import { CardType, CardTypesEnum } from "../types";

const getTypeByIndexes = (
	currentCardIndex: number,
	index: number
): CardTypesEnum => {
	if (currentCardIndex <= index - 4) return CardTypesEnum.LEFT_OUTER;
	if (currentCardIndex === index - 3) return CardTypesEnum.LEFT_FOURTH;
	if (currentCardIndex === index - 2) return CardTypesEnum.LEFT_THIRD;
	if (currentCardIndex === index - 1) return CardTypesEnum.LEFT_SECOND;
	if (currentCardIndex === index) return CardTypesEnum.MAIN;
	if (currentCardIndex === index + 1) return CardTypesEnum.RIGHT_SECOND;
	if (currentCardIndex === index + 2) return CardTypesEnum.RIGHT_THIRD;
	if (currentCardIndex === index + 3) return CardTypesEnum.RIGHT_FOURTH;

	return CardTypesEnum.RIGTH_OUTER;
};

const sliceCards = (cards: CardType[], currentIndex: number) => {
	return cards.filter(
		(c, i) => i >= currentIndex - 6 && i <= currentIndex + 6
	);
};

interface Props {
	slowly: boolean;
	
	cards: CardType[];
}

const Carousel = ({ cards, slowly }: Props) => {
	const [currentIndex, setCurrentIndex] = useState(0);

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
					{viewCards.map((viewCard) => {
						return (
							<CardComponent
								slowly={slowly}
								key={viewCard.id}
								card={viewCard}
								type={getTypeByIndexes(
									viewCard.index,
									currentIndex
								)}
								onMoveTo={() => turnTo(viewCard.index)}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Carousel;
