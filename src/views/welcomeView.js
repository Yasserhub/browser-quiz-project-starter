import { START_QUIZ_BUTTON_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    <h1 class="welc">Welcome</h1>
    <button id="${START_QUIZ_BUTTON_ID}">start quiz</button>
  `;
  element.classList.add('welkome');
  element.style.cssText = 'width:50%; margin:auto; text-align:center';
  return element;
};
