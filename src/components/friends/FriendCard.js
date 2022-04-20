//Andrew Cheatham 

import react from "react";
import "./FriendCard.css"

export const FriendCard = ({friend, handleDeleteFriend}) => {
    //creates the component FriendCard to display the information of each individual friend from the fetch call getAllFriends

    return(
        <div className="friends-card">
            <div className="friends-card-content">
                <h3 className="card-friend-firstName"> {friend.user.firstName} </h3>
                <h3 className="card-friend-lastName"> {friend.user.lastName} </h3>
                <p className="card-friend-email"> {friend.user.email} </p>
                <button  className="card-friend-delete" onClick={() => handleDeleteFriend(friend.id)}> Remove Friend </button>
            </div>
        </div>
    )
}