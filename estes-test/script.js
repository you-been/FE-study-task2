document.addEventListener('DOMContentLoaded', function() {

    let gender = null;
    let totalScore = 0;
    let userResponses = {};

    //참조 요소
    const container = document.querySelector('.container');
    const maleBtn = document.getElementById('male-btn');
    const femaleBtn = document.getElementById('female-btn');
    const genderFrame = document.getElementById('gender-frame');
    const resultFrame = document.getElementById('result-frame');
    const resultTitle = document.getElementById('result-title');
    const resultDescription = document.getElementById('result-description');

    maleBtn.addEventListener('click', function() {
        selectGender('male');
    });

    femaleBtn.addEventListener('click', function() {
        selectGender('female');
    });

    createQuestion();

    const resetBtn = document.getElementById('reset-btn');
    resetBtn.addEventListener('click', resetTest);

    function selectGender(selectedGender) {
        gender = selectedGender;

        if (selectedGender === 'male') {
            maleBtn.classList.add('selected');
            femaleBtn.classList.remove('selected');
        } else {
            maleBtn.classList.remove('selected');
            femaleBtn.classList.add('selected');
        }

        setTimeout(function() {
            showFrame('q1-frame');
        }, 500);
    }

    function createQuestion() {

        testData.questions.forEach((question, index) => {
            const frameId = question.id + '-frame';
            const questionNumber = index + 1;
            //현재 과정 몇퍼센트?
            const progress = (questionNumber / testData.questions.length) * 100;

            const frame = document.createElement('div');
            frame.id = frameId;
            frame.className = 'frame'

            frame.innerHTML = `
                <div id="q1-frame" class="frame">
                <div class="question-degree">
                    <div class="question-number">질문 ${questionNumber}/${testData.questions.length} </div>
                    <div class="progress-bar">
                        <div class="progress" style="width: ${progress}%;"></div>
                    </div>
                </div>
                <div class="question">
                    <h3>${questionNumber}) ${question.text}</h3>
                    <div class="options">
                       ${createOptionsHTML(question)}
                    </div>
                </div>
                <button id="${question.id}-next" class="basic-btn nav-btn" disabled>${questionNumber === testData.questions.length ? "결과 확인하기" : "다음"}</button>
            </div>
              `

            container.insertAfter(frame, genderFrame);

            setupBtnListeners(question.id, questionNumber);

            setupRadioListeners(question.id);
        })

    }

    function createOptionsHTML(question) {
        return question.options.map(option =>`
            <label class="option">
                <input type="radio" name="${question.id}" value="${option.value}"> ${option.text} (${option.score}점)
            </label>
        `).join('');
    }

    function setupRadioListeners(questionId){
        const options = document.querySelectorAll(`input[name="${questionId}""]`);
        const nextBtn = document.getElementById(`${questionId}-next`);

        options.forEach(option => {
            option.addEventListener('click', function() {
                nextBtn.disabled = 'false';

            })
        })
    }

    function setupBtnListeners(questionId, questionNumber) {
        const button = document.getElementById(`${questionId}-next`);

        button.addEventListener('click', function() {
            if(questionNumber === testData.questions.length) {
                calculateResult();
            }else {
                const nextQuestionId = testData.questions[questionNumber].id;
                showFrame(nextQuestionId + '-frame');
            }
        })
    }

    function showFrame(frame) {
        document.querySelectorAll('.frame').forEach(element => {
            element.classList.remove('active');
        })

        frame.classList.add('active');
    }

    function calculateResult() {

    };

    function resetTest() {

    };
})