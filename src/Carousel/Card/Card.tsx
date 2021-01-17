import classes from "./Card.module.scss";
import Overlay from "./Overlay";

import Layer from "./Layer";
import { CardType, CardTypesEnum } from "../../types";
import CardBack from "./CardBack";

interface Props {
	type: CardTypesEnum;
	card: CardType;

	onMoveTo: () => void;
}

const Card = ({ type, card, onMoveTo }: Props) => {
	const layers = card.layers.map((layer) => (
		<Layer layer={layer} visibility={type !== "main" ? "slice" : "full"} />
	));

	return (
		<div attr-type={type} onClick={onMoveTo} className={classes.card}>
			<CardBack type={type} cardBack={card.cardBack} />
			<Overlay type={type} layers={layers} isMain={type === "main"} />
		</div>
	);
};

export default Card;
