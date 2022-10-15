import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { showNextQuestionButton } from '../views/questionView.js';
import { answerButtonDisable } from '../views/answerView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { createProgressElement } from '../views/progressView.js';
import { selectAnswerVariant } from '../views/selectedAnswerView.js';
import { finalSummaryPage } from '../pages/finalPage.js';

import { updateScore } from '../views/progressView.js';
import { createScoreElement } from '../views/progressView.js';
import { progressElement } from '../views/progressView.js';

let rightAnswer;
let timeoutID;

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);
  userInterface.appendChild(questionElement);

  const progressBlock = createProgressElement();
  userInterface.appendChild(progressBlock);

  const scoreOfCorrectAnswers = createScoreElement();
  userInterface.appendChild(scoreOfCorrectAnswers);

  const progressTage = progressElement();
  userInterface.appendChild(progressTage);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);

    answerElement.addEventListener('click', selectedAnswer);

    if (key === currentQuestion.correct) {
      rightAnswer = answerElement;
    }
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);

  timeoutID = setTimeout(() => {
    showNextQuestionButton();
    answerButtonDisable();
    clearTimeout(timeoutID);
  }, 15000);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
  localStorage.setItem(
    'questionNumber',
    JSON.stringify(quizData.currentQuestionIndex)
  );

  if (quizData.currentQuestionIndex === quizData.questions.length) {
    finalSummaryPage();
    localStorage.clear();
    return;
  }

  initQuestionPage();
};

export function selectedAnswer() {
  clearTimeout(timeoutID);
  selectAnswerVariant(this, rightAnswer);
  showNextQuestionButton();
  answerButtonDisable();
  updateScore();
}
