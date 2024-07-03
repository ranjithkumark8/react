// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "hello world from React!"
// );
// console.log(heading);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, 'I"m h2 tag'),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, 'I"m h2 tag'),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
