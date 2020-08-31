// Library code
React = {}
React.Component = class Component {
  componentDidMount() { }
  render() { }
}
ReactDOM = {}

// remember, JSX is really just syntax sugar for this:
React.createElement = function (type, props, ...children) {
  return {
    type,
    props: {
      props,
      children
    }
  }
}

// element = { type, props, children }
ReactDOM.render = function (element, parent) {
  // Primitives (strings, boolean, number) just get converted to text nodes:
  if (typeof element !== 'object') {
    const textNode = document.createTextNode(element)
    parent.append(textNode)
    return;
  }

  // Is it a class component?
  if (element.type.prototype instanceof React.Component) {
    // constructor!
    const componentInstance = new element.type(element.props)

    // render!
    const childElement = componentInstance.render()
    // returns child elements (JSX)

    // recursive fn call: 
    ReactDOM.render(childElement, parent)

    // componentDidMount!
    componentInstance.componentDidMount()

    return;
  }

  // Is it a function component?
  if (typeof element.type === 'function') {
    // call the function with props to get component's return value
    const childElement = element.type(element.props)

    // recursive fn call
    ReactDOM.render(childElement, parent)
    return;
  }

  // Everything else gets turned into a DOM node
  const domElement = document.createElement(element.type);

  // get children and the rest of the props
  const { children, ...props } = element.props

  // copy props onto the new element as attributes:
  for (let key in props) {
    domElement[key] = props[key]
  }

  // render children with the current element as the parent
  for (let childElement of children) {
    ReactDOM.render(childElement, domElement)
  }

  // append node to the parent
  parent.append(domElement)
}
