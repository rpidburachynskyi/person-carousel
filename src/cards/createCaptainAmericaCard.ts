import CaptainAmericaBack from "../images/captain-america/card.png";
import CaptainAmerica from "../images/captain-america/captain-america.png";
import CaptainAmericaLabel from "../images/captain-america/label.png";

import { LayerTypeEnums } from "../types";

export const createCaptainAmericaCard = (index: number) => {
	return {
		id: `${index}`,
		index: index,
		cardBack: {
			src: CaptainAmericaBack,
		},
		layers: [
			{
				index: 2,
				type: LayerTypeEnums.PERSON,
				src: CaptainAmerica,
			},
			{
				index: 3,
				type: LayerTypeEnums.OTHER,
				src: CaptainAmericaLabel,
			},
		],
	};
};
