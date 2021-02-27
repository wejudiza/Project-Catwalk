import React from 'react';
import enzyme, { shallow } from 'enzyme';

// Components
import WelcomeMessage from './WelcomeMessage';

// enzyme.configure({ adapter: new Adapter() });

// function setup() {
//   const props = {
//     imgPath: 'some/image/path/to/a/mock/image',
//   };
  // const wrapper = shallow(<WelcomeMessage />);
//   return { wrapper, props };
// }


describe('WelcomeMessage Test Suite', () => {
  it('Should have an image', () => {
    const wrapper = shallow(<WelcomeMessage />);
    // const { wrapper } = setup();
    expect(wrapper.find('img').exists()).toBe(true);
  });
});


