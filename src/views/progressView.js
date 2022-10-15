'use strict';

import { quizData } from '../data.js';

export const createProgressElement = () => {
  const element = document.createElement('div');
  element.classList.add('question-number');
  element.innerHTML = String.raw`
    <p>Question ${quizData.currentQuestionIndex + 1} of ${
    quizData.questions.length
  }</p>
  `;
  return element;
};

export const createScoreElement = () => {
  const element = document.createElement('div');
  element.classList.add('score-view');
  element.innerHTML = String.raw`
  <p>Score <span id="Score">${quizData.finalScore}</span> of ${
   quizData.questions.length
  }</p>
`;

  return element;

};

export const updateScore = () => {
  const element = document.getElementById("Score")
  element.innerText = quizData.finalScore;
};

export const progressElement = () => {
  const percentage = (quizData.currentQuestionIndex / quizData.questions.length) * 100;
  const element = document.createElement ('div');

  element.innerHTML = String.raw`
    <progress class="progress-bar" max="100" value="${percentage}">
  `;


  return element;
};
