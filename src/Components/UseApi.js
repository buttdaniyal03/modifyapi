import React, { useState, useEffect } from "react";
import axios from "axios";
import ApiComp from "./ApiComp";


const UseApi = () => {
    const [user, setUser] = useState([])

    useEffect(() => {
        const getUsers = async () => {
        const response = await axios('https://fakestoreapi.com/products/');
        setUser(response.data);
        }
        getUsers();
    },[])
    
    return (
        <>
           <ApiComp user={user}/>
        </>
    )
}


// const getUsers = async () => {
        //     const response = await fetch('https://fakestoreapi.com/products/');
        //     console.log('asdads',setUser(await response.json()) );
        //     console.log("block", user)
        // }
export default UseApi; 