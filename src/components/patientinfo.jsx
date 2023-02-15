

function PatientInfo() {
    return (
        <div class="bg-black h-80 grid grid-cols-3">
            <div class="m-2 border border-sky-500 rounded-md p-2">
                <h1 class='text-2xl font-bold text-center'>Patient: John Hathorne</h1>
                <ul class = 'list-disc p-4 border-b '>
                    <li class = 'text-md'>Age: 47</li>
                    <li class = 'text-md'>Height: 6'0</li>
                    <li class = 'text-md'>Weight: 250lbs</li>
                    <li class = 'text-md'>Takes Rampril daily</li>
                </ul>
                <h1 class = 'p-2 text-center'>The patient's father suffered a heart attack. He recently traveled to Hawaii, and is a heavy smoker.</h1>
            </div>
            <div class="m-2 border border-sky-500 rounded-md p-2">
                <h1 class='text-2xl font-bold text-center'>Current Situation</h1>
                <h1 class='text-center mt-4'>John decided to come to the hospital when he began coughing up blood. He also complains of a persistent cough, fatigue, and he is unable to walk up the stairs at his work without getting winded. He says he has lost a little weight, but hasn’t changed his diet, and isn’t able to exercise. </h1>
            </div>
            <div class="m-2 border border-sky-500 rounded-md p-2">
                <h1 class='text-2xl font-bold text-center'>Budget</h1>
                <h1 class = 'text-8xl text-green-600 font-bold text-center border-b p-2'>5000$</h1>
                <ul class = 'list-disc p-4'>
                    <li>Test 1 (500$)</li>
                </ul>
            </div>
        </div>
    )
}

export default PatientInfo