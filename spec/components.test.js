import React from 'react';
import enzyme, { shallow } from 'enzyme';

// Components
import Overview from '../client/src/components/Overview/Overview.jsx';
import ProductInfo from '../client/src/components/Overview/ProductInfo.jsx';
import StyleSelector from '../client/src/components/Overview/StyleSelector.jsx';

// enzyme.configure({ adapter: new Adapter() });


describe('Render Overview', () => {
  it('Should have a ProductInfo Component', () => {
    const wrapper = shallow(<Overview />);
    // const { wrapper } = setup();
    expect(wrapper.find('ProductInfo').exists()).toBe(true);
  });

  it('Should have a StyleSelector Component', () => {
    const wrapper = shallow(<Overview />);
    // const { wrapper } = setup();
    expect(wrapper.find('StyleSelector').exists()).toBe(true);
  });
});

