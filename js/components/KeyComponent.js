import Component from './Component.js';
import { isLetterKey, isSpecialKey, isSymbolKey } from '../utils/check.js';

class KeyComponent extends Component {
  constructor(key) {
    super('button', 'key');
    this.current = null;
    this.key = null;
    this.capsed = false;
    this.shifted = false;
    this.pressed = false;
    this.locale = 'en';
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

  toggleShift(shift, capsLock, locale) {
    this.shifted = shift;
    this.capsed = capsLock;
    this.locale = locale;
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
      this.node.innerHTML = '';
      if (this.shifted) {
        if (this.capsed) {
          this.node.innerHTML = this.key[this.locale].keyBase;
        } else {
          this.node.innerHTML = this.key[this.locale].keyShift;
        }
      } else if (!this.shifted) {
        if (this.capsed) {
          this.node.innerHTML = this.key[this.locale].keyShift;
        } else {
          this.node.innerHTML = this.key[this.locale].keyBase;
        }
      }
    }
    if (isSymbolKey(this.locale, this.key[this.locale].keyBase)
      && !isSpecialKey(this.key[this.locale].keyShift)) {
      this.node.innerHTML = '';
      const keyShiftComponent = new Component('span', 'key__shift', this.key[this.locale].keyShift);
      const keyBaseComponent = new Component('span', 'key__base', this.key[this.locale].keyBase);
      this.append(keyShiftComponent, keyBaseComponent);
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

  press() {
    this.pressed = true;
    this.node.classList.add('key_pressed');
  }

  unpress() {
    this.pressed = false;
    this.node.classList.remove('key_pressed');
  }

  setCurrentKey() {
    if (isLetterKey(this.locale, this.key[this.locale].keyBase)) {
      if (this.shifted) {
        if (this.capsed) {
          this.current = this.key[this.locale].keyBase;
        } else {
          this.current = this.key[this.locale].keyShift;
        }
      } else if (!this.shifted) {
        if (this.capsed) {
          this.current = this.key[this.locale].keyShift;
        } else {
          this.current = this.key[this.locale].keyBase;
        }
      }
    }

    if (isSymbolKey(this.locale, this.key[this.locale].keyBase)
      && !isSpecialKey(this.key[this.locale].keyShift)) {
      if (this.shifted) {
        this.current = this.key[this.locale].keyShift;
      } else {
        this.current = this.key[this.locale].keyBase;
      }
    }
    if (this.key.code === 'Space'
      || this.key.code === 'ArrowUp'
      || this.key.code === 'ArrowLeft'
      || this.key.code === 'ArrowRight'
      || this.key.code === 'ArrowDown') this.current = this.key[this.locale].keyBase;
  }
}

export default KeyComponent;
