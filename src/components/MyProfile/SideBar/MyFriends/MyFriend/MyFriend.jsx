import classes from "./MyFriend.module.css";

const MyFriend = (props) => {
    return (
       <div className={classes.myFriend}>
           <div>
               <img src="" alt=""/>
           </div>
           <div>{props.myFriendName}</div>
       </div>
    );
};

export default MyFriend;