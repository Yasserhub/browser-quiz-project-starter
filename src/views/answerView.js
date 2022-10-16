/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');
  element.innerHTML = String.raw`
    <button class="answers">${answerText}</button>
  `;

  return element;
};

export const answerButtonDisable = () => {
  const buttonDeActivation = document.querySelectorAll('.answers');
  buttonDeActivation.forEach((buttonDeactive) => {
    buttonDeactive.disabled = true;
  });
};

export const hightlightRightAnswer = (rightAnswer) => {
  rightAnswer.classList.add('selected-green');
};
