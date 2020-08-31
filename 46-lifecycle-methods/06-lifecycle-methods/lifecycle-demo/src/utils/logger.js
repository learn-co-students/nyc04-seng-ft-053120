const colorMap = {
  constructor: "red",
  render: "cyan",
  componentDidMount: "limegreen",
  componentDidUpdate: "magenta",
  componentWillUnmount: "beige"
}

export const componentLog = component => {
  // use constructor to get component class name
  const className = component.constructor.name

  // throw error to get the stack trace to find currently executing fn name
  let currentFn = new Error().stack.split("\n")[2]

  // hackathon, could prob do better with a regex
  let functionName = currentFn.slice(0, currentFn.indexOf("("))
    .trim()
    .split(" ")
    .slice(1)
    .join(" ")
    .replace("new ", "constructor")
    .replace(className, "")
    .replace(".", "")

  console.log(`%c ${functionName.toUpperCase()} | ${className}`, `color: ${colorMap[functionName]}`)
}
