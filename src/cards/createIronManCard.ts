import IronManBack from "../images/iron-man/card.png";
import IronMan from "../images/iron-man/iron-man.png";
import IronManLabel from "../images/iron-man/label.png";

import { CardType, LayerRenderTypeEnums, LayerTypeEnums } from "../types";

export const createIronManCard = (index: number): CardType => {
	return {
		id: `${index}`,
		index: index,
		cardBack: {
			src: IronManBack,
		},
		layers: [
			{
				index: 2,
				type: LayerTypeEnums.PERSON,
				src: IronMan,
				render: LayerRenderTypeEnums.IMAGE,
			},
			{
				index: 3,
				type: LayerTypeEnums.OTHER,
				src: IronManLabel,
			},
		],
	};
};
