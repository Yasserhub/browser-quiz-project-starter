import { createFinalSummaryElement } from '../views/finalView.js';
import { quizData } from '../data.js';

export const selectAnswerVariant = (selectedElement, rightAnswer) => {
  if (selectedElement === rightAnswer) {
    selectedElement.classList.add('selected-green');
    quizData.finalScore++;
  } else {
    selectedElement.classList.add('selected-red');
    rightAnswer.classList.add('border');
  }
};
