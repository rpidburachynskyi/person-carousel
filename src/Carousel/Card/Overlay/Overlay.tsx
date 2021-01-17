import { cloneElement, ReactElement } from "react";
import classes from "./Overlay.module.scss";

interface Props {
	type: string;

	layers: ReactElement<{ type: string; index: number }>[];

	isMain: boolean;
}

const Overlay = ({ type, layers, isMain }: Props) => {
	const card = layers.find((l) => l.props.type === "card");
	const personLayer = layers.find((l) => l.props.type === "person");
	const otherLayers = layers.filter((l) => l.props.type === "other");

	const _layers = (() => {
		if (isMain)
			return [personLayer, ...otherLayers].sort((a: any, b: any) => {
				return a.props.index - b.props.index;
			});

		return [personLayer];
	})();

	return (
		<div key={type} className={classes.overlay}>
			{card}
			<div
				className={classes.layers}
				attr-type={type}
				key={type}
				attr-visibility={!isMain ? "slice" : "full"}
			>
				{_layers}
			</div>
		</div>
	);
};

export default Overlay;
