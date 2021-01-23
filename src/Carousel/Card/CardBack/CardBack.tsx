import { CardBackType, CardTypesEnum } from "../../../types";
import classes from "./CardBack.module.scss";

interface Props {
	type: CardTypesEnum;
	cardBack: CardBackType;

	slowly: boolean;
}

const CardBack = ({ type, cardBack, slowly }: Props) => {
	return (
		<div
			className={classes.cardBack}
			attr-blur={String(type !== CardTypesEnum.MAIN)}
			attr-slowly={String(slowly)}
		>
			<img src={cardBack.src} className={classes.cardImage} alt="card" />
		</div>
	);
};

export default CardBack;
