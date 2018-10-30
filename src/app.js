"use strict";

console.log("App.js is running!");

var app = {
  title: "Indecision App",
  subtitle: "Just a memo app for myself to be familiar with React.js a bit",
  options: ["One", "Two"]
};
var appTemplate = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var user = {
  name: "Jae",
  age: 35,
  location: "Leuven, Belgium"
};

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

var templateTwo = (
  <div>
    <h1>{user.name ? user.name : "Anonymous"}</h1>
    {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(appTemplate, appRoot);
// ReactDOM.render(templateTwo, appRoot);
