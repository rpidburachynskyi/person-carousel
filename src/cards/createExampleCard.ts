import { CardType, LayerRenderTypeEnums, LayerTypeEnums } from "../types";
import CardBack from "./images/example/card.png";
import RedBorder from "./images/example/red_border.png";

export const createExampleCard = (index: number): CardType => {
	return {
		id: `${index}`,
		index: index,
		cardBack: {
			src: CardBack,
		},
		layers: [
			{
				index: 1,
				type: LayerTypeEnums.OTHER,
				src: RedBorder,
				render: LayerRenderTypeEnums.IMAGE,
			},
		],
	};
};
