import Component from './Component.js';

class HeaderComponent extends Component {
  constructor() {
    super('header', 'header');
    const headerTitle = new Component('h1', 'header__title', 'Virtual Keyboard');
    this.append(headerTitle);
  }
}

export default HeaderComponent;
