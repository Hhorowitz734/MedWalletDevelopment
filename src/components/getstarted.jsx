

function GetStarted(){
    return (
        <div class = 'getstarted flex flex-col justify-center items-center text-center h-screen pb-8 select-none '>
            <h1 class='glow text-8xl'>MedWallet</h1>
            <h3 class='text-4xl text-center pt-8'>Bringing education and transparency to medical billing</h3>
            <button class="buttonshadow bg-blue-700 hover:bg-blue-900 hover:text-dimWhite text-white font-bold py-2 px-4 rounded-lg mt-8 transition duration-500 h-10"  onClick = {() => location.href = 'register'}>
            Get Started
            </button>
            
        </div>
    )
}



export default GetStarted