import classes from "./Header.module.css";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";

const Header = () => {
    return (
        <header className={classes.header}>
            <div>
                <Logo />
                <Search />
            </div>
        </header>
    );
};

export default Header;