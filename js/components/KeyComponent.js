import Component from './Component.js';
import { isLetterKey, isSpecialKey, isSymbolKey } from '../utils/check.js';

const EN = 'en';
const RU = 'ru';

class KeyComponent extends Component {
  constructor(key) {
    super('button', 'key');
    this.current = '';
    this.key = null;
    this.shifted = false;
    this.pressed = false;
    this.locale = EN;
    this.create(key);
  }

  create(key) {
    this.key = { ...key };
    if (isLetterKey(this.locale, this.key[this.locale].keyBase)) {
      if (this.shifted) {
        this.append(this.key[this.locale].keyShift);
      } else {
        this.append(this.key[this.locale].keyBase);
      }
    } else if (isSpecialKey(this.key[this.locale].keyShift)) {
      this.append(this.key[this.locale].keyBase);
    } else {
      const keyShiftComponent = new Component('span', 'key__shift', this.key[this.locale].keyShift);
      const keyBaseComponent = new Component('span', 'key__base', this.key[this.locale].keyBase);
      this.append(keyShiftComponent, keyBaseComponent);
    }
    this.setCurrentKey();
  }

  toggleShift() {
    this.shifted = !this.shifted;
    this.toggleShiftStyle();
    this.toggleShiftKey();
    this.setCurrentKey();
  }

  toggleShiftStyle() {
    if (this.shifted) {
      this.node.classList.add('key_shifted');
    } else {
      this.node.classList.remove('key_shifted');
    }
  }

  toggleShiftKey() {
    if (isLetterKey(this.locale, this.key[this.locale].keyBase)) {
      if (this.shifted) {
        this.node.innerHTML = this.key[this.locale].keyShift;
      } else {
        this.node.innerHTML = this.key[this.locale].keyBase;
      }
    }
  }

  togglePress() {
    this.pressed = !this.pressed;
    this.togglePressStyle();
  }

  togglePressStyle() {
    if (this.pressed) {
      this.node.classList.add('key_pressed');
    } else {
      this.node.classList.remove('key_pressed');
    }
  }

  setCurrentKey() {
    if (isLetterKey(this.locale, this.key[this.locale].keyBase)
      || isSymbolKey(this.locale, this.key[this.locale].keyBase)) {
      if (this.shifted) {
        this.current = this.key[this.locale].keyShift;
      } else {
        this.current = this.key[this.locale].keyBase;
      }
    }
  }
}

export default KeyComponent;
