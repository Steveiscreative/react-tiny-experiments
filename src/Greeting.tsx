type GreetingProps = {
  greet?: string;
  name: string;
};

export default function Greeting({ greet = "Welcome", name }: GreetingProps) {
  return (
    <h1>
      {greet}, {name}
    </h1>
  );
}
