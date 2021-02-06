import Back from "../images/hulk/card.png";
import Hulk from "../images/hulk/hulk.png";
import Label from "../images/hulk/label.png";

import { CardType, LayerRenderTypeEnums, LayerTypeEnums } from "../types";

export const createHulk = (index: number): CardType => {
	return {
		id: `${index}`,
		index: index,
		cardBack: {
			src: Back,
		},
		layers: [
			{
				index: 2,
				type: LayerTypeEnums.PERSON,
				src: Hulk,
				render: LayerRenderTypeEnums.IMAGE,
			},
			{
				index: 3,
				type: LayerTypeEnums.OTHER,
				src: Label,
				render: LayerRenderTypeEnums.IMAGE,
			},
		],
	};
};
