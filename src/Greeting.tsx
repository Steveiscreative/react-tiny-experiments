/**
 * Hello, World” Component with Props
      Concepts: Functional components, props, JSX
      What to do:
	- Create a simple functional component called <Greeting> that accepts a name prop and renders “Hello, {name}! Welcome to React.”
	- Render <Greeting name="Alice" /> and <Greeting name="Bob" /> inside your App component.
	- Experiment by passing different data types to props (strings, numbers, booleans) and conditionally rendering based on those props.
	- Goal: Ensure you understand how to pass and use props, and how JSX translates to JavaScript function calls.
 */

type GreetingProps = {
  greet?: string;
  name: string;
  isLoggedIn: boolean;
};

export default function Greeting({
  greet = "Welcome",
  name,
  isLoggedIn = false,
}: GreetingProps) {
  const isFriendlyHello = greet.toLowerCase() == "hello";
  return (
    <h1>
      {greet}, {name} {isFriendlyHello ? "👋🏾" : ""}
      {isLoggedIn ? "" : "(Please log in)"}
    </h1>
  );
}
