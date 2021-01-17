import { ReactElement } from "react";
import { LayerTypeEnums } from "../../../types";
import classes from "./Overlay.module.scss";

import { LayerProps } from "../Layer/Layer";

interface Props {
	type: string;

	layers: ReactElement<LayerProps>[];

	isMain: boolean;
}

const Overlay = ({ type, layers, isMain }: Props) => {
	const personLayer = layers.find(
		(l) => l.props.layer.type === LayerTypeEnums.PERSON
	);
	const otherLayers = layers.filter(
		(l) => l.props.layer.type === LayerTypeEnums.OTHER
	);

	const _layers = (() => {
		if (isMain)
			return [personLayer, ...otherLayers].sort((a: any, b: any) => {
				return a.props.index - b.props.index;
			});

		return [personLayer];
	})();

	return (
		<div className={classes.overlay}>
			<div
				className={classes.layers}
				attr-type={type}
				attr-visibility={!isMain ? "slice" : "full"}
				attr-blur={String(!isMain)}
			>
				{_layers}
			</div>
		</div>
	);
};

export default Overlay;
