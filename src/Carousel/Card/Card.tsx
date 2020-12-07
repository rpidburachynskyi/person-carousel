import classes from './Card.module.scss';;

export type CardType = 'main' | 'left-second' | 'left-third' | 'left-fourth' | 'left-outer' | 'right-second' | 'right-third' | 'right-fourth' | 'right-outer';

interface Props {
   type: CardType;
   onMoveTo: () => void;
}

const Card = ({ type, onMoveTo }: Props) => {
    return ( 
        <div attr-type={type} onClick={onMoveTo} className={classes.card}></div>
     );
}


export default Card;