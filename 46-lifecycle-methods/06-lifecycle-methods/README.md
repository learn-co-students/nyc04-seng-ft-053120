Component Lifecycle Methods
===

## SWBATs
- [ ] Write methods that interact with data at different points throughout a component's life
- [ ] Identify the most-used Lifecycle Methods
- [ ] Explain why we `fetch` data using `componentDidMount`
- [ ] Identify problems caused by asynchronicity in React

## Outline

### Part 1: Theory
- [ ] Show example lifecycle app
- [ ] `console.log` to show lifecycle methods and test assumptions about order
- [ ] Explain what common use cases for different lifecycles are



## Lecture Notes

### Mounting (Birth)
When a component is initially rendered

#### constructor
- setting initial state (old school)
- binding functions (old school)
- initialize outside libraries / data

#### render
- return JSX
- must be a pure fn (no side effects)
- shouldn't call `setState` from here

#### componentDidMount
- fetching
- setting intervals
- custom event listeners
- can call `setState` from here

### Updating (Life)
Called everytime we `setState` or pass down new props

#### render
- see above

#### componentDidUpdate
- used to change state when comparison between old and new props/state is needed, for example fetching new data
- be careful about setting state here, you can get in an infinite loop of rendering/updating (use a conditional to check if state needs to be updated)

### Unmounting (Death)
Leaving the page (conditional rendering)

#### componentWillUnmount
- used to clean-up processes (intervals)
- could also be used for auto-save ala Google Docs

## Summary

Post React 16.3, some lifecycle methods were slated for deprecation in 17.0 and new ones were introduced. These are the blogs/diagrams you'll want to read/see to explain each:

- [Old Lifecycle Methods Diagram](https://hackernoon.com/reactjs-component-lifecycle-methods-a-deep-dive-38275d9d13c0)
  - [Old Lifecycle Methods Description](https://gist.github.com/alexgriff/1b5850cac9a1d565f0cb66a941505b99)
- [New Lifecycle Methods Diagram](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
  - [Original Source (a tweet by Dan Abramov)](https://twitter.com/dan_abramov/status/981712092611989509)
- [`setState` Cheatsheet](https://levelup.gitconnected.com/react-cheatsheet-this-setstate-8bc12c5f40f5)
- Remember, not all of what you will see is technically true. People have opinions.
- For example, here there are a few places where you _can_ put `setState`, but they would be code smells as you probably wouldn't want to be doing them in those lifecycle methods.
- The important part is understanding where you _mustn't_ put `setState` as it could cause an infinite loop. `render` being the most obvious place _not_ to do `setState`.

### Benchmarking (Extra Reading)

* [How to Benchmark React Components](https://engineering.musefind.com/how-to-benchmark-react-components-the-quick-and-dirty-guide-f595baf1014c)




