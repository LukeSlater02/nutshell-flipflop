const remoteURL = "http://localhost:8088"

export const getAllArticles = () => {
    return fetch(`${remoteURL}/articles?_expand=user`).then(res => res.json())
}

export const getArticleById = (id) => {
    return fetch(`${remoteURL}/articles/${id}?_expand=user`).then(res => res.json())
}

export const deleteArticle = id => {
    return fetch(`${remoteURL}/articles/${id}`, {
        method: "DELETE"
    }).then(res => res.json())
}

export const addArticle = newArticle => {
    return fetch(`${remoteURL}/articles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newArticle)
    }).then(res => res.json())
  }


export const getUsersFavoritedArticles = (currentUser) => {
    return fetch(`${remoteURL}/articles?userId=${currentUser.id}&_favorite=true&_sort=timestamp&_order=asc`)
    .then(res => res.json())
}


export const updateArticle  = (editedArticle) => {
  return fetch(`${remoteURL}/articles/${editedArticle.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedArticle)
  }).then(data => data.json());
}