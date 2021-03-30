import classes from "./Burger.module.css";

const Burger = () => {
    return (
        <div className={classes.burger}>
            <img src="https://cdn4.iconfinder.com/data/icons/essential-app-2/16/burger-menu-more-panel-512.png" alt="burger icon"/>
        </div>
    );
};

export default Burger;