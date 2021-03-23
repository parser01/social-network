import classes from "./AvatarInfo.module.css";
import Avatar from "./Avatar/Avatar";
import AvatarDescription from "./AvatarDescription/AvatarDescription";

const AvatarInfo = () => {
    return (
        <div className={classes.avatarInfo}>
            <Avatar />
            <AvatarDescription />
        </div>
    );
};

export default AvatarInfo;