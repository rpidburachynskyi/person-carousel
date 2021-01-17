import classes from "./Layer.module.scss";

interface Props {
	src: string;

	type: "person" | "other" | "card";
	index: number;

	visibility: string;
}

const Layer = ({ src, type, visibility }: Props) => {
	return (
		<img
			className={classes.layer}
			attr-type={type}
			src={src}
			attr-visibility={visibility}
		/>
	);
};

export default Layer;
