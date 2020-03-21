- [ ] Why would you use class component over function components (removing hooks from the question)?

If a pre-existing application or piece of code is running class components instead of functional components.

- [ ] Name three lifecycle methods and their purposes.

getDerivedStateFromProps
after the object is instantiated, it pulls in data in form of props to be passed around before rendering

shouldComponentUpdate
this checks current props and state against input props or state to see if things have changed, and if they have changed if it is something that needs to be rendered. If it does need to be rendered it calls to render

render
this pulls in props, and the majority of the code and "paints" what you see

- [ ] What is the purpose of a custom hook?

Custom hooks allow us to make modular "functions". Logic that we plan on using multiple times, in multiple places, in multiple apps. We can pack it up and re-use it.

- [ ] Why is it important to test our apps?

Testing apps save time and resources.
Without proper testing, you can deploy a component that breaks an app, breaks the UX, or exposes sensitive data.
Testing allows programmers to ensure that functions, components, or even entire apps behave the way that they are intended to.