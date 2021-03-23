import classes from "./Footer.module.css";
import FooterMenu from "./FooterMenu/FooterMenu";
import Logo from "../Footer/Logo/Logo";
import Copyright from "./Copyright/Copyright";

const Footer = () => {
    return (
        <div className={classes.footer}>
            <div>
                <FooterMenu />
            </div>
            <div>
                <Logo />
            </div>
            <div>
                <Copyright />
            </div>
        </div>
    );
};

export default Footer;