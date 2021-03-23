import classes from "./NavBar.module.css";
import Burger from "./Burger/Burger";
import IconMenu from "./IconMenu/IconMenu";

const NavBar = () => {
    return (
        <nav className={classes.navbar}>
            <div>
                <Burger />
                <IconMenu />
            </div>
        </nav>
    );
};

export default NavBar;