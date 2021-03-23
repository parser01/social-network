import classes from "./IconMenu.module.css";
import {NavLink} from "react-router-dom";

const IconMenu = () => {
    return (
        <ul className={classes.iconMenu}>
            <li>
                <NavLink to="/profile" activeClassName={classes.active}>
                    <img src="https://cdn2.iconfinder.com/data/icons/app-user-interface-6/48/User-256.png" alt="profile"/>
                </NavLink>
            </li>
            <li>
                <NavLink to="/messages" activeClassName={classes.active}>
                    <img src="https://cdn0.iconfinder.com/data/icons/mobile-basic-vol-1/32/Chat-256.png" alt="chat"/>
                </NavLink>
            </li>
            <li>
                <NavLink to="/news/" activeClassName={classes.active}>
                    <img src="https://cdn0.iconfinder.com/data/icons/ecommerce-business/24/Artboard_3-256.png" alt="newspaper"/>
                </NavLink>
            </li>
            <li>
                <NavLink to="/music/classic" activeClassName={classes.active}>
                    <img src="https://cdn3.iconfinder.com/data/icons/glypho-free/64/music-note-sound-256.png" alt="musical note"/>
                </NavLink>
            </li>
            <li>
                <NavLink to="/settings" activeClassName={classes.active}>
                    <img src="https://www.flaticon.com/svg/vstatic/svg/1242/1242392.svg?token=exp=1616256061~hmac=9ebb4bffec58b6cd633915b7d179766d" alt="gear"/>
                </NavLink>
            </li>
        </ul>
    );
};

export default IconMenu;