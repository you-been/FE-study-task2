document.addEventListener('DOMContentLoaded', function () {

    let gender = null;
    let totalScore = 0;

    //프레임
    const genderFrame = document.getElementById('gender-frame');
    const q1Frame = document.getElementById('q1-frame');
    const q2Frame = document.getElementById('q2-frame');
    const q3Frame = document.getElementById('q3-frame');
    const q4Frame = document.getElementById('q4-frame');
    const q5Frame = document.getElementById('q5-frame');
    const q6Frame = document.getElementById('q6-frame');
    const q7Frame = document.getElementById('q7-frame');
    const q8Frame = document.getElementById('q8-frame');
    const q9Frame = document.getElementById('q9-frame');
    const q10Frame = document.getElementById('q10-frame');
    const resultFrame = document.getElementById('result-frame');

    //버튼
    const maleBtn = document.getElementById('male-btn');
    const femaleBtn = document.getElementById('female-btn');
    const q1NextBtn = document.getElementById('q1-next');
    const q2NextBtn = document.getElementById('q2-next');
    const q3NextBtn = document.getElementById('q3-next');
    const q4NextBtn = document.getElementById('q4-next');
    const q5NextBtn = document.getElementById('q5-next');
    const q6NextBtn = document.getElementById('q6-next');
    const q7NextBtn = document.getElementById('q7-next');
    const q8NextBtn = document.getElementById('q8-next');
    const q9NextBtn = document.getElementById('q9-next');
    const submitBtn = document.getElementById('submit-btn');
    const resetBtn = document.getElementById('reset-btn');

    //결과요소
    const resultTitle = document.getElementById('result-title');
    const resultDescription = document.getElementById('result-description');

    maleBtn.addEventListener('click', function() {
        selectGender('male');
    });

    femaleBtn.addEventListener('click', function() {
        selectGender('female');
    });

    function selectGender (selectedGender) {
        gender = selectedGender;

        if (selectedGender === 'male') {
            maleBtn.classList.add('selected');
            femaleBtn.classList.remove('selected');
        }else {
            maleBtn.classList.remove('selected');
            femaleBtn.classList.add('selected');
        }

        setTimeout(function() {
            showFrame(q1Frame);
        }, 500);
    }

    function showFrame(frame) {
        document.querySelectorAll('.frame').forEach(element => {
            element.classList.remove('active');
        })

        frame.classList.add('active');
    }
})