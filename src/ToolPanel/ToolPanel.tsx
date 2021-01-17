import React from "react";

interface Props {
	slowly: boolean;
	setSlowly: (value: boolean) => void;
}

const ToolPanel = ({ slowly, setSlowly }: Props) => {
	return (
		<div>
			<button onClick={() => setSlowly(!slowly)}>
				{slowly ? "Fastly" : "Slowly"}
			</button>
		</div>
	);
};

export default ToolPanel;
