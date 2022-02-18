// === jsPsych v6 ===
/*
// jsPsych.init({
//     fullscreen: true,
//     on_finish: function (data) {
//         // Serialize the data
//         var promise = new Promise(function (resolve, reject) {
//             var data = jsPsych.data.dataAsJSON();
//             resolve(data);
//         })

//         promise.then(function (data) {
//             sendResults(data);
//         })
//     }

// });
*/
const settings = {
    fullscreen: true,
    on_finish: function (data) {
        // Serialize the data
        var promise = new Promise(function (resolve, reject) {
            var data = jsPsych.data.dataAsJSON();
            resolve(data);
        })

        promise.then(function (data) {
            sendResults(data);
        })
    }

}

const jsPsych = initJsPsych(settings);
async function sendResults(results) {
    function handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

    fetch("/save", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: results })
    })
        .then(handleErrors)
        .then(response => console.log("Request complete! response: ", response))
        .catch(error =>
            jsPsych.data.localSave('cognitive_estimation_task_result.csv', 'csv')
        );
}

const block_1 = [];
const versionA = [];
const versionB = [];

// randomize order
const number = Math.round(Math.random());
const order = number ? [versionA, versionB] : [versionB, versionA];

const welcome = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<p>Welcome to the experiment! In this task, we will be testing you ability to estimate the numerical answers of several questions.
             Press any key to continue on to the instructions.</p>
        `
}
block_1.push(welcome);

const instructions_1 = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<p>In this task, you will be estimating the answers to 9 questions. You will see one question at a time and your job is to
            make a reasonable guess as to what the answer is.</p><p> Each question requires a numerical response in the units that are specified.
            Once you have come up with an estimate, please type the number into the textbox provided and click "continue" to move on to the 
            next question.</p><p>Once again, just a reminder that you are NOT expected to know the exact answer to these questions. We only ask that
            you make a reasonable guess or give your best estimate.</p><p>When you are ready to begin, press any key.</p>
        `
}
block_1.push(instructions_1);


const question1A = {
    type: jsPsychSurveyHtmlForm,
    preamble: `<p>What is the maximum speed of a Harley-Davidson motorbike? (in km/h)</p><p>Please answer with numbers only</p>`,
    html: '<p><input type="number" id="test-resp-box" name="response" size="10" required/></p>',
    autofocus: 'test-resp-box'
}

versionA.push(question1A);


const question2A = {
    type: jsPsychSurveyHtmlForm,
    preamble: `<p>What is the length of the average newborn baby? (in cm)</p><p>Please answer with numbers only</p>`,
    html: '<p><input type="number" id="test-resp-box" name="response" size="10" required/></p>',
    autofocus: 'test-resp-box'
}

versionA.push(question2A);

const question3A = {
    type: jsPsychSurveyHtmlForm,
    preamble: `<p>How fast do race horses run? (in km/h)</p><p>Please answer with numbers only</p>`,
    html: '<p><input type="number" id="test-resp-box" name="response" size="10" required/></p>',
    autofocus: 'test-resp-box'
}
versionA.push(question3A);


const question4A = {
    type: jsPsychSurveyHtmlForm,
    preamble: `<p>What is the average jogging speed? (in km/h)</p><p>Please answer with numbers only</p>`,
    html: '<p><input type="number" id="test-resp-box" name="response" size="10" required/></p>',
    autofocus: 'test-resp-box'
}
versionA.push(question4A);


const question5A = {
    type: jsPsychSurveyHtmlForm,
    preamble: `<p>How many segments are there in an orange?</p><p>Please answer with numbers only</p>`,
    html: '<p><input type="number" id="test-resp-box" name="response" size="10" required/></p>',
    autofocus: 'test-resp-box'
}
versionA.push(question5A);


const question6A = {
    type: jsPsychSurveyHtmlForm,
    preamble: `<p>What is the length of a new pencil? (in cm)</p><p>Please answer with numbers only</p>`,
    html: '<p><input type="number" id="test-resp-box" name="response" size="10" required/></p>',
    autofocus: 'test-resp-box'
}
versionA.push(question6A);


const question7A = {
    type: jsPsychSurveyHtmlForm,
    preamble: `<p>What is the maximum speed of a cheetah? (in km/h)</p><p>Please answer with numbers only</p>`,
    html: '<p><input type="number" id="test-resp-box" name="response" size="10" required/></p>',
    autofocus: 'test-resp-box'
}
versionA.push(question7A);


const question8A = {
    type: jsPsychSurveyHtmlForm,
    preamble: `<p>What is the length of an average men's mountain bike? (in metres)</p><p>Please answer with numbers only</p>`,
    html: '<p><input type="number" id="test-resp-box" name="response" size="10" required/></p>',
    autofocus: 'test-resp-box'
}
versionA.push(question8A);


const question9A = {
    type: jsPsychSurveyHtmlForm,
    preamble: `<p>How many keys are there on a standard computer keyboard?</p><p>Please answer with numbers only</p>`,
    html: '<p><input type="number" id="test-resp-box" name="response" size="10" required/></p>',
    autofocus: 'test-resp-box'
}
versionA.push(question9A);


const question1B = {
    type: jsPsychSurveyHtmlForm,
    preamble: `<p>What is the average walking speed of the typical healthy adult man? (in km/h)</p><p>Please answer with numbers only</p>`,
    html: '<p><input type="number" id="test-resp-box" name="response" size="10" required/></p>',
    autofocus: 'test-resp-box'
}

versionB.push(question1B);


const question2B = {
    type: jsPsychSurveyHtmlForm,
    preamble: `<p>How long is the average tie? (in metres)</p><p>Please answer with numbers only</p>`,
    html: '<p><input type="number" id="test-resp-box" name="response" size="10" required/></p>',
    autofocus: 'test-resp-box'
}
versionB.push(question2B);


const question3B = {
    type: jsPsychSurveyHtmlForm,
    preamble: `<p>What is the fastest tennis serve? (in km/h)</p><p>Please answer with numbers only</p>`,
    html: '<p><input type="number" id="test-resp-box" name="response" size="10" required/></p>',
    autofocus: 'test-resp-box'
}
versionB.push(question3B);


const question4B = {
    type: jsPsychSurveyHtmlForm,
    preamble: `<p>How many keys are there on a standard piano?</p><p>Please answer with numbers only</p>`,
    html: '<p><input type="number" id="test-resp-box" name="response" size="10" required/></p>',
    autofocus: 'test-resp-box'
}
versionB.push(question4B);


const question5B = {
    type: jsPsychSurveyHtmlForm,
    preamble: `<p>What is the age of the oldest person in your country?</p><p>Please answer with numbers only</p>`,
    html: '<p><input type="number" id="test-resp-box" name="response" size="10" required/></p>',
    autofocus: 'test-resp-box'
}
versionB.push(question5B);


const question6B = {
    type: jsPsychSurveyHtmlForm,
    preamble: `<p>What is the length of an average man's spine? (in cm)</p><p>Please answer with numbers only</p>`,
    html: '<p><input type="number" id="test-resp-box" name="response" size="10" required/></p>',
    autofocus: 'test-resp-box'
}
versionB.push(question6B);


const question7B = {
    type: jsPsychSurveyHtmlForm,
    preamble: `<p>What is the maximum speed of a cyclist? (in km/h)</p><p>Please answer with numbers only</p>`,
    html: '<p><input type="number" id="test-resp-box" name="response" size="10" required/></p>',
    autofocus: 'test-resp-box'
}
versionB.push(question7B);


const question8B = {
    type: jsPsychSurveyHtmlForm,
    preamble: `<p>How many strings are there on a harp?</p><p>Please answer with numbers only</p>`,
    html: '<p><input type="number" id="test-resp-box" name="response" size="10" required/></p>',
    autofocus: 'test-resp-box'
}
versionB.push(question8B);


const question9B = {
    type: jsPsychSurveyHtmlForm,
    preamble: `<p>What is the maximum speed of a Formula 1 car? (in km/h)</p><p>Please answer with numbers only</p>`,
    html: '<p><input type="number" id="test-resp-box" name="response" size="10" required/></p>',
    autofocus: 'test-resp-box'
}
versionB.push(question9B);
const timeline = block_1.concat(order[0]);
jsPsych.run(timeline);
