import React from "react";

interface Props {
	slowly: boolean;
	setSlowly: (value: boolean) => void;

	onlyHiddenPersonCard: boolean;
	setOnlyHiddenPersonCard: (value: boolean) => void;
}

const ToolPanel = ({
	slowly,
	setSlowly,
	onlyHiddenPersonCard,
	setOnlyHiddenPersonCard,
}: Props) => {
	return (
		<div>
			<button onClick={() => setSlowly(!slowly)}>
				{slowly ? "Fastly" : "Slowly"}
			</button>
			<button
				onClick={() => setOnlyHiddenPersonCard(!onlyHiddenPersonCard)}
			>
				{!onlyHiddenPersonCard ? "Only hidden" : "Cancel 'only hidden'"}
			</button>
		</div>
	);
};

export default ToolPanel;
