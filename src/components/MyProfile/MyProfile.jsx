import classes from "./MyProfile.module.css";
import Wallpaper from "./Wallpaper/Wallpaper";
import ProfileMenu from "./ProfileMenu/ProfileMenu";
import MyPosts from "./MyPosts/MyPosts";
import SideBar from "./SideBar/SideBar";

const MyProfile = (props) => {
    return (
        <div className={classes.myProfile}>
            <Wallpaper />
            <ProfileMenu />
            <MyPosts
                postsData={props.myProfile.postsData}
                newPostText={props.myProfile.newPostText}
                dispatch={props.dispatch} />
            <SideBar myFriendsData={props.myProfile.myFriendsData} />
        </div>
    );
};

export default MyProfile;