//Andrew Cheatham 

import react, { useEffect, useState } from "react";
import { FriendCard } from "./FriendCard";
import { getAllFriends, deleteFriend } from "../../modules/FriendManager";
import "./FriendsList.css"

export const FriendList = () => {
    const [friends, setFriends] = useState([])
    
    const currentUser = sessionStorage.getItem("nutshell_user")
    console.log(currentUser)

    const getFriends = (currentUser) => {
        return getAllFriends(currentUser).then(friendsFromApi => {
            setFriends(friendsFromApi)
        })
    }

    const handleDeleteFriend = id => {
        //calls the function deleteFriend on the currently selected friendId and then sets the new state of friends
        deleteFriend(id)
        .then(() => getAllFriends(currentUser).then(setFriends))
    }

    useEffect(() => {
        getFriends(currentUser);
    }, [])

    return (
        //takes all of the data/"friends" returned from getAllFriends and maps them to individual FriendCards
        <div className="container-cards">
            {friends.map(friend => <FriendCard
                friend={friend}
                key={friend.id}
                handleDeleteFriend={handleDeleteFriend} />)}
        </div>
    )
}