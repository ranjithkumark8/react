<div id="parent">
  <div id="child">
    <h1>I'm h1 tag</h1>
  </div>
  <div>
    <h2>I'm h2 tag</h2>
  </div>
</div>;

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "hello world from React!"
// );
// console.log(heading);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
