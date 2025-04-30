let currentFrame = 1; 
let currentRound = 0;
let userWins = 0;
let computerWins = 0;
let gameResult = Array(10).fill(null);

//점수판 생성함수

function createScoreTable() {
   const playerRow = document.getElementById('user-score-row');
   const computerRow = document.getElementById('computer-score-row');

   for(let i = 1; i <= 10; i++) {
      const cell = document.createElement('div');
      cell.className = 'score-cell';
      cell.setAttribute('data-index', i);
      cell.textContent = '';
      playerRow.appendChild(cell);
   }

   for(let i = 1; i <=10; i++) {
      const cell = document.createElement('div')
      cell.className = 'score-cell';
      cell.setAttribute('data-index', i);
      cell.textContent = '';
      computerRow.appendChild(cell);
   }
}

// 점수판 업데이트 함수

function updateScoreTable() {

   const userCells = document.querySelectorAll('user-score-row .score-cell');
   const computerCells = document.querySelectorAll('computer-score-row .score-row');

   for (let i = 1; i <= 10; i++) {
      if (gameResult[i] === 'win') {
         userCells[i].textContent = 'O';
         userCells[i].style.color = 'blue';
         computerCells[i].textContent = 'X';
         computerCells[i].style.color = 'red';
      } else if(gameResult[i] === 'lose') {
         userCells[i].textContent = 'X';
         userCells[i].style.color = 'red';
         computerCells[i].textContent = 'O';
         computerCells[i].style.color = 'blue';
      }else if (gameResults[i] === 'draw') {
         userCells[i].textContent = '-';
         computerCells[i].textContent = '-';
      }
   }   

}

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
      '가위' : '✌️',
      '바위' : '✊',
      '보' : '✋'
   }

   const result = checkWinner(userChoice,computerChoice);
   let resultTxt = "";

   if (result === 'win') {
      resultTxt = '이겼습니당! ^.^'
   }else if (result === 'lose') {
      resultTxt = '졌습니다! ㅜ.ㅜ'
   }else {
      resultTxt = '동점!-_-;'
   }

   gameResult[currentRound] = result;


   document.getElementById('playerPic').innerText = choiceEmojis[userChoice];
   document.getElementById('computerPic').innerText = choiceEmojis[computerChoice];
   document.getElementById('playerPicTxt').innerText = userChoice;
   document.getElementById('computerPicTxt').innerText = computerChoice;
   document.getElementById('resultTxt').innerText = resultTxt;

   currentRound++;
   showFrame(3);
}

function nextRound() {
   if (currentRound >= 10) {
      showFrame(4);
   } else{
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
      (user ==='보' && computer === '가위') ||
      (user === '가위' && computer === '바위') ||
      (user === '바위' && computer === '보')
   ) {
      return 'lose';
   } else {
      return 'win';
   }
}

function gameReset() {

   currentRound = 0;

   showFrame(1);
}