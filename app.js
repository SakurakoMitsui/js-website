console.log
const quiz = [
  {
    question: 'log10 = ?',
    answers: ['0', '1', '2', '10'],
    correct: '1'
  },{
    question: '男はきれいなシャツを毎日着たいので、1日ごとにきれいなシャツに着替えます。男は洗濯が面倒に感じているので、毎週月曜日にクリーニング店へ行き、今週1週間分のシャツをクリーニングに出し、先週出しておいた分のシャツを受け取ります。男には最低何枚のシャツが必要でしょうか？',
    answers: ['7', '14', '15', '16'],
    correct: '15'
  },{
    question: '日本の首都は？',
    answers: ['阿佐ヶ谷', '大阪', '東京' ,'京都'],
    correct: '東京'
  },{
    question: 'TXTのデビュー日は？',
    answers: ['3/4', '10/27', '8/14', '1/20'],
    correct: '3/4'
  },{
    question: 'ニコラスについて誤った情報を選びなさい',
    answers:['7/9生まれ', '日本語と韓国語と中国語が喋れる', 'ブス', '最近デビューした'],
    correct: 'ブス'
  },{
    question:'「ハリセンボン」の針は実際は何本あるでしょうか？',
    answers:['約150本', '約400本', '約600本', '約1000本'],
    correct: '約400本'
  },{
    question:'Mr.Bowman is',
    answers:['nice', 'short', 'ugly', '?'],
    correct: 'nice'
  }
];
const quizLength = quiz.length;
let quizIndex = 0;
let score =0;

const $button =document.getElementsByTagName('button');
const buttonLength = $button.length;
//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
  $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
  buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解!');
    score++;
  } else {
    window.alert('残念...'); 
  }

  quizIndex++;
  if(quizIndex < quizLength){
     setupQuiz();
  } else{
     window.alert('終了! You got' + score + 'out of 7!');
  }
}

clickHandler(e);

//ボタンをクリックしたら正誤判定する
let handlerIndex = 0;
while(handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click', (e) =>{
    clickHandler
  });
  handlerIndex++;
}

