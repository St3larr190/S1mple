var questions = [
    {
        question: "Питання 1",
        answers: {
            1: 'Неправильна відповідь',
            2: 'Правильна відповідь',
            3: 'Неправильна відповідь',
            4: 'Неправильна відповідь',
        },
        rightAnswer: '2'
    },

    {
        question: "Питання 2",
        answers: {
            1: 'Неправильна відповідь',
            2: 'Неправильна відповідь',
            3: 'Правильна відповідь',
            4: 'Неправильна відповідь',
        },
        rightAnswer: '3'
    },

    {
        question: "Питання 3",
        answers: {
            1: 'Неправильна відповідь',
            2: 'Неправильна відповідь',
            3: 'Неправильна відповідь',
            4: 'Правильна відповідь',
        },
        rightAnswer: '4'
    },

    {
        question: "Питання 4",
        answers: {
            1: 'Правильна відповідь',
            2: 'Неправильна відповідь',
            3: 'Неправильна відповідь',
            4: 'Неправильна відповідь',
        },
        rightAnswer: '1'
    },

    {
        question: "Питання 5",
        answers: {
            1: 'Неправильна відповідь',
            2: 'Правильна відповідь',
            3: 'Неправильна відповідь',
            4: 'Неправильна відповідь',
        },
        rightAnswer: '2'
    },
    {
        question: "Питання 5",
        answers: {
            1: 'Неправильна відповідь',
            2: 'Правильна відповідь',
            3: 'Неправильна відповідь',
            4: 'Неправильна відповідь',
        },
        rightAnswer: '4'
    }
];


var testContainer = document.getElementById('test');
var resultButton = document.getElementById("resultButton");
var resultsConteiner = document.getElementById("results");

generateTest(questions, testContainer, resultButton, resultsConteiner);

function generateTest(questions, testContainer, resultButton, resultsConteiner){
    
    function showQuestions(questions, testContainer){
        var out = [];
        var answer;

        for(var i=0; i<questions.length;i++){
            answers = [];
            for(var ans_text in questions[i].answers){
                answers.push(
                    '<label><br><input type ="radio" name="question'+i+'" value="'+ans_text+'">'+ans_text+') '+questions[i].answers[ans_text]+'</label>'
                );
            }
            out.push(
                '<div class="question">'+questions[i].question+'</div>'+'<div class="answers">'+answers.join('')+'</div>'
            );
        }
        testContainer.innerHTML = out.join('');
    }


    function showResults(questions, testContainer, resultsConteiner) {
        var answerConteiners = testContainer.querySelectorAll('.answers');
    
        var userAnswer = '';
        var rightAnswerNum = 0;
    
        for (var i = 0; i < questions.length; i++) {
          userAnswer = (answerConteiners[i].querySelector('input[name=question' + i + ']:checked') || {}).value;
    
          if (userAnswer == questions[i].rightAnswer) {
            answerConteiners[i].style.color = 'green';
            rightAnswerNum++;
          } else {
            answerConteiners[i].style.color = 'red';
          }
        }
        var resultsString

        if(rightAnswerNum<3){
            resultsString = "Незадовільно";
        }else if (rightAnswerNum == 3){
            resultsString = "Треба повторити";
        }else if (rightAnswerNum == 4){
            resultsString = "Добре";
        }else if (rightAnswerNum == 5){
            resultsString = "Відмінно";
        }

        resultsConteiner.innerHTML = resultsString;
    }


    showQuestions(questions, testContainer);
    
    resultButton.onclick = function() {
        showResults(questions, testContainer, resultsConteiner);
    }
    
}
    