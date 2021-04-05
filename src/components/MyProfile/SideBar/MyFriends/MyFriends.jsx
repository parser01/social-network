import classes from "./MyFriends.module.css";
import MyFriend from "./MyFriend/MyFriend";

const MyFriends = (props) => {
    let myFriends = props.myFriendsData.map((i) => <MyFriend id={i.id} myFriendName={i.myFriendName} />);
    return (
        <div className={classes.myFriends}>
            <h2>My friends</h2>
            {myFriends}
            <button>See all friends</button>
        </div>
    );
};

export default MyFriends;