import { BiHomeHeart } from "react-icons/bi";

function Register(){
    return (
        <div class='h-screen w-full justify-center items-center flex'>
            <div class='bg-black border rounded-2xl border-sky-500 h-5/6 md:w-2/6 sm:w-3/6 w-4/6 shadow-2xl shadow-black flex flex-col text-center items-center'>
                <h1 class = 'smallglow text-white mt-16 font-bold text-3xl'>Register</h1>
                <input type='text' class = 'w-4/6 mt-12 bg-white h-10 border-2 border-sky-500 rounded-3xl text-black text-center text-xl font-bold focus:bg-sky-500 focus:text-white focus:border-white focus:placeholder:text-white transition duration-300 placeholder:text-sky-500' placeholder="USERNAME"></input>
                <input type='password' class = 'w-4/6 mt-6 bg-white h-10 border-2 border-sky-500 rounded-3xl text-black text-center text-xl font-bold focus:bg-sky-500 focus:text-white focus:border-white focus:placeholder:text-white transition duration-300 placeholder:text-sky-500' placeholder="PASSWORD"></input>
                <input type='text' class = 'w-4/6 mt-6 bg-white h-10 border-2 border-sky-500 rounded-3xl text-black text-center text-xl font-bold focus:bg-sky-500 focus:text-white focus:border-white focus:placeholder:text-white transition duration-300 placeholder:text-sky-500' placeholder="EMAIL"></input>
                <button class="buttonshadow bg-blue-700 hover:bg-blue-900 hover:text-dimWhite text-white text-lg font-bold py-2 px-4 rounded-lg mt-12 transition duration-500 h-12"  onClick = {() => location.href = 'register'}>REGISTER</button>
                <button class=" bg-blue-700 hover:bg-blue-900 hover:text-dimWhite text-white text-2xl font-bold py-2 px-4 rounded-3xl m-8 transition duration-500 h-12"  onClick = {() => location.href = '/'} style={{ position: 'absolute', bottom: '5px', left: '5px' }}><BiHomeHeart /></button>
            </div>
        </div>
    )
}

export default Register