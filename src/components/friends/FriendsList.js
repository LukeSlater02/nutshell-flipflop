//Andrew Cheatham 
//Sets up the component friends list.
//Created function getFriends() which fetches and returns allFriends from the JSON

import react, { useEffect, useState } from "react";
import { FriendCard } from "./FriendCard";
import { getAllFriends, deleteFriend } from "../../modules/FriendManager";

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
        deleteFriend(id)
        .then(() => getAllFriends().then(setFriends))
    }

    useEffect(() => {
        getFriends(currentUser);
    }, [])

    return (
        <div className="container-cards">
            {friends.map(friend => <FriendCard
                friend={friend}
                key={friend.id}
                handleDeleteFriend={handleDeleteFriend} />)}
        </div>
    )
}