const quizData = [
    {
        question :"What is the most used programming language in 2021?",
        a:"phyton",
        b:"javascript",
        c:"java",
        d:"c",
        correct:"d"

    },
    {
        question:"Who is the first president of US?",
        a:"Abraham Lincoln",
        b:"George Bush",
        c:"George Washington",
        d:" Grover Cleveland",
        correct:"c"
    },
    {
        question :"When Napoléon Bonaparte was died?",
        a:"1877",
        b:"1836",
        c:"1821",
        d:"1833",
        correct:"c"
    },
    {
        question: "Who was the first emperor in Ancient Rome?",
        a:"Caesar Augustus",
        b:"Gaius Julius Caesar",
        c:"Mark Antony",
        d:"Hadrian",
        correct:"a"
    },
    {
        question : "How Gaius Julius Caesar was died?",
        a:"Assasinated",
        b:"Died in the battefield",
        c:"Committed suicide",
        d:"Poisoned",
        correct:"a"
    }
    
]

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");



let currentQuiz  = 0;
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

   }



function getSelected(){
    let answer = undefined
    
    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    
    return answer
}



function deselectAnswers(){
    answerEls.forEach((answerEl)=>{
        answerEl.checked = false;
    })
}

submitBtn.addEventListener("click",() => {
    
    const answer = getSelected()

        if(answer){
            if(answer === quizData[currentQuiz].correct){
                score++
            }
            currentQuiz++
            if(currentQuiz < quizData.length){
                loadQuiz()
            } else {
                quiz.innerHTML = `
                    <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                    
                    <button onclick="location.reload()">Reload</button>
                `;
            }
        }
})
