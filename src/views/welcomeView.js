import { START_QUIZ_BUTTON_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.classList.add('welkome');
  element.innerHTML = String.raw`
    <h1 class="welc">Welcome</h1>
    <button id="${START_QUIZ_BUTTON_ID}">start quiz</button>
  `;
  return element;
};
