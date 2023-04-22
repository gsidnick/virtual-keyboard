class Component {
  constructor(tag, className, children, parent) {
    this.node = document.createElement(tag);
    if (className !== undefined && className !== '') this.node.classList.add(...className.split(' '));
    if (children !== undefined) this.add(children);
    if (parent !== undefined) parent.node.append(this.node);
  }

  append(...args) {
    [...args].forEach((node) => this.add(node));
    return this.node;
  }

  add(node) {
    if (node instanceof Component) this.node.append(node.node);
    if (node instanceof HTMLElement || typeof node === 'string') this.node.append(node);
  }

  on(event, callback) {
    this.node.addEventListener(event, callback);
  }

  toString() {
    return this.node;
  }
}

export default Component;
