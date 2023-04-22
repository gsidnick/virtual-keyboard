import WrapperComponent from './components/WrapperComponent.js';
import HeaderComponent from './components/HeaderComponent.js';
import TextboxComponent from './components/TextboxComponent.js';

class App {
  constructor() {
    this.body = document.querySelector('body');
  }

  start() {
    const wrapper = new WrapperComponent();
    const header = new HeaderComponent();
    const textbox = new TextboxComponent();
    wrapper.append(header);
    wrapper.append(textbox);
    if (this.body !== null) {
      this.body.append(wrapper.node);
    }
  }
}

export default App;
