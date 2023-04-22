import Component from './Component.js';

class TextboxComponent extends Component {
  constructor() {
    super('section', 'textbox');
    const textboxTitle = new Component('textarea', 'textbox__field');
    this.append(textboxTitle);
  }
}

export default TextboxComponent;
