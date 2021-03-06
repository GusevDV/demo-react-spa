import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CitiesList from "./cities-list.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const cities = [
  {name: `Paris`, coords: [48.85661, 2.351499], zoom: 13},
  {name: `Amsterdam`, coords: [52.37454, 4.897976], zoom: 13},
];

it(`Should city link be clicked`, () => {
  const onCityLinkClick = jest.fn();

  const main = mount(
      <CitiesList
        cities={cities}
        onCityChange = {onCityLinkClick}
        currentCity={`Amsterdam`}
        maxCitiesCount={6}
      />
  );

  const titleLink = main.find(`.locations__item-link`).first();

  titleLink.simulate(`click`);

  expect(onCityLinkClick).toHaveBeenCalledTimes(1);
  expect(onCityLinkClick).toHaveBeenCalledWith(cities[0]);
});
