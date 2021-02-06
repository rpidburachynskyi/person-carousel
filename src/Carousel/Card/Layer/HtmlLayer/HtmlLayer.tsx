import classes from "./HtmlLayer.module.scss";
import { HtmlLayerType } from "../../../../types";

interface Props {
	layer: HtmlLayerType;

	visibility: string;
}

const HtmlLayer = ({ layer, visibility }: Props) => {
	return (
		<div
			className={classes.htmlLayer}
			dangerouslySetInnerHTML={{
				__html: layer.html
					.replace("{{layerType}}", layer.type)
					.replace("{{visibility}}", visibility),
			}}
		></div>
	);
};

export default HtmlLayer;
