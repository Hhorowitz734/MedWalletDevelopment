

function ProblemsList(){
    return(
        <div class = 'w-full h-screen bg-black p-8'>
            <h1 class = 'smallglow text-white text-5xl font-bold mt-8 lg:mt-0'>Problems</h1>
            <table class = 'shadow-2x w-full mt-4'>
                <tr class = 'border-b-2'>
                    <th>Problem</th>
                    <th>Difficulty</th>
                    <th>Status</th>
                    <th>Rating</th>
                </tr>
                <tr class = 'cursor-pointer hover:bg-blue-800 transition duration-300'>
                    <th class = 'hover:text-sky-500'>Sally's Apples</th>
                    <th class = 'text-green-400'>Easy</th>
                    <th>Incomplete</th>
                    <th>3/5</th>
                </tr>
                <tr class = 'cursor-pointer hover:bg-blue-800 transition duration-300'>
                    <th class = 'hover:text-sky-500'>Sally's Apples</th>
                    <th class = 'text-yellow-500'>Medium</th>
                    <th>Incomplete</th>
                    <th>3/5</th>
                </tr>
                <tr class = 'cursor-pointer hover:bg-blue-800 transition duration-300'>
                    <th class = 'hover:text-sky-500'>Sally's Apples</th>
                    <th class = 'text-red-600'>Hard</th>
                    <th>Incomplete</th>
                    <th>3/5</th>
                </tr>
            </table>
        </div>
    )
}

export default ProblemsList