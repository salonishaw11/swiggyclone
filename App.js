import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "child1" }, "Hello world from React1!"),
    React.createElement("h1", {}, "Hello world from React2!"),
  ])
);
const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(heading);
