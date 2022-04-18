// Andrew Cheatham

const remoteURL = "http://localhost:8088"

//sets the variable currentUSer to the currently logged in user from session storage
const currentUser = sessionStorage.getItem("nutshell_user")
console.log(currentUser)

//sends a fetch call to the JSON database to return all friends of the currently logged in user
export const getAllFriends = (currentUser) => {
    return fetch(`${remoteURL}/friends?currentUserId=${currentUser}&_expand=user`).then(res => res.json())
}

//takes the id of the targeted friend and allows you to remove them from the JSON database
export const deleteFriend = id => {
    return fetch(`${remoteURL}/friends/${id}`, {
        method:"DELETE"
    }).then(res => res.json())
}
