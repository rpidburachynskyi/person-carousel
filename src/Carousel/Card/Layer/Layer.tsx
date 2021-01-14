import classes from "./Layer.module.scss";

interface Props {
	src: string;

	type: "person" | "other";
	index: number;
}

const Layer = ({ src, type }: Props) => {
	return <img className={classes.layer} attr-type={type} src={src} />;
};

export default Layer;
