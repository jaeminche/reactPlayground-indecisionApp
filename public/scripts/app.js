"use strict";

console.log("App.js is running!");

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Indecision App"
  ),
  React.createElement(
    "div",
    null,
    "this is a second info..."
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item one"
    ),
    React.createElement(
      "li",
      null,
      "Item two"
    )
  )
);

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Jae M. Choi"
  ),
  React.createElement(
    "p",
    null,
    "Age: 35"
  ),
  React.createElement(
    "p",
    null,
    "Location: Leuven, Belgium"
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
