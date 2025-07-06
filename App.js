// const heading = React.createElement(
//     "h1",
//     { id: "heading" },
//     "Hello world using react"
// );

import React from "react";
import ReactDOM from "react-dom/client";

const Heading = () => (
  <h1 className="head" tabIndex="5">
    Onkar Vyavahare
  </h1>
);

const HeadingComponent = () =>  (
    <div className="container">
      <Heading />
      <h1 className="heading">One Piece is Real!</h1>
    </div>
  );


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
