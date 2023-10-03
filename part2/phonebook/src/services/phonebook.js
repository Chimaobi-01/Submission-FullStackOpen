import axios from "axios";

const baseUrl = 'http://localhost:3001/persons'

export const fetchPhonebook = () => {
    const request = axios.get(baseUrl).then(response => response.data)
    return request
}

export const addPhonebook = (newObject) => {
    const request = axios.post(baseUrl, newObject).then(response => response.data)
    return request
}
export const replacePhoneNumber = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject).then(response => response.data)
    return request
}
export const deletePhonebook = id => {
    const request = axios.delete(`${baseUrl}/${id}`).then(response => response.data)
    return request
}