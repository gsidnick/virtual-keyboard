import KeyComponent from './KeyComponent.js';
import Component from './Component.js';
import keysData from '../data/keys.js';

class KeyboardComponent extends Component {
  constructor() {
    super('section', 'keyboard');
    this.state = {
      shift: false,
      alt: false,
      ctrl: false,
    };
    this.keyComponents = [];
    this.keysData = keysData;
    this.renderRows();
    this.initializeKeysEvent();
  }

  renderRows() {
    const rows = [
      this.renderRow1(),
      this.renderRow2(),
      this.renderRow3(),
      this.renderRow4(),
      this.renderRow5(),
    ];
    this.append(...rows);
  }

  renderRow1() {
    const keyboardRow1 = new Component('div', 'keyboard__row keyboard__row_1');
    const keys = this.keysData.row1.map((key) => {
      const keyComponent = new KeyComponent(key);
      this.addKeyComponent(keyComponent);
      return keyComponent;
    });
    keyboardRow1.append(...keys);
    return keyboardRow1;
  }

  renderRow2() {
    const keyboardRow2 = new Component('div', 'keyboard__row keyboard__row_2');
    const keys = this.keysData.row2.map((key) => {
      const keyComponent = new KeyComponent(key);
      this.addKeyComponent(keyComponent);
      return keyComponent;
    });
    keyboardRow2.append(...keys);
    return keyboardRow2;
  }

  renderRow3() {
    const keyboardRow3 = new Component('div', 'keyboard__row keyboard__row_3');
    const keys = this.keysData.row3.map((key) => {
      const keyComponent = new KeyComponent(key);
      this.addKeyComponent(keyComponent);
      return keyComponent;
    });
    keyboardRow3.append(...keys);
    return keyboardRow3;
  }

  renderRow4() {
    const keyboardRow4 = new Component('div', 'keyboard__row keyboard__row_4');
    const keys = this.keysData.row4.map((key) => {
      const keyComponent = new KeyComponent(key);
      this.addKeyComponent(keyComponent);
      return keyComponent;
    });
    keyboardRow4.append(...keys);
    return keyboardRow4;
  }

  renderRow5() {
    const keyboardRow5 = new Component('div', 'keyboard__row keyboard__row_5');
    const keys = this.keysData.row5.slice(0, -4).map((key) => {
      const keyComponent = new KeyComponent(key);
      this.addKeyComponent(keyComponent);
      return keyComponent;
    });
    const arrows = this.keysData.row5.slice(-4);
    const arrowLeft = new KeyComponent(arrows[0]);
    const arrowUp = new KeyComponent(arrows[1]);
    const arrowDown = new KeyComponent(arrows[2]);
    const arrowRight = new KeyComponent(arrows[3]);
    this.keyComponents = [...this.keyComponents, arrowLeft, arrowUp, arrowDown, arrowRight];
    const arrowGroup = new Component('div', 'keyboard__group');
    arrowGroup.append(arrowUp, arrowDown);
    keyboardRow5.append(...keys, arrowLeft, arrowGroup, arrowRight);
    return keyboardRow5;
  }

  addKeyComponent(component) {
    this.keyComponents.push(component);
  }

  initializeKeysEvent() {
    this.keyComponents.forEach((component) => {
      switch (component.key.code) {
        case 'ShiftLeft':
          component.on('click', () => console.log(component.key.code));
          break;
        case 'ShiftRight':
          component.on('click', () => console.log(component.key.code));
          break;
        case 'AltLeft':
          component.on('click', () => console.log(component.key.code));
          break;
        case 'AltRight':
          component.on('click', () => console.log(component.key.code));
          break;
        case 'ControlLeft':
          component.on('click', () => console.log(component.key.code));
          break;
        case 'ControlRight':
          component.on('click', () => console.log(component.key.code));
          break;
        case 'Backspace':
          component.on('click', () => console.log(component.key.code));
          break;
        case 'Tab':
          component.on('click', () => console.log(component.key.code));
          break;
        case 'Delete':
          component.on('click', () => console.log(component.key.code));
          break;
        case 'CapsLock':
          component.on('click', () => console.log(component.key.code));
          break;
        case 'Enter':
          component.on('click', () => console.log(component.key.code));
          break;
        case 'Space':
          component.on('click', () => console.log(component.key.code));
          break;
        case 'Meta':
          component.on('click', () => console.log(component.key.code));
          break;
        case 'ArrowLeft':
          component.on('click', () => console.log(component.key.code));
          break;
        case 'ArrowRight':
          component.on('click', () => console.log(component.key.code));
          break;
        case 'ArrowUp':
          component.on('click', () => console.log(component.key.code));
          break;
        case 'ArrowDown':
          component.on('click', () => console.log(component.key.code));
          break;
        default:
          break;
      }
    });
  }
}
export default KeyboardComponent;
