import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const Offers = [
  `Flat 2`,
  `Very Nice Mega Cool Flat 3`,
  `Apartment`,
  `Beautiful & luxurious apartment at great location`,
  `Nice, cozy, warm big bed apartment`,
];

it(`Should App component render correctly`, () => {

  const render = renderer.create(
      <App offers={Offers} />
  )
  .toJSON();

  expect(render).toMatchSnapshot();
});
