import classes from "./ImageLayer.module.scss";
import { ImageLayerType } from "../../../../types";

interface Props {
	layer: ImageLayerType;

	visibility: string;
	slowly: boolean;
}

const ImageLayer = ({ layer, visibility, slowly }: Props) => {
	return (
		<img
			className={classes.image}
			attr-type={layer.type}
			src={layer.src}
			attr-visibility={visibility}
			attr-slowly={String(slowly)}
			alt="layer"
		/>
	);
};

export default ImageLayer;
