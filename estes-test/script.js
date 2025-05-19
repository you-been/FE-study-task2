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
                <div class="question-degree">
                    <div class="question-number">질문 ${questionNumber}/${testData.questions.length} </div>
                    <div class="progress-bar">
                        <div class="progress" style="width: ${progress}%;"></div>
                    </div>
                </div>
                <div class="question">
                    <h3> ${question.text}</h3>
                    <div class="options">
                       ${createOptionsHTML(question)}
                    </div>
                </div>
                <button id="${question.id}-next" class="basic-btn nav-btn" disabled>${questionNumber === testData.questions.length ? "결과 확인하기" : "다음"}</button>
              `

            container.insertBefore(frame, resultFrame);

            setupBtnListeners(question.id, questionNumber);

            setupRadioListeners(question.id);
        })

    }

    function createOptionsHTML(question) {
        return question.options.map(option =>`
            <label class="option">
                <input type="radio" name="${question.id}" value="${option.score}"> ${option.text} (${option.score}점)
                <span class="checkmark"></span>
            </label>
        `).join('');
    }

    function setupRadioListeners(questionId){
        const options = document.querySelectorAll(`input[name="${questionId}"]`);
        const nextBtn = document.getElementById(`${questionId}-next`);

        options.forEach(option => {
            option.addEventListener('change', function() {
                nextBtn.disabled = false;

            userResponses[questionId] = {
                value: this.value,
                score: parseInt(this.value)    
            }
            })
        })
    }

    function setupBtnListeners(questionId, questionNumber) {
        const button = document.getElementById(`${questionId}-next`);

        button.addEventListener('click', function() {
            if(userResponses[questionId]) {
                totalScore += userResponses[questionId].score;
            }

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

        const targetFrame = document.getElementById(frame);

        targetFrame.classList.add('active');
    }

    function calculateResult() {
        showFrame('result-frame');

        const resultData = determineResult(gender, totalScore);

        resultTitle.textContent = resultData.title;
        resultDescription.textContent = resultData.description;

        if(Array.isArray(resultData.description)) {
            resultDescription.innerHTML = '';
            const resultUl = document.createElement('ul');
            resultData.description.forEach(item => {
                const resultLi = document.createElement('li');
                resultLi.textContent = item;
                resultUl.appendChild(resultLi);
            })
            resultDescription.appendChild(resultUl);
        }else {
            resultDescription.textContent = resultData.description;
        }

    };

    function determineResult(gender, score) {

        let resultKey;

        if (gender === 'male') {
            resultKey = score >= 25 ? "egen_male" : "teto_male";
        }else if(gender === 'female'){
            resultKey = score >= 25 ? "egen_female" : "teto_female";
        }else {
            return {
                title: "결과를 알 수 없습니다.",
                description: "성별 정보가 없습니다. 다시 테스트 해주세요."
            }
        }

        return testData.results[resultKey];
    }

    function resetTest() {

        gender = null;
        totalScore = 0;
        userResponses = {};

        maleBtn.classList.remove('selected');
        femaleBtn.classList.remove('selected');

        document.querySelectorAll('.next-btn').forEach(btn => {
            btn.disabled = 'true';
        });

        document.querySelectorAll('input[type="radio"]').forEach(radio => {
            radio.cheked = false;
        })

        showFrame('gender-frame');
    };
})