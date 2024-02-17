import axios from "axios";

const URL = 'http://localhost:4000'

export const addUser = async (data)=>
{
    try{
        return await axios.post(`${URL}/add`,data)
    }
    catch(error){
            throw new Error("cannot add ",error);
    }
}

export const getUsers = async (data)=>
{
    try{
        return await axios.get(`${URL}/all`,data)
    }
    catch(error){
            throw new Error("cannot get all",error);
    }
}

export const getUser = async (id)=>
{
    try{
        return await axios.get(`${URL}/${id}`)
    }
    catch(error){
            throw new Error("cannot getUser",error);
    }
}


export const editUser = async (user,id)=>
{
    try{
        return await axios.post(`${URL}/${id}`,user)
    }
    catch(error){
            throw new Error("cannot editUser",error);
    }
}

export const deleteUser = async (id)=>
{
    try{
        return await axios.delete(`${URL}/${id}`)
    }
    catch(error){
            throw new Error("cannot deleteUser",error);
    }
}

