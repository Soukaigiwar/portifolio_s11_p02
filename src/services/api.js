import axios from "axios"

export const api = axios.create({
    baseURL: "https://sergiomello-s11-p01.onrender.com",
    //baseURL: "http://localhost:3333/",
})
