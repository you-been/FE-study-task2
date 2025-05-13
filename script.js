let currentFrame = 1;
let currentRound = 0;
let userWins = 0;
let computerWins = 0;
let gameResult = Array(10).fill(null);

//점수판 생성함수

function createScoreTable() {
    const playerRow = document.getElementById('player-score-row');
    const computerRow = document.getElementById('computer-score-row');

    if (playerRow.querySelectorAll('.score-cell').length === 0) {
        for (let i = 1; i <= 10; i++) {
            const cell = document.createElement('div');
            cell.className = 'score-cell';
            cell.setAttribute('data-index', i);
            cell.textContent = '';
            playerRow.appendChild(cell);
        }
    }

    if (computerRow.querySelectorAll('.score-cell').length === 0) {
        for (let i = 1; i <= 10; i++) {
            const cell = document.createElement('div');
            cell.className = 'score-cell';
            cell.setAttribute('data-index', i);
            cell.textContent = '';
            computerRow.appendChild(cell);
        }
    }
}

// 점수판 업데이트 함수

function updateScoreTable() {

    const scoreTables = document.querySelectorAll('.score-table');

    scoreTables.forEach(table => {
        const userCells = table.querySelectorAll('#player-score-row .score-cell');
        const computerCells = table.querySelectorAll('#computer-score-row .score-cell');

         // 셀 초기화
        userCells.forEach(cell => {
            cell.textContent = '';
            cell.style.color = '';
        });

        computerCells.forEach(cell => {
            cell.textContent = '';
            cell.style.color = '';
        });


        for (let i = 0; i <= 10; i++) {

            const userCell = userCells[i];
            const computerCell = computerCells[i];

            if (userCell && computerCell) {
                if (gameResult[i] === 'win') {
                    userCell.textContent = 'O';
                    userCell.style.color = 'blue';
                    computerCell.textContent = 'X';
                    computerCell.style.color = 'red';
                } else if (gameResult[i] === 'lose') {
                    userCell.textContent = 'X';
                    userCell.style.color = 'red';
                    computerCell.textContent = 'O';
                    computerCell.style.color = 'blue';
                } else if (gameResult[i] === 'draw') {
                    userCell.textContent = '-';
                    computerCell.textContent = '-';
                }
            }
        }

    })

    console.log(gameResult)
}

//점수판 각 프레임(2-4)에 복사하여 삽입
function copyScoreTable() {
    const scoreTableToCopy = document.getElementById('score-table');

    const pasteFrames = document.querySelectorAll('.frame');

    pasteFrames.forEach(frame => {

        if (frame.id === 'frame1' || frame.id === 'frame4') {
            return;
        }

        //깊은 복사본 생성
        const scoreTableClone = scoreTableToCopy.cloneNode(true);

        frame.appendChild(scoreTableClone);
    })
}

document.addEventListener('DOMContentLoaded', function() {
    createScoreTable();
    copyScoreTable();
    updateScoreTable();
});


// 프레임 변환 함수

function showFrame(frameNumber) {
    const frames = document.querySelectorAll(".frame");

    frames.forEach(frame => {
        frame.classList.remove('active');
    })

    document.getElementById('frame' + frameNumber).classList.add('active');
    currentFrame = frameNumber;

}

function selectChoice(choice) {
    userChoice = choice;
    computerChoice = getComputerChoice();

    const choiceEmojis = {
        '가위': '✌️',
        '바위': '✊',
        '보': '✋'
    }

    const result = checkWinner(userChoice, computerChoice);
    let resultTxt = "";

    if (result === 'win') {
        resultTxt = '이겼습니당! ^.^'
    } else if (result === 'lose') {
        resultTxt = '졌습니다! ㅜ.ㅜ'
    } else {
        resultTxt = '비겼습니다!-_-;'
    }

    gameResult[currentRound] = result;

    // 점수판 업데이트 호출 추가
    updateScoreTable();


    document.getElementById('playerPic').innerText = choiceEmojis[userChoice];
    document.getElementById('computerPic').innerText = choiceEmojis[computerChoice];
    document.getElementById('playerPicTxt').innerText = userChoice;
    document.getElementById('computerPicTxt').innerText = computerChoice;
    document.getElementById('resultTxt').innerText = resultTxt;

    currentRound++;

    const nextBtn = document.querySelector('.btn-next');

    if (currentRound === 10) {
      nextBtn.textContent = '결과보기';
    }else {
      nextBtn.textContent = '다음게임';
    }

    showFrame(3);
}

function nextRound() {  

    if (currentRound >= 10) {
         prepareResult();
        showFrame(4);
    } else {
        showFrame(2)
    }
}

function getComputerChoice() {
    const choices = ['가위', '바위', '보'];
    const randomIndex = Math.floor(Math.random() * 3);

    return choices[randomIndex];
}

function checkWinner(user, computer) {
    if (user === computer) {
        return 'draw';
    } else if (
        (user === '보' && computer === '가위') ||
        (user === '가위' && computer === '바위') ||
        (user === '바위' && computer === '보')
    ) {
        return 'lose';
    } else {
        return 'win';
    }
}

function prepareResult() {
   let winCount = 0;
   let loseCount = 0;
   let drawCount = 0;

   const  resultBubble = document.querySelector('.final-result .speech-bubble')
const winnerDeco = document.querySelector('.winner-deco');

   gameResult.forEach(result => {
      if (result === 'win') {
         winCount++;
      }else if(result === 'lose') {
         loseCount++;
      }else if(result === 'draw'){
         drawCount++;
      }})

   resultBubble.textContent = '';

   if(winCount > loseCount) {
    winnerDeco.style.display = 'block';
        resultBubble.innerHTML = '사용자님의 최종<br> 승리 입니다요! ^.^'
   }else if(winCount < loseCount) {
        winnerDeco.style.display = 'none';
      resultBubble.innerHTML = '사용자님의 최종<br> 패배 입니다요! ㅜ.ㅜ'
   }else {
        winnerDeco.style.display = 'none';
      resultBubble.innerHTML = '동도로동점!<br> 다시 승부 ㄱ?'
   }
}



function gameReset() {
    currentRound = 0;
    gameResult = Array(10).fill(null); // 게임 결과 초기화
    updateScoreTable(); // 점수판 초기화
    showFrame(1);
}