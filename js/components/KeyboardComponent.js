import KeyComponent from './KeyComponent.js';
import Component from './Component.js';
import { keysEn } from '../data/keys.js';

class KeyboardComponent extends Component {
  constructor() {
    super('section', 'keyboard');
    this.keys = keysEn;
    this.keyboardRow1 = new Component('div', 'keyboard__row keyboard__row_1');
    this.keyboardRow2 = new Component('div', 'keyboard__row keyboard__row_2');
    this.keyboardRow3 = new Component('div', 'keyboard__row keyboard__row_3');
    this.keyboardRow4 = new Component('div', 'keyboard__row keyboard__row_4');
    this.keyboardRow5 = new Component('div', 'keyboard__row keyboard__row_5');
    this.renderRow1();
    this.renderRow2();
    this.renderRow3();
    this.renderRow4();
    this.renderRow5();
    const rows = [
      this.keyboardRow1,
      this.keyboardRow2,
      this.keyboardRow3,
      this.keyboardRow4,
      this.keyboardRow5];
    this.append(...rows);
  }

  renderRow1() {
    const additionKey = [
      ['*', '8'],
      ['(', '9'],
      [')', '0'],
      ['_', '-'],
      ['+', '='],
      'Backspace',
    ];
    const keyPart1 = this.keys.row1.map((key) => new KeyComponent(key));
    const keyPart2 = additionKey.map((key) => new KeyComponent(key));
    this.keyboardRow1.append(...keyPart1, ...keyPart2);
  }

  renderRow2() {
    const tab = new KeyComponent('Tab');
    const row2 = this.keys.row2.map((key) => new KeyComponent(key));
    const del = new KeyComponent('Del');
    this.keyboardRow2.append(tab, ...row2, del);
  }

  renderRow3() {
    const capsLock = new KeyComponent('Caps Lock');
    const row3 = this.keys.row3.map((key) => new KeyComponent(key));
    const enter = new KeyComponent('Enter');
    this.keyboardRow3.append(capsLock, ...row3, enter);
  }

  renderRow4() {
    const shiftLeft = new KeyComponent('Shift');
    const row4 = this.keys.row4.map((key) => new KeyComponent(key));
    const shiftRight = new KeyComponent('Shift');
    this.keyboardRow4.append(shiftLeft, ...row4, shiftRight);
  }

  renderRow5() {
    const ctrlLeft = new KeyComponent('Ctrl');
    const win = new KeyComponent('Win');
    const altLeft = new KeyComponent('Alt');
    const space = new KeyComponent('');
    const altRight = new KeyComponent('Alt');
    const ctrlRight = new KeyComponent('Ctrl');
    const arrowLeft = new KeyComponent('◄');
    const arrowRight = new KeyComponent('►');
    const arrowUp = new KeyComponent('▲');
    const arrowDown = new KeyComponent('▼');
    const arrowGroup = new Component('div', 'keyboard__group');
    arrowGroup.append(arrowUp, arrowDown);
    const keys = [
      ctrlLeft, win, altLeft, space, altRight, ctrlRight, arrowLeft, arrowGroup, arrowRight,
    ];
    this.keyboardRow5.append(...keys);
  }
}

export default KeyboardComponent;
