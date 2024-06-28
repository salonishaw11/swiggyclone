import React from "react";
import ReactDOM from "react-dom/client";
const Heading2 = () => {
  return <h2>heading2</h2>;
};
const Heading = () => {
  return (
    <div>
      <h1>Hello from JSX</h1>
      <Heading2 />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
