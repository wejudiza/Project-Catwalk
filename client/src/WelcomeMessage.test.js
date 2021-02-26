import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Components
import WelcomeMessage from './WelcomeMessage';

enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    imgPath: 'some/image/path/to/a/mock/image',
  };
  const wrapper = shallow(<WelcomeMessage />);
  return { wrapper, props };
}

describe('WelcomeMessage Test Suite', () => {
  it('Should have an image', () => {
    const { wrapper } = setup();
    expect(wrapper.find('img').exists()).toBe(true);
  });
});