import CaptainAmericaBack from "../images/captain-america/card.png";
import CaptainAmerica from "../images/captain-america/captain-america.png";
import CaptainAmericaLabel from "../images/captain-america/label.png";

import { CardType, LayerRenderTypeEnums, LayerTypeEnums } from "../types";

export const createCaptainAmericaCard = (index: number): CardType => {
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
				render: LayerRenderTypeEnums.IMAGE,
			},
			{
				index: 3,
				type: LayerTypeEnums.OTHER,
				src: CaptainAmericaLabel,
				render: LayerRenderTypeEnums.IMAGE,
			},
		],
	};
};
