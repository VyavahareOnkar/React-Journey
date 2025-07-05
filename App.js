// const heading = React.createElement(
//     "h1",
//     { id: "heading" },
//     "Hello world using react"
// );

const parent = React.createElement(
    "Div", 
    { id: "parent" }, 
    [React.createElement("Div", { id: "child1" }, React.createElement("h1", {}, "h1 inside child1")), React.createElement("Div", { id: "child2" }, React.createElement("h1", {}, "h1 inside child2"))])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);