import Component from './Component.js';

class TextboxComponent extends Component {
  constructor() {
    super('textarea', 'textbox__field');
    this.value = '';
    this.initializeTextboxEvents();
  }

  setValue(value) {
    const start = this.node.selectionStart;
    const end = this.node.selectionEnd;
    const deleteCount = end - start !== 0 ? end - start : 1;
    const temp = this.value.split('');
    if (start === end) {
      temp.splice(start, 0, value);
    } else {
      temp.splice(start, deleteCount, value);
    }
    this.value = temp.join('');
    this.renderValue();
    this.node.setSelectionRange(start + 1, start + 1);
  }

  clearLeft() {
    const start = this.node.selectionStart;
    const end = this.node.selectionEnd;
    const temp = this.value.split('');
    const deleteCount = end - start !== 0 ? end - start : 1;
    if (start === 0 && start === end) return;
    if (start !== end) {
      temp.splice(start, deleteCount);
      this.value = temp.join('');
      this.renderValue();
      this.node.setSelectionRange(start, start);
    } else {
      temp.splice(start - 1, deleteCount);
      this.value = temp.join('');
      this.renderValue();
      this.node.setSelectionRange(start - 1, start - 1);
    }
  }

  clearRight() {
    const start = this.node.selectionStart;
    const end = this.node.selectionEnd;
    const value = this.value.split('');
    const deleteCount = end - start !== 0 ? end - start : 1;
    if (start === this.value.length) this.node.focus();
    value.splice(start, deleteCount);
    this.value = value.join('');
    this.renderValue();
    this.node.setSelectionRange(start, start);
  }

  renderValue() {
    this.node.value = this.value;
  }

  initializeTextboxEvents() {
    this.node.addEventListener('input', (event) => {
      this.value = event.target.value;
    });
  }
}

export default TextboxComponent;
