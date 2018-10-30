"use strict";

console.log("App.js is running!");

var template = (
  <div>
    <h1>Indecision App</h1>
    <div>this is a second info...</div>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var templateTwo = (
  <div>
    <h1>Jae M. Choi</h1>
    <p>Age: 35</p>
    <p>Location: Leuven, Belgium</p>
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
