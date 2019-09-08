import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt me!"),
  //   React.createElement(Pet, {
  //     name: "Douggie",
  //     animal: "Dog",
  //     breed: "Maltese Shih-Tzu"
  //   }),
  //   React.createElement(Pet, {
  //     name: "Gerald",
  //     animal: "Dog",
  //     breed: "German Shepherd"
  //   }),
  //   React.createElement(Pet, {
  //     name: "Bryce",
  //     animal: "Bird",
  //     breed: "African Parrot"
  //   })
  // ]);
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Douggie" animal="Dog" breed="Maltese Shhih-Tzu" />
      <Pet name="Spike" animal="Bird" breed="Parrot" />
      <Pet name="Donkey Kong" animal="Gorilla" breed="Big Boy" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
