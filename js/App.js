import WrapperComponent from './components/WrapperComponent.js';
import HeaderComponent from './components/HeaderComponent.js';
import TextboxComponent from './components/TextboxComponent.js';
import MainComponent from './components/MainComponent.js';
import KeyboardComponent from './components/KeyboardComponent.js';
import TextboxWrapperComponent from './components/TextboxWrapperComponent.js';

class App {
  constructor() {
    this.body = document.querySelector('body');
  }

  start() {
    const wrapper = new WrapperComponent();
    const header = new HeaderComponent();
    const main = new MainComponent();
    const textboxWrapper = new TextboxWrapperComponent();
    this.textbox = new TextboxComponent();
    const keyboard = new KeyboardComponent();
    keyboard.textbox = this.textbox;
    wrapper.append(header, main.append(textboxWrapper.append(this.textbox), keyboard));
    if (this.body !== null) this.body.append(wrapper.node);
    this.initializeAppEvents();
  }

  initializeAppEvents() {
    document.addEventListener('click', () => {
      this.textbox.node.focus();
    });
  }
}

export default App;
