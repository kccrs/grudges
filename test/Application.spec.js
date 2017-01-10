import React from 'react';
import { shallow } from 'enzyme';
import { expect, assert } from 'chai';
import Application from '../lib/components/Application';

describe('application', () => {
  it('renders as a <section>', () => {
    const wrapper = shallow(<Application />);
    assert.equal(wrapper.type(), 'section');
  });
});
