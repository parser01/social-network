import classes from './Wallpaper.module.css';
import Button from "./Button/Button";

const Wallpaper = () => {
    return (
        <div className={classes.wallpaper}>
            <div>
                <img src="https://www.thoughtco.com/thmb/yrUTNF8_tRuGkw6_PGnrmImiy_I=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/beach-exotic-holiday-248797-50a4923893ab4eddb49a5df232a33069.jpg" alt="ocean"/>
            </div>
            <div className={classes.container}>
                <Button />
            </div>
        </div>
    );
};

export default Wallpaper;