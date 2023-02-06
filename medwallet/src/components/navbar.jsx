import { FiMenu } from 'react-icons/fi'
import { useState} from 'react'

function Navbar(){
    const [open, setOpen] = useState(false);

    function scrollToElement(elementname){
        if (window.location.pathname == '/login' || window.location.pathname == '/register'){
            window.location = '/'
        }

        let element = document.querySelector(`.${elementname}`)
        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: element.offsetTop
        });        
    }


    return (
        <header class="border-b border-sky-500 py-2 w-full fixed backgroundmatch">
            <div class = 'flex items-center justify-between xl:max-w-7xl w-full mx-auto px-[2%] flex-wrap'>
                <h3 class="">MedWallet</h3>
                <FiMenu class="lg:hidden block h-6 w-6 cursor-pointer" onClick = {() => setOpen(!open)}/>
                <nav class={`${open ? 'flex' : 'hidden'} items-center lg:w-auto lg:flex w-full`}>
                    <ul class="text-base px-5 py-2 font-semibold text-white lg:flex lg:justify-between w-full select-none">
                        <li class = 'text-center'><a class = "text-white hover:text-sky-500 lg:px-4 h-10 w-full block py-2 cursor-pointer" onClick = {() => scrollToElement('getstarted')}>Home</a></li>
                        <li class = 'text-center'><a class = "text-white hover:text-sky-500 lg:px-4 h-10 w-full block py-2 cursor-pointer" onClick = {() => scrollToElement('ourwork')}>Our Work</a></li>
                        <li class = 'text-center'><a class = "text-white hover:text-sky-500 lg:px-4 h-10 w-full block py-2 cursor-pointer" href = '#'>Our Mission</a></li>
                        <li class = 'text-center'><a class = "text-white hover:text-sky-500 lg:px-4 h-10 w-full block py-2 cursor-pointer" href = '#'>Contact Us</a></li>
                        <li class = 'lg:pl-4 text-center'><a class = "text-white px-4 bg-blue-700 hover:bg-blue-900 hover:text-dimWhite transition duration-500 rounded-md h-10 w-15 py-2 block cursor-pointer" href = 'login'>Login</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;