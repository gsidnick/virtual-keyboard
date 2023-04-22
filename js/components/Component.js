class Component {
  constructor(tag, className, children, parent) {
    this.node = document.createElement(tag);

    if (className !== undefined && className !== '') {
      const classes = className.split(' ');
      this.node.classList.add(...classes);
    }

    if (children !== undefined) {
      if (children instanceof Component) {
        this.node.append(children.node);
      } else {
        this.node.append(children);
      }
    }

    if (parent !== undefined) {
      parent.node.append(this.node);
    }
  }

  append(node) {
    if (node instanceof Component) {
      this.node.append(node.node);
    } else {
      this.node.append(node);
    }
    return this.node;
  }

  on(event, callback) {
    this.node.addEventListener(event, callback);
  }

  toString() {
    return this.node;
  }
}

export default Component;
