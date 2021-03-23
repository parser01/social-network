import classes from "./FooterMenu.module.css";
import {NavLink} from "react-router-dom";

const FooterMenu = () => {
    return (
        <ul className={classes.menu}>
            <li>
                <NavLink to="/help">Help Center</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/privacy">Privacy Policy</NavLink>
            </li>
            <li>
                <NavLink to="/guidelines">Community Guidelines</NavLink>
            </li>
            <li>
                <NavLink to="/cookies">Cookies Policy</NavLink>
            </li>
            <li>
                <NavLink to="/career">Career</NavLink>
            </li>
            <li>
                <NavLink to="/forum">Forum</NavLink>
            </li>
            <li>
                <NavLink to="/language">Language</NavLink>
            </li>
            <li>
                <NavLink to="/copyright">Copyright Policy</NavLink>
            </li>
        </ul>
    );
};

export default FooterMenu;