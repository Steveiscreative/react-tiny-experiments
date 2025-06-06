# React Tiny Experiments

A collection of 10 bite-sized challenges to help you learn and reinforce key React concepts. Clone or fork this repository and tackle each exercise to get hands-on experience with components, hooks, state management, side effects, and more.

---

## Table of Contents

1. [Hello, World Component with Props](#1-hello-world-component-with-props)
2. [Counter with `useState`](#2-counter-with-usestate)
3. [Dynamic To-Do List (Local Storage)](#3-dynamic-to-do-list-local-storage)
4. [Fetch & Display Data from a Public API](#4-fetch--display-data-from-a-public-api)
5. [Theme Toggle with Context API](#5-theme-toggle-with-context-api)
6. [Custom Hook: `useWindowSize`](#6-custom-hook-usewindowsize)
7. [Simple Counter with `useReducer`](#7-simple-counter-with-usereducer)
8. [Form Validation with Controlled Components](#8-form-validation-with-controlled-components)
9. [Simple Modal & Portals](#9-simple-modal--portals)
10. [Simple SVG Animation with Framer Motion](#10-simple-svg-animation-with-framer-motion)

---

## 1. Hello, World Component with Props

**Concepts:** Functional components, props, JSX

**Instructions:**

- Create a functional component named `Greeting` that accepts:

  - A required `name` prop (string).
  - An optional `greet` prop (string) with a default value of `"Welcome"`.

- In the component’s rendered output, display a greeting message that includes both `greet` and `name`.
- In `App`, render:

  - `<Greeting name="Alice" />`
  - `<Greeting name="Bob" greet="Hello" />`

- Experiment by passing other data types (e.g., numbers or booleans converted to strings) for the `name` prop.
- Add a small conditional in `Greeting` to demonstrate conditional rendering based on the `greet` value (e.g., show an emoji when `greet` equals `"Hello"`).

**Goal:**
Ensure you understand how to pass and use props in a functional component and how JSX maps to JavaScript function calls.

---

## 2. Counter with `useState`

**Concepts:** `useState`, event handling

**Instructions:**

- Create a `Counter` component that:

  - Maintains a `count` state initialized to `0`.
  - Renders the current count on screen.
  - Has three buttons:

    1. “–” button: decrements `count` by 1, but never below 0.
    2. “+” button: increments `count` by 1.
    3. “Reset” button: sets `count` back to 0.

  - Disables the “–” button when `count` is 0.

- Ensure state updates use the functional form of `setState` to avoid stale values.

**Goal:**
Practice creating and updating local component state, handling user events, and conditionally disabling a button.

---

## 3. Dynamic To-Do List (Local Storage)

**Concepts:** Lists & keys, forms, `useState` for arrays, `localStorage` persistence

**Instructions:**

- Build a `TodoApp` component that:

  - Contains a text input and “Add” button for new to-dos.
  - Stores to-dos as an array of objects (`{ id, text, completed }`) in state.
  - Renders the list of to-dos in an unordered list, using a unique `key` for each item.
  - Allows users to:

    - Click a to-do to toggle its `completed` status (e.g., strike-through styling when done).
    - Delete a to-do via a “Delete” button next to it.

  - Persists the to-do list to `localStorage`, so that page reloads retain the list.

- On component mount, initialize state from `localStorage` if available.

**Goal:**
Get comfortable managing an array in state, rendering lists with proper keys, handling user input, and syncing state with `localStorage`.

---

## 4. Fetch & Display Data from a Public API

**Concepts:** `useEffect`, asynchronous data fetching, conditional rendering

**Instructions:**

- Create a `RandomUser` component that:

  - On mount, fetches a random user from the [Random User API](https://randomuser.me/api/).
  - Shows a “Loading…” indicator while the request is in progress.
  - Once data arrives, displays the user’s name, email, and profile picture.
  - Includes a “Fetch Another” button that re-runs the API call and updates the displayed user.
  - Handles fetch errors by showing a friendly error message (e.g., “Something went wrong. Try again.”).

**Goal:**
Learn how to use `useEffect` for side effects, handle asynchronous fetch logic inside a React component, and conditionally render loading, error, and data states.

---

## 5. Theme Toggle with Context API

**Concepts:** React Context, `useContext`, conditional styling

**Instructions:**

- Set up a `ThemeContext` with:

  - A `theme` value that can be either `"light"` or `"dark"`.
  - A `toggleTheme` function to switch between themes.

- Wrap your application (or a section of it) in `ThemeContext.Provider`, storing `theme` in state at the provider level.
- Create a `Header` (or any child) component that consumes `ThemeContext` and renders a “Toggle Theme” button.
- In your CSS (or inline styles), define different background/text colors for light vs. dark themes.
- Apply conditional styling to at least two components (e.g., App background and button colors) based on the current `theme`.

**Goal:**
Understand how to share state and functions globally via React Context, avoiding prop drilling, and apply conditional styles across multiple components.

---

## 6. Custom Hook: `useWindowSize`

**Concepts:** Custom hooks, `useEffect` with event listeners, cleanup

**Instructions:**

- Create a custom hook `useWindowSize` that:

  - Returns an object `{ width, height }` corresponding to `window.innerWidth` and `window.innerHeight`.
  - Sets up a `resize` event listener in `useEffect` that updates state whenever the window size changes.
  - Cleans up (removes) the event listener on unmount.

- In your `App` (or another component), call `useWindowSize()` and display the current width and height on screen.
- Add an additional behavior: show or hide a message if the width is below a certain breakpoint (e.g., 600px).

**Goal:**
Learn how to encapsulate reusable logic into a custom hook, handle side effects with `useEffect`, and clean up event listeners properly.

---

## 7. Simple Counter with `useReducer`

**Concepts:** `useReducer` for more complex state updates

**Instructions:**

- Re-create the counter from challenge #2, but instead of `useState`, use `useReducer`.

  - Define a reducer function that handles actions like `{ type: "increment" }`, `{ type: "decrement" }`, and `{ type: "reset" }`.
  - In the component, call `useReducer(reducer, initialState)` to get `[state, dispatch]`.
  - Wire the “+” button to `dispatch({ type: "increment" })`, the “–” button to `dispatch({ type: "decrement" })`, and the “Reset” button to `dispatch({ type: "reset" })`.
  - Ensure that `decrement` does not allow the count to go below 0.

- (Optional) Add an “increment by N” feature: a button or input that dispatches `{ type: "incrementBy", payload: N }`.

**Goal:**
Compare `useState` vs. `useReducer` patterns and see when a reducer can simplify handling multiple related state updates.

---

## 8. Form Validation with Controlled Components

**Concepts:** Controlled inputs, `useState`, validation, conditional error messages

**Instructions:**

- Create a `SignupForm` component with controlled `<input>` fields for:

  - “Email”
  - “Password”

- Store both values in state and update them on each `onChange`.
- On form submission:

  - Validate that the email matches a simple regex pattern (e.g., contains "@" and ".").
  - Validate that the password is at least 8 characters long.
  - If validation fails, display inline error messages beneath each field.
  - If validation succeeds, log the form data or show a success message.

- Disable the Submit button until both fields are non-empty.

**Goal:**
Get comfortable working with controlled form elements, implementing simple client-side validation, and conditionally showing error feedback.

---

## 9. Simple Modal & Portals

**Concepts:** React Portals (`ReactDOM.createPortal`), conditional rendering, `props.children`

**Instructions:**

1. In your `public/index.html`, add:

   ```html
   <div id="modal-root"></div>
   ```

   alongside the root `<div>`.

2. Create a `Modal` component that:

   - Renders its `children` inside the DOM node with `id="modal-root"` using `createPortal`.
   - Includes a backdrop (semi-transparent overlay) and a centered content box.
   - When the backdrop or a “Close” button inside the modal is clicked, calls a prop function to close the modal.

3. In `App`, maintain a `showModal` boolean in state. Render a button “Open Modal” that sets `showModal` to `true`. When `showModal` is `true`, render `<Modal>` with some sample content and the “Close” handler.

**Goal:**
Understand how React Portals allow you to render components outside the main component tree—useful for modals, tooltips, or dropdowns that shouldn’t be constrained by parent CSS overflow or stacking context.

---

## 10. Simple SVG Animation with Framer Motion

**Concepts:** Third-party animation libraries, SVGs, animating props

**Instructions:**

- Install Framer Motion:

  ```bash
  npm install framer-motion
  # or
  yarn add framer-motion
  ```

- Create a simple SVG icon (e.g., a circle or a custom path).
- Build an `AnimatedIcon` component that:

  - Wraps your SVG in a Framer Motion component (e.g., `<motion.svg>`).
  - Animates a property (such as `scale`, `rotate`, or `fill` color) when the user hovers or clicks:

    - Example: on hover, scale to 1.2; on click, rotate once.

  - Uses Framer Motion props like `whileHover`, `animate`, or `whileTap` to trigger the animations.

- Render `AnimatedIcon` in `App` and test the interaction (hover, click, etc.).

**Goal:**
Gain exposure to integrating a third-party animation library, learn how to animate SVG elements declaratively, and see how React combines with Framer Motion to create interactive UI effects.
