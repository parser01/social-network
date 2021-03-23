import classes from "./Logo.module.css";
import {NavLink} from "react-router-dom";

const Logo = () => {
    return (
        <NavLink to="/home" className={classes.logo}>
            <img src="https://www.flaticon.com/svg/vstatic/svg/3034/3034938.svg?token=exp=1615932781~hmac=4d7324cc821e503ca1b2943a9672ec65" alt="earth"/>
        </NavLink>
    );
};

export default Logo;