import React from 'react';
import enzyme, { shallow } from 'enzyme';

// Components
import Overview from '../client/src/components/Overview/Overview.jsx';
import ProductInfo from '../client/src/components/Overview/ProductInfo.jsx';
import StyleSelector from '../client/src/components/Overview/StyleSelector.jsx';
import RelatedItems from '../client/src/components/RelatedItems/RelatedItems.jsx';
import ProductsList from '../client/src/components/RelatedItems/ProductsList.jsx';
import ProductsCarousel from '../client/src/components/RelatedItems/ProductsCarousel.jsx';
import OutfitsList from '../client/src/components/RelatedItems/OutfitsList.jsx';
import Outfit from '../client/src/components/RelatedItems/Outfit.jsx';
import Reviews from '../client/src/components/reviews/Reviews.jsx';
import RatingBreakdown from '../client/src/components/reviews/RatingBreakdown.jsx'


// describe('Render Overview', () => {
//   it('Should have a ProductInfo Component', () => {
//     const wrapper = shallow(<Overview />);
//     // const { wrapper } = setup();
//     expect(wrapper.find('ProductInfo').exists()).toBe(true);
//   });

// describe('Render Overview', () => {
//   it('Should have a ProductInfo Component', () => {
//     const wrapper = shallow(<Overview />);
//     // const { wrapper } = setup();
//     expect(wrapper.find('ProductInfo').exists()).toBe(true);
//   });

//   it('Should have a StyleSelector Component', () => {
//     const wrapper = shallow(<Overview />);
//     // const { wrapper } = setup();
//     expect(wrapper.find('StyleSelector').exists()).toBe(true);
//   });
// });


// describe('Render RelatedItems', () => {
//   it('Should have a ProductsList Component', () => {
//     const wrapper = shallow(<RelatedItems />);
//     expect(wrapper.find('ProductsList').exists()).toBe(true);
//   });

//   it('Should have a OutfitsList Component', () => {
//     const wrapper = shallow(<RelatedItems />);
//     expect(wrapper.find('OutfitsList').exists()).toBe(true);
//   });
// });

describe('Render Reviews', () => {
  it('Should have a RatingBreakdown Component', () => {
    const wrapper = shallow(<Reviews />);
    expect(wrapper.find('RatingBreakdown').exists()).toBe(true);
  });

  it('Should have a ProductBreakdown Component', () => {
    const wrapper = shallow(<Reviews />);
    expect(wrapper.find('ProductBreakdown').exists()).toBe(true);
  });

  it('Should have a ReviewsList Component', () => {
    const wrapper = shallow(<Reviews />);
    expect(wrapper.find('ReviewsList').exists()).toBe(true);
  });

  it('Should have a ReviewsList Component', () => {
    const wrapper = shallow(<Reviews />);
    expect(wrapper.find('ReviewsList').exists()).toBe(true);
  });
});

// describe('Render RatingBreakdown', () => {
//   it('Should have a StarRating Component', () => {
//     const wrapper = shallow(<RatingBreakdown />);
//     expect(wrapper.find('StarRating').exists()).toBe(true);
//   });

//   it('Should have a ProductBreakdown Component', () => {
//     const wrapper = shallow(<Reviews />);
//     expect(wrapper.find('ProductBreakdown').exists()).toBe(true);
//   });

//   it('Should have a ReviewsList Component', () => {
//     const wrapper = shallow(<Reviews />);
//     expect(wrapper.find('ReviewsList').exists()).toBe(true);
//   });

//   it('Should have a ReviewsList Component', () => {
//     const wrapper = shallow(<Reviews />);
//     expect(wrapper.find('ReviewsList').exists()).toBe(true);
//   });
// });
