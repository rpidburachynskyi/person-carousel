import Back from "../images/hulk/card.png";
import Hulk from "../images/hulk/hulk.png";
import Label from "../images/hulk/label.png";

import { LayerTypeEnums } from "../types";

export const createHulk = (index: number) => {
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
			},
			{
				index: 3,
				type: LayerTypeEnums.OTHER,
				src: Label,
			},
		],
	};
};
