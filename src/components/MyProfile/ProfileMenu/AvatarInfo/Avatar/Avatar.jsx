import classes from "./Avatar.module.css";

const Avatar = () => {
    return (
        <div className={classes.avatar}>
            <img src="https://www.f1-fansite.com/wp-content/uploads/2020/04/Niki_Lauda12-1-scaled.jpg" alt="profile image"/>
        </div>
    );
};

export default Avatar;