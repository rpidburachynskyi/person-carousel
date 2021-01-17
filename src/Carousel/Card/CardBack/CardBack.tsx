import { CardBackType, CardTypesEnum } from "../../../types";
import classes from "./CardBack.module.scss";

interface Props {
	type: CardTypesEnum;
	cardBack: CardBackType;
}

const CardBack = ({ type, cardBack }: Props) => {
	return (
		<div
			className={classes.cardBack}
			attr-blur={String(type !== CardTypesEnum.MAIN)}
		>
			<img src={cardBack.src} className={classes.cardImage} />
		</div>
	);
};

export default CardBack;
