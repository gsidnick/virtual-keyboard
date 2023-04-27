import KeyComponent from './KeyComponent.js';
import Component from './Component.js';
import keysData from '../data/keys.js';

const EN = 'en';
const RU = 'ru';

class KeyboardComponent extends Component {
  constructor() {
    super('section', 'keyboard');
    this.state = {
      shift: false,
      capsLock: false,
      locale: EN,
    };
    this.textbox = null;
    this.keyComponents = {};
    this.keysData = keysData;
    this.renderRows();
    this.initializeKeysEvent();
    this.initializeKeydownEvent();
    this.initializeKeyupEvents();
    window.addEventListener('load', () => {
      this.textbox.node.focus();
    });
    window.addEventListener('blur', () => {
      Object.keys(this.keyComponents).forEach((key) => {
        this.keyComponents[key].unpress();
      });
    });
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
    this.keyComponents[arrowLeft.key.code] = arrowLeft;
    this.keyComponents[arrowUp.key.code] = arrowUp;
    this.keyComponents[arrowDown.key.code] = arrowDown;
    this.keyComponents[arrowRight.key.code] = arrowRight;
    const arrowGroup = new Component('div', 'keyboard__group');
    arrowGroup.append(arrowUp, arrowDown);
    keyboardRow5.append(...keys, arrowLeft, arrowGroup, arrowRight);
    return keyboardRow5;
  }

  addKeyComponent(component) {
    this.keyComponents[component.key.code] = component;
  }

  shiftHandler() {
    this.state.shift = !this.state.shift;
    this.renderKeys();
  }

  capsLockHandler(component) {
    this.state.capsLock = !this.state.capsLock;
    this.renderKeys();
    component.togglePress();
  }

  tabHandler() {
    this.textbox.setValue('\t');
  }

  enterHandler() {
    this.textbox.setValue('\n');
  }

  symbolHandler(component) {
    this.textbox.setValue(component.current);
  }

  backspaceHandler() {
    this.textbox.clearLeft();
  }

  deleteHandler() {
    this.textbox.clearRight();
  }

  renderKeys() {
    Object.keys(this.keyComponents).forEach((key) => {
      const component = this.keyComponents[key];
      component.toggleShift(this.state.shift, this.state.capsLock, this.state.locale);
    });
  }

  toggleLocale() {
    if (this.state.locale === EN) {
      this.state.locale = RU;
    } else {
      this.state.locale = EN;
    }
  }

  initializeKeysEvent() {
    Object.keys(this.keyComponents).forEach((key) => {
      const component = this.keyComponents[key];
      switch (key) {
        case 'ShiftLeft':
          component.on('mousedown', this.shiftHandler.bind(this));
          component.on('mouseup', this.shiftHandler.bind(this));
          break;
        case 'ShiftRight':
          component.on('mousedown', this.shiftHandler.bind(this));
          component.on('mouseup', this.shiftHandler.bind(this));
          break;
        case 'AltLeft':
          break;
        case 'AltRight':
          break;
        case 'ControlLeft':
          break;
        case 'ControlRight':
          break;
        case 'Backspace':
          break;
        case 'Tab':
          break;
        case 'Delete':
          component.on('mousedown', this.deleteHandler.bind(this));
          break;
        case 'CapsLock':
          component.on('mousedown', this.capsLockHandler.bind(this, component));
          break;
        case 'Enter':
          component.on('mousedown', this.enterHandler.bind(this));
          break;
        case 'Space':
          component.on('mousedown', this.symbolHandler.bind(this, component));
          break;
        case 'Meta':
          break;
        case 'ArrowLeft':
          component.on('click', this.symbolHandler.bind(this, component));
          break;
        case 'ArrowRight':
          component.on('click', this.symbolHandler.bind(this, component));
          break;
        case 'ArrowUp':
          component.on('click', this.symbolHandler.bind(this, component));
          break;
        case 'ArrowDown':
          component.on('click', this.symbolHandler.bind(this, component));
          break;
        default:
          component.on('click', this.symbolHandler.bind(this, component));
          break;
      }
    });
  }

  initializeKeydownEvent() {
    window.addEventListener('keydown', (event) => {
      event.preventDefault();
      if (event.altKey && event.ctrlKey) {
        this.toggleLocale();
        this.renderKeys();
      }
      switch (event.code) {
        case 'ShiftLeft':
          if (event.repeat) return;
          this.shiftHandler.call(this, ...[this.keyComponents[event.code]]);
          this.keyComponents[event.code].press();
          break;
        case 'ShiftRight':
          if (event.repeat) return;
          this.shiftHandler.call(this, ...[this.keyComponents[event.code]]);
          this.keyComponents[event.code].press();
          break;
        case 'AltLeft':
          if (event.repeat) return;
          this.keyComponents[event.code].press();
          break;
        case 'AltRight':
          if (event.repeat) return;
          this.keyComponents[event.code].press();
          break;
        case 'ControlLeft':
          if (event.repeat) return;
          this.keyComponents[event.code].press();
          break;
        case 'ControlRight':
          if (event.repeat) return;
          this.keyComponents[event.code].press();
          break;
        case 'Backspace':
          this.backspaceHandler.call(this, ...[this.keyComponents[event.code]]);
          this.keyComponents[event.code].press();
          break;
        case 'Tab':
          this.tabHandler.call(this, ...[this.keyComponents[event.code]]);
          this.keyComponents[event.code].press();
          break;
        case 'Delete':
          this.deleteHandler.call(this, ...[this.keyComponents[event.code]]);
          this.keyComponents[event.code].press();
          break;
        case 'CapsLock':
          if (event.repeat) return;
          this.capsLockHandler.call(this, ...[this.keyComponents[event.code]]);
          break;
        case 'Enter':
          this.enterHandler.call(this, ...[this.keyComponents[event.code]]);
          this.keyComponents[event.code].press();
          break;
        case 'Space':
          this.symbolHandler.call(this, ...[this.keyComponents[event.code]]);
          this.keyComponents[event.code].press();
          break;
        case 'Meta':
          this.keyComponents[event.code].press();
          break;
        case 'ArrowLeft':
          this.symbolHandler.call(this, ...[this.keyComponents[event.code]]);
          this.keyComponents[event.code].press();
          break;
        case 'ArrowRight':
          this.symbolHandler.call(this, ...[this.keyComponents[event.code]]);
          this.keyComponents[event.code].press();
          break;
        case 'ArrowUp':
          this.symbolHandler.call(this, ...[this.keyComponents[event.code]]);
          this.keyComponents[event.code].press();
          break;
        case 'ArrowDown':
          this.symbolHandler.call(this, ...[this.keyComponents[event.code]]);
          this.keyComponents[event.code].press();
          break;
        default:
          this.symbolHandler.call(this, ...[this.keyComponents[event.code]]);
          this.keyComponents[event.code].press();
          break;
      }
    });
  }

  initializeKeyupEvents() {
    window.addEventListener('keyup', (event) => {
      event.preventDefault();
      switch (event.code) {
        case 'ShiftLeft':
          this.shiftHandler.call(this, ...[this.keyComponents[event.code]]);
          this.keyComponents[event.code].unpress();
          break;
        case 'ShiftRight':
          this.shiftHandler.call(this, ...[this.keyComponents[event.code]]);
          this.keyComponents[event.code].unpress();
          break;
        case 'AltLeft':
          this.keyComponents[event.code].unpress();
          break;
        case 'AltRight':
          this.keyComponents[event.code].unpress();
          break;
        case 'ControlLeft':
          this.keyComponents[event.code].unpress();
          break;
        case 'ControlRight':
          this.keyComponents[event.code].unpress();
          break;
        case 'Backspace':
          this.keyComponents[event.code].unpress();
          break;
        case 'Tab':
          this.keyComponents[event.code].unpress();
          break;
        case 'Delete':
          this.keyComponents[event.code].unpress();
          break;
        case 'CapsLock':
          break;
        case 'Enter':
          this.keyComponents[event.code].unpress();
          break;
        case 'Space':
          this.keyComponents[event.code].unpress();
          break;
        case 'Meta':
          this.keyComponents[event.code].unpress();
          break;
        case 'ArrowLeft':
          this.keyComponents[event.code].unpress();
          break;
        case 'ArrowRight':
          this.keyComponents[event.code].unpress();
          break;
        case 'ArrowUp':
          this.keyComponents[event.code].unpress();
          break;
        case 'ArrowDown':
          this.keyComponents[event.code].unpress();
          break;
        default:
          this.keyComponents[event.code].unpress();
          break;
      }
    });
  }
}

export default KeyboardComponent;
