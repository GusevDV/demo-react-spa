import React from 'react';
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveItem from './with-active-item.js';

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveItem(MockComponent);

it(`should change active item id correctly`, () => {
  const wrapper = shallow(<MockComponentWrapped/>);
  expect(wrapper.props().activeItemId).toBe(null);
  wrapper.props().onMouseEnter(1);
  expect(wrapper.props().activeItemId).toBe(1);
  wrapper.props().onMouseLeave();
  expect(wrapper.props().activeItemId).toBe(null);
});