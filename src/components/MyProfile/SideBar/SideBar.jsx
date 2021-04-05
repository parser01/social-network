import classes from "./SideBar.module.css";
import MyFriends from "./MyFriends/MyFriends";

const SideBar = (props) => {
    return (
        <div className={classes.sideBar}>
            <MyFriends myFriendsData={props.myFriendsData}/>
        </div>
    );
};

export default SideBar;