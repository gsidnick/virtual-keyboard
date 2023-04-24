import Component from './Component.js';

class TextboxComponent extends Component {
  constructor() {
    super('textarea', 'textbox__field');
    this.value = '';
  }

  setValue(value) {
    this.value += value;
    this.node.innerHTML = this.value;
  }
}

export default TextboxComponent;
