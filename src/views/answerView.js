/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');

  element.innerHTML = String.raw`
    <button class="answers" id=${key}>${key}: ${answerText}</button>
`;
  return element;
};

export const answerButtonDisable = () => {
  const buttonDeActivation= document.querySelectorAll('.answers');
  buttonDeActivation.forEach((buttonDeactive) => {
   buttonDeactive.disabled=true;
  });
};