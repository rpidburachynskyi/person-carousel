import { LayerType } from "../../../types";
import classes from "./Layer.module.scss";

export interface LayerProps {
	layer: LayerType;

	visibility: string;
}

const Layer = ({ layer, visibility }: LayerProps) => {
	return (
		<img
			className={classes.layer}
			attr-type={layer.type}
			src={layer.src}
			attr-visibility={visibility}
		/>
	);
};

export default Layer;
