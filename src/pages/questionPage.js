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

let rightAnswer;

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);
  userInterface.appendChild(questionElement);

  const progressBlock = createProgressElement();
  userInterface.appendChild(progressBlock);

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
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
  initQuestionPage(); 
  //
  if (quizData.currentQuestionIndex === quizData.questions.length - 1) {
    //localStorage.clear();
    finalSummaryPage();
    return;
  } 
};

export function selectedAnswer() {
  selectAnswerVariant(this, rightAnswer);
  showNextQuestionButton();
  answerButtonDisable();
}
