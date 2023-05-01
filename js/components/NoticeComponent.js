import Component from './Component.js';

class NoticeComponent extends Component {
  constructor() {
    super('section', 'notice');
    const title = new Component('h4', 'notice__title', 'Windows OS keyboard key card');
    const row = new Component('div', 'notice__row');
    const row2 = new Component('div', 'notice__row');
    const plus = new Component('span', 'notice__symbol', '+');
    const ctrlKey = new Component('span', 'notice__key', 'Ctrl');
    const altKey = new Component('span', 'notice__key', 'Alt');
    const text = new Component('span', 'notice__text', 'language switching (RU, EN)');
    const ctrlKey2 = new Component('span', 'notice__key', 'Ctrl');
    const plus2 = new Component('span', 'notice__symbol', '+');
    const KeyA = new Component('span', 'notice__key', 'A');
    const text2 = new Component('span', 'notice__text', 'select all text');
    this.append(
      title,
      row.append(ctrlKey, plus, altKey, text),
      row2.append(ctrlKey2, plus2, KeyA, text2),
    );
  }
}

export default NoticeComponent;
