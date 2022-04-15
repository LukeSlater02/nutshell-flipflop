const remoteURL = "http://localhost:8088"

const currentUser = sessionStorage.getItem("nutshell_user")
console.log(currentUser)

export const getAllFriends = (currentUser) => {
    return fetch(`${remoteURL}/friends?currentUserId=${currentUser}&_expand=user`).then(res => res.json())
}

export const getFriendById = (id) => {
    return fetch(`${remoteURL}/friends/${id}`).then(res => res.json())
}

export const deleteFriend = id => {
    return fetch(`${remoteURL}/friends/${id}`, {
        method:"DELETE"
    }).then(res => res.json())
}

//