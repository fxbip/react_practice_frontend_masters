import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me!"),
    React.createElement(Pet, {
      name: "Douggie",
      animal: "Dog",
      breed: "Maltese Shih-Tzu"
    }),
    React.createElement(Pet, {
      name: "Gerald",
      animal: "Dog",
      breed: "German Shepherd"
    }),
    React.createElement(Pet, {
      name: "Bryce",
      animal: "Bird",
      breed: "African Parrot"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
