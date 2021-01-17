import classes from "./Card.module.scss";
import Overlay from "./Overlay";

import Layer from "./Layer";
import { CardType, CardTypesEnum } from "../../types";
import CardBack from "./CardBack";

interface Props {
	slowly: boolean;

	type: CardTypesEnum;
	card: CardType;

	onMoveTo: () => void;
}

const Card = ({ slowly, type, card, onMoveTo }: Props) => {
	const layers = card.layers.map((layer) => (
		<Layer
			layer={layer}
			visibility={type !== "main" ? "slice" : "full"}
			slowly={slowly}
		/>
	));

	return (
		<div
			attr-slowly={String(slowly)}
			attr-type={type}
			onClick={onMoveTo}
			className={classes.card}
		>
			<CardBack type={type} cardBack={card.cardBack} slowly={slowly} />
			<Overlay
				slowly={slowly}
				type={type}
				layers={layers}
				isMain={type === "main"}
			/>
		</div>
	);
};

export default Card;
