import classes from "./Card.module.scss";
import Overlay from "./Overlay";

import YA from "./Overlay/images/YA.png";
import ROS from "./Overlay/images/ROS.png";
import TIK from "./Overlay/images/TIK.png";
import Layer from "./Layer";

export type CardType =
	| "main"
	| "left-second"
	| "left-third"
	| "left-fourth"
	| "left-outer"
	| "right-second"
	| "right-third"
	| "right-fourth"
	| "right-outer";

interface Props {
	type: CardType;
	onMoveTo: () => void;
}

const Card = ({ type, onMoveTo }: Props) => {
	const layers = [
		<Layer type="person" src={YA} index={1} />,
		<Layer type="other" src={ROS} index={2} />,
		<Layer type="other" src={TIK} index={0} />,
	];

	return (
		<div attr-type={type} onClick={onMoveTo} className={classes.card}>
			<img
				src="https://i.pinimg.com/originals/83/f9/37/83f937b69f30bb886ab8a03390da6771.jpg"
				className={classes.cardImage}
			/>
			<Overlay type={type} layers={layers} isMain={type === "main"} />
		</div>
	);
};

export default Card;
