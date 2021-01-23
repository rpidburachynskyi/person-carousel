import { LayerTypeEnums } from "../types";
import CardBack from "./images/example/card.png";
import RedBorder from "./images/example/red_border.png";

export const createExampleCard = (index: number) => {
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
			},
		],
	};
};
