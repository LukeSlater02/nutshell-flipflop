//Andrew Cheatham 

import react from "react";
import "./FriendCard.css"

export const FriendCard = ({friend, handleDeleteFriend}) => {
    //creates the component FriendCard to display the information of each individual friend from the fetch call getAllFriends

    return(
        <div className="card">
            <div className="card-content">
                <h3 className="card-friend-name"> {friend.user.name} </h3>
                <p className="card-friend-email"> {friend.user.email} </p>
                <button  className="card-friend-delete" onClick={() => handleDeleteFriend(friend.id)}> Remove Friend </button>
            </div>
        </div>
    )
}