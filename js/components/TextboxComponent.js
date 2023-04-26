import Component from './Component.js';

class TextboxComponent extends Component {
  constructor() {
    super('textarea', 'textbox__field');
    this.value = '';
    this.initializeTextboxEvents();
  }

  setValue(value) {
    const start = this.node.selectionStart;
    const temp = this.value.split('');
    temp.splice(start, 0, value);
    this.value = temp.join('');
    this.renderValue();
    this.node.setSelectionRange(start + 1, start + 1);
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
