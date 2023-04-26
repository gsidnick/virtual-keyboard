import Component from './Component.js';

class TextboxComponent extends Component {
  constructor() {
    super('textarea', 'textbox__field');
    this.value = '';
    this.initializeTextboxEvents();
  }

  setValue(value) {
    this.value += value;
    this.node.innerHTML = this.value;
  }

  initializeTextboxEvents() {
    this.node.addEventListener('input', (event) => {
      this.value = event.target.value;
    });
  }
}

export default TextboxComponent;
