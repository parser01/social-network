import classes from "./Logo.module.css";
import {NavLink} from "react-router-dom";

const Logo = () => {
    return (
        <NavLink to="/home" className={classes.logo}>
            <img src="https://cdn0.iconfinder.com/data/icons/entypo/96/earth1-512.png" alt="earth"/>
        </NavLink>
    );
};

export default Logo;