import React from "react";
import ReactDOM from "react-dom/client";

// JSX => Babel transpiles it to React.createElement => ReactElement - JS Object => HTMLElement(render)
// React element
const jsxHeading = <h1 id="heading">I'm re-visiting react concepts</h1>;

// React Components are 2 types - class components and functional components.


const Title = () => <h1>component composition</h1>;

// Using one component inside another component is called component composition 
const Heading = () => {
  return (
    <div>
      <Title />
      <h1>This is functional component</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
