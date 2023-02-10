

function UpdatesDiv(){
    return (
        <div class = 'h-1/4 w-full bg-black lg:mt-16 mt-8'>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-4">
            <div class="backgroundshadow backgroundmatch p-4 m-4 mt-4 lg:mt-8 h-28 md:h-32 lg:h-40 text-center border-md border-blue-700 hover:border-sky-500 transition duration-300 rounded-lg border-2 cursor-pointer">
                <h1 class = 'font-bold'>Problems</h1>
                <h4>Challenge yourself to some medical challenges. Expore easy, medium, and difficult problems and expand your skills.</h4>
            </div>
            <div class="backgroundshadow backgroundmatch p-4 m-4 mt-4 mb-2 lg:mt-8 lg:mb-4 h-28 md:h-32 lg:h-40 text-center border-md border-blue-700 hover:border-sky-500 transition duration-300 rounded-lg border-2 cursor-pointer">
                <h1 class = 'font-bold'>Discussions</h1>
                <h4>Discuss questions and learn strategies to improve your skills. Learn more about the community!</h4>
            </div>
            <div class="backgroundshadow backgroundmatch p-4 m-4 mt-2 mb-2 lg:mt-8 lg:mb-4  h-28 md:h-32 lg:h-40 text-center border-md border-blue-700 hover:border-sky-500 transition duration-300 rounded-lg border-2 cursor-pointer">
                <h1 class = 'font-bold'>Contribute</h1>
                <h4>Have an idea for a question? Submit it, earn points, and have a chance to be entered in a giveaway!</h4>
            </div>
            <div class="backgroundshadow backgroundmatch p-4 m-4 mt-2 mb-2 lg:mt-8 lg:mb-4 h-28 md:h-32 lg:h-40 text-center border-md border-blue-700 hover:border-sky-500 transition duration-300 rounded-lg border-2 cursor-pointer">
                <h1 class = 'font-bold'>Stats</h1>
                <h1 class = 'text-2xl'>5 Day Streak</h1>
                <h1 class = 'text-2xl'>30 Problems Solved</h1>
                <h1 class = 'text-2xl hidden md:hidden lg:block'>2 Questions Submitted</h1>
            </div>
</div>
        </div>
    )
}


export default UpdatesDiv