import classes from "./AvatarMenu.module.css";
import {NavLink} from "react-router-dom";

const AvatarMenu = () => {
    return (
        <ul className={classes.avatarMenu}>
            <li>
                <NavLink to="/timeline">Timeline</NavLink>
            </li>
            <li>
                <NavLink to="/timeline">About</NavLink>
            </li>
            <li>
                <NavLink to="/timeline">Friends</NavLink>
            </li>
            <li>
                <NavLink to="/timeline">Photos</NavLink>
            </li>
            <li>
                <NavLink to="/timeline">Videos</NavLink>
            </li>
        </ul>
    );
};

export default AvatarMenu;