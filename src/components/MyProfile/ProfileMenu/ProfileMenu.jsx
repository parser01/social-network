import classes from "./ProfileMenu.module.css";
import AvatarInfo from "./AvatarInfo/AvatarInfo";
import AvatarMenu from "./AvatarMenu/AvatarMenu";

const ProfileMenu = () => {
    return (
        <div className={classes.profileMenu}>
            <AvatarInfo />
            <AvatarMenu />
        </div>
    );
};

export default ProfileMenu;