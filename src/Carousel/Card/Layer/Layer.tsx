import { LayerType } from "../../../types";
import classes from "./Layer.module.scss";

interface Props {
	layer: LayerType;

	visibility: string;
}

const Layer = ({ layer, visibility }: Props) => {
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
