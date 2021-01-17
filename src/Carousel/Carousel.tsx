import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import Card from "./Card/Card";
import { CardType } from "./Card/Card";
import classes from "./Carousel.module.scss";

import back from "../Untitled-3.png";
import Overlay from "./Card/Overlay";

const Carousel = () => {
	const [index, setIndex] = useState(0);
	const [cards] = useState(Array.from({ length: 130 }).map((c, i) => i));

	const viewCards = cards
		.filter((c, i) => i >= index - 15)
		.filter((c, i) => i <= 50);

	const handlers = useSwipeable({
		onSwipedLeft: () => setIndex((index) => index + 1),
		onSwipedRight: () => setIndex((index) => index - 1),
		preventDefaultTouchmoveEvent: true,
		trackMouse: true,
	});

	return (
		<div className={classes.page}>
			<div
				className={classes.back}
				// style={{ background: `url(${back})` }}
			></div>
			<div className={classes.carousel}>
				<div className={classes.slider} {...handlers}>
					{viewCards.map((c, i) => {
						let type: CardType;
						if (c <= index - 4) type = "left-outer";
						else if (c === index - 3) type = "left-fourth";
						else if (c === index - 2) type = "left-third";
						else if (c === index - 1) type = "left-second";
						else if (c === index) type = "main";
						else if (c === index + 1) type = "right-second";
						else if (c === index + 2) type = "right-third";
						else if (c === index + 3) type = "right-fourth";
						else type = "right-outer";
						return (
							<Card
								key={c}
								type={type}
								onMoveTo={() => setIndex(c)}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Carousel;
