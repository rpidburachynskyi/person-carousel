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
		<Layer
			type="person"
			src={YA}
			index={1}
			visibility={type !== "main" ? "slice" : "full"}
		/>,
		<Layer
			type="other"
			src={ROS}
			index={2}
			visibility={type !== "main" ? "slice" : "full"}
		/>,
		<Layer
			type="other"
			src={TIK}
			index={0}
			visibility={type !== "main" ? "slice" : "full"}
		/>,
	];

	return (
		<div attr-type={type} onClick={onMoveTo} className={classes.card}>
			<div
				className={classes.cardBack}
				attr-blur={String(type !== "main")}
			>
				<img src={BCardBack} className={classes.cardImage} />
			</div>
			<Overlay type={type} layers={layers} isMain={type === "main"} />
		</div>
	);
};

export default Card;
