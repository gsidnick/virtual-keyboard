import WrapperComponent from './components/WrapperComponent.js';
import HeaderComponent from './components/HeaderComponent.js';
import TextboxComponent from './components/TextboxComponent.js';
import MainComponent from './components/MainComponent.js';
import KeyboardComponent from './components/KeyboardComponent.js';

class App {
  constructor() {
    this.body = document.querySelector('body');
  }

  start() {
    const wrapper = new WrapperComponent();
    const header = new HeaderComponent();
    const main = new MainComponent();
    const textbox = new TextboxComponent();
    const keyboard = new KeyboardComponent();
    wrapper.append(header, main.append(textbox, keyboard));
    if (this.body !== null) this.body.append(wrapper.node);
  }
}

export default App;
