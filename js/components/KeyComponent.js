import Component from './Component.js';
import { keysEn } from '../data/keys.js';

class KeyComponent extends Component {
  constructor(key) {
    super('button', 'key');
    this.shifted = null;
    this.pressed = null;
    this.alphabet = keysEn.alphabet;
    this.toggleShift();
    this.togglePress();
    this.create(key);
  }

  create(key) {
    if (Array.isArray(key)) {
      const [keyShift, keyBase] = key;
      this.key = { keyShift, keyBase };
      if (this.alphabet.split('').includes(key[0].toLowerCase())) {
        if (this.shifted) {
          this.append(this.key.keyShift);
        } else {
          this.append(this.key.keyBase);
        }
      } else {
        const keyShiftComponent = new Component('span', 'key__shift', this.key.keyShift);
        const keyBaseComponent = new Component('span', 'key__base', this.key.keyBase);
        this.append(keyShiftComponent, keyBaseComponent);
      }
    }
    if (typeof key === 'string') this.append(key);
  }

  toggleShift() {
    if (this.shifted === null) {
      this.shifted = false;
    } else {
      this.shifted = !this.shifted;
      this.setShiftStyle();
    }
  }

  setShiftStyle() {
    if (this.shifted) {
      this.node.classList.add('key_shifted');
    } else {
      this.node.classList.remove('key_shifted');
    }
  }

  togglePress() {
    if (this.pressed === null) {
      this.pressed = false;
    } else {
      this.pressed = !this.pressed;
    }
  }

  setPressStyle() {
    if (this.pressed) {
      this.node.classList.add('key_pressed');
    } else {
      this.node.classList.remove('key_pressed');
    }
  }
}

export default KeyComponent;
