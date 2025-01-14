import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';
import { initQuestionPage } from './pages/questionPage.js';

const loadApp = () => {
  const storedQuestionNumber = JSON.parse(
    localStorage.getItem('questionNumber')
  );
  const storedScoreNumber = JSON.parse(localStorage.getItem('scoreNumber'));

  if (storedQuestionNumber === null) {
    quizData.currentQuestionIndex = 0;
    quizData.finalScore = 0;

    initWelcomePage();
  } else {
    quizData.currentQuestionIndex = storedQuestionNumber;
    quizData.finalScore = storedScoreNumber;

    initQuestionPage();
  }
};

window.addEventListener('load', loadApp);
