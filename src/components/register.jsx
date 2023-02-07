import { BiHomeHeart } from "react-icons/bi";
import React, { useState } from 'react';
import axios from 'axios'

function Register(){
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    // Handles registration in the backend
    async function performRegistration(){
        try {
            const response = await axios.post('http://localhost:8383/register', {
                username,
                password,
                email
            });

            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div class='h-screen w-full justify-center items-center flex'>
            <div class='bg-black border rounded-2xl border-sky-500 h-5/6 md:w-2/6 sm:w-3/6 w-4/6 shadow-2xl shadow-black flex flex-col text-center items-center'>
                <h1 class = 'smallglow text-white mt-16 font-bold text-3xl'>Register</h1>
                <input type='text' class = 'w-4/6 mt-12 bg-white h-10 border-2 border-sky-500 rounded-3xl text-black text-center text-xl font-bold focus:bg-sky-500 focus:text-white focus:border-white focus:placeholder:text-white transition duration-300 placeholder:text-sky-500' placeholder="USERNAME" onChange = {(event) => setUsername(event.target.value)}></input>
                <input type='password' class = 'w-4/6 mt-6 bg-white h-10 border-2 border-sky-500 rounded-3xl text-black text-center text-xl font-bold focus:bg-sky-500 focus:text-white focus:border-white focus:placeholder:text-white transition duration-300 placeholder:text-sky-500' placeholder="PASSWORD" onChange = {(event) => setPassword(event.target.value)}></input>
                <input type='text' class = 'w-4/6 mt-6 bg-white h-10 border-2 border-sky-500 rounded-3xl text-black text-center text-xl font-bold focus:bg-sky-500 focus:text-white focus:border-white focus:placeholder:text-white transition duration-300 placeholder:text-sky-500' placeholder="EMAIL" onChange = {(event) => setEmail(event.target.value)}></input>
                <button class="registerbtn buttonshadow bg-blue-700 hover:bg-blue-900 hover:text-dimWhite text-white text-lg font-bold py-2 px-4 rounded-lg mt-12 transition duration-500 h-12"  onClick = {() => performRegistration()}>REGISTER</button>
                <button class=" bg-blue-700 hover:bg-blue-900 hover:text-dimWhite text-white text-2xl font-bold py-2 px-4 rounded-3xl m-8 transition duration-500 h-12"  onClick = {() => location.href = '/'} style={{ position: 'absolute', bottom: '5px', left: '5px' }}><BiHomeHeart /></button>
            </div>
        </div>
    )
}

export default Register