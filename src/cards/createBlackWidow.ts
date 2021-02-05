import Back from "../images/black-widow/card.png";
import BlackWidow from "../images/black-widow/black-widow.png";
import Ship from "../images/black-widow/ship.png";
import Label from "../images/black-widow/label.png";

import { LayerTypeEnums } from "../types";

export const createBlackWidowCard = (index: number) => {
	return {
		id: `${index}`,
		index: index,
		cardBack: {
			src: Back,
		},
		layers: [
			{
				index: 1,
				type: LayerTypeEnums.OTHER,
				src: Ship,
			},
			{
				index: 2,
				type: LayerTypeEnums.PERSON,
				src: BlackWidow,
			},
			{
				index: 3,
				type: LayerTypeEnums.OTHER,
				src: Label,
			},
		],
	};
};
