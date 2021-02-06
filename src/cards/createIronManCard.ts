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
			// {
			// 	index: 3,
			// 	type: LayerTypeEnums.OTHER,
			// 	render: LayerRenderTypeEnums.HTML,
			// 	html: `
			// 	<style>
			// 		.unique_l_image {
			// 			width: 100%;
			// 			height: 100%;

			// 			animation: 1s unique_a_1 linear infinite;
			// 		}

			// 		@keyframes unique_a_1 {
			// 			0% {
			// 				opacity: 0.5;
			// 			}

			// 			50% {
			// 				opacity: 1;
			// 			}

			// 			100% {
			// 				opacity: 0.5;
			// 			}
			// 		}
			// 	</style>
			// 	<img
			// 		class="unique_l_image"
			// 		attr-type="{{labelType}}"
			// 		src="${IronManLabel}"
			// 		attr-visibility="{{visibility}}"
			// 		attr-slowly="${String(false)}"
			// 		alt="layer"
			// 	/>
			// 	`,
			// },
			{
				index: 1,
				type: LayerTypeEnums.OTHER,
				render: LayerRenderTypeEnums.HTML,
				html: `
				<style>
					.unique_l2 {
						width: 100%;
						height: 100%;

						position: relative;
					}
					
					.flame{
						width:30px;
						height:30px;
						max-height: 30px;
						max-width: 30px;
						background:linear-gradient(-45deg, red, orange);
						border-radius: 30px 30px 0px 30px;
						transform:rotate(25deg);
						animation:.1s flame infinite;
						filter:blur(10px);
						position:relative;
						box-shadow:17px 20px 90px #700;
						border:45px solid black;
						border-left-width:25px;
						border-top-width:25px;

						top: 90%;
						left: 64%;
						
						&:after,
						&:before{
							content:'';
							width:20px;
							height:20px;
							display:block;
							position:absolute;
							background:linear-gradient(-45deg, red, orange);
							animation:.2s flame infinite;
							top:5px;
						}
					
					}
					
					@keyframes flame{
					  0% {height:30px; width:30px;}
					  50% {height:28px; width:28px;}
					  100% {height:30px; width:30px;}
					}

				</style>
				<div
					class="unique_l2"
				>
					<div class="flame"></div>
				</div>
				`,
			},
		],
	};
};
