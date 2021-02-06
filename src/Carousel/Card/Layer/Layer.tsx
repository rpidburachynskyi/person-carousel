import { LayerRenderTypeEnums, LayerType } from "../../../types";
import HtmlLayer from "./HtmlLayer";
import ImageLayer from "./ImageLayer";
import classes from "./Layer.module.scss";

export interface LayerProps {
	layer: LayerType;

	visibility: string;
	slowly: boolean;
}

const Layer = ({ layer, visibility, slowly }: LayerProps) => {
	return (
		<div
			className={classes.layer}
			attr-type={layer.type}
			attr-visibility={visibility}
			attr-slowly={String(slowly)}
		>
			{layer.render === LayerRenderTypeEnums.IMAGE && (
				<ImageLayer
					layer={layer}
					visibility={visibility}
					slowly={slowly}
				/>
			)}
			{layer.render === LayerRenderTypeEnums.HTML && (
				<HtmlLayer layer={layer} visibility={visibility} />
			)}
		</div>
	);
};

export default Layer;
