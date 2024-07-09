import React from "react";
import ReactDOM from "react-dom/client";
import { HeadingComp } from "./Heading";


// Create a Nested header Element using React.createElement(h1,h2,h3 inside a
// div with class “title”)
const heading = React.createElement('div', {className:"title"}, [
  React.createElement('h1', {}, "I'm H1 tag"),
  React.createElement('h2', {}, "I'm H2 tag"),
  React.createElement('h3', {}, "I'm H3 tag")
]) 

const HeadingJsx = () => (
  <div className="title">
    <h1>I'm h1 tag</h1>
    <h2>I'm h2 tag</h2>
    <h3>I'm h3 tag</h3>

  </div>
)
// JSX => Babel transpiles it to React.createElement => ReactElement - JS Object => HTMLElement(render)
// React element
const jsxHeading = <h1 id="heading">I'm re-visiting react concepts</h1>;

// React Components are 2 types - class components and functional components.


const Title = () => <h1>component composition</h1>;

// Using one component inside another component is called component composition 
const Heading = () => {
  return (
    <div styles={{width:'100%'}}>
      <Title />
      {heading}
      <HeadingJsx />
      <HeadingComp />
      <h1>This is functional component</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
