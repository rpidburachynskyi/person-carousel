import Card from './Card/Card';
import classes from './Carousel.module.scss';

const Carousel = () => {
    return ( 
        <div className={classes.page}>
            <div className={classes.carousel}>
                <div className={classes.slider}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
     );
}


export default Carousel;