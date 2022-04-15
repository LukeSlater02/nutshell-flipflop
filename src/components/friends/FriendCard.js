//Andrew Cheatham 
//Creates component FriendCard which allows each individual friends information to be displayed onto the dom using JSX
//Added Remove Friend Button 

import react from "react";

import "./FriendCard.css"

export const FriendCard = ({friend, handleDeleteFriend}) => {
    return(
        <div className="card">
            <div className="card-content">
                <h3 className="card-friend-name"> {friend.user.name} </h3>
                <p className="card-friend-email"> {friend.user.email} </p>
                <button type="button" className="card-friend-delete" onClick={() => handleDeleteFriend(friend.id)}> Remove Friend </button>
            </div>
        </div>
    )
}