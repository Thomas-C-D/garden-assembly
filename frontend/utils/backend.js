import axios from 'axios'

// Flowers functions

export async function getFlowers() {
    const { data } = await axios.get('/api/flowers')
    return data
}

export async function getOneFlower(flowerId) {
    const { data } = await axios.get(`/api/flowers/${flowerId}`)
    return data
}

export async function postFlower(flower) {
    const authHeader = { headers: { 'Authorization': localStorage.getItem('userToken') } }
    const { data } = await axios.post('/api/flowers', flower, authHeader)
    return data
}

export async function updateFlower(flower, id) {
    const authHeader = { headers: { 'Authorization': localStorage.getItem('userToken') } }
    const { data } = await axios.put(`/api/flowers/${id}`, flower, authHeader )
    return data
}

export async function deleteFlower(id) {
    const authHeader = { headers: { 'Authorization': localStorage.getItem('userToken') } }
    const { data } = await axios.delete(`/api/flowers/${id}`, authHeader )
    return data
}


// Users functions

export async function signUp(user) {
    const { data } = await axios.post('/api/users/signup', user)
    return data
}

export async function logIn(user) {
    const { data } = await axios.post('/api/users/login', user)
    return data
}

// Comments functions

export async function getComments(flowerId) {
    const { data } = await axios.get(`/api/comments/${flowerId}`)
    return data
}


export async function postComment(comment) {
    const authHeader = { headers: { 'Authorization': localStorage.getItem('userToken') } }
    const { data } = await axios.post('/api/comments', comment, authHeader)
    return data
}

export async function updateComment(comment, id) {
    const authHeader = { headers: { 'Authorization': localStorage.getItem('userToken') } }
    const { data } = await axios.put(`/api/comments/${id}`, comment, authHeader)
    return data
}

export async function deleteComment(id) {
    const authHeader = { headers: { 'Authorization': localStorage.getItem('userToken') } }
    const { data } = await axios.delete(`/api/comments/${id}`, authHeader)
    return data
}

export async function deleteAllComments(flowerId) {
    const { data } = await axios.delete(`/api/comments/all/${flowerId}`)
    return data
}