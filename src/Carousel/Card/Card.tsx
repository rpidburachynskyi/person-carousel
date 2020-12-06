import classes from './Card.module.scss';;

export type CardType = 'main' | 'left-second' | 'left-third' | 'left-fourth' | 'left-outer' | 'right-second' | 'right-third' | 'right-fourth' | 'right-outer';

interface Props {
   type: CardType;
}

const Card = ({ type }: Props) => {
    return ( 
        <div attr-type={type} className={classes.card}></div>
     );
}


export default Card;