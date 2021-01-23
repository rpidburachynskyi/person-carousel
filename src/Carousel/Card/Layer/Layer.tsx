import { LayerType } from "../../../types";
import classes from "./Layer.module.scss";

export interface LayerProps {
	layer: LayerType;

	visibility: string;
	slowly: boolean;
}

const Layer = ({ layer, visibility, slowly }: LayerProps) => {
	return (
		<img
			className={classes.layer}
			attr-type={layer.type}
			src={layer.src}
			attr-visibility={visibility}
			attr-slowly={String(slowly)}
			alt="layer"
		/>
	);
};

export default Layer;
