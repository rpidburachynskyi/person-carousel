export enum LayerTypeEnums {
	PERSON = "person",
	OTHER = "other",
}

export type CardBackType = {
	src: string;
};

export type LayerType = {
	type: LayerTypeEnums;
	src: string;
	index: number;
};

export type CardType = {
	id: string;

	index: number;

	cardBack: CardBackType;
	layers: LayerType[];
};

export enum CardTypesEnum {
	LEFT_OUTER = "left-outer",
	LEFT_FOURTH = "left-fourth",
	LEFT_THIRD = "left-third",
	LEFT_SECOND = "left-second",
	MAIN = "main",
	RIGHT_SECOND = "right-second",
	RIGHT_THIRD = "right-third",
	RIGHT_FOURTH = "right-fourth",
	RIGTH_OUTER = "right-outer",
}
