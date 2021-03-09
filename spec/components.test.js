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
<<<<<<< HEAD
import Outfit from '../client/src/components/RelatedItems/Outfit.jsx';
=======
import Reviews from '../client/src/components/reviews/Reviews.jsx';
>>>>>>> main


<<<<<<< HEAD
// describe('Render Overview', () => {
//   it('Should have a ProductInfo Component', () => {
//     const wrapper = shallow(<Overview />);
//     // const { wrapper } = setup();
//     expect(wrapper.find('ProductInfo').exists()).toBe(true);
//   });
=======
// enzyme.configure({ adapter: new Adapter() });
>>>>>>> main

//   it('Should have a StyleSelector Component', () => {
//     const wrapper = shallow(<Overview />);
//     // const { wrapper } = setup();
//     expect(wrapper.find('StyleSelector').exists()).toBe(true);
//   });
// });


describe('Render RelatedItems', () => {
  it('Should have a ProductsList Component', () => {
    const wrapper = shallow(<RelatedItems />);
    expect(wrapper.find('ProductsList').exists()).toBe(true);
  });

  it('Should have a OutfitsList Component', () => {
    const wrapper = shallow(<RelatedItems />);
    expect(wrapper.find('OutfitsList').exists()).toBe(true);
  });
});


describe('Render ProductsList', () => {
  // it('Should have a ProductsCarousel Component', () => {
  //   const wrapper = shallow(<ProductsList />);
  //   expect(wrapper.find('ProductsCarousel').exists()).toBe(true);
  // })

  // it('Should have a Product Component', () => {
  //   const wrapper = shallow(<ProductsCarousel />);
  //   expect(wrapper.find('Product').exists()).toBe(true);
  // })

});

describe('Render OutfitsList', () => {
  it('Should have a ProductsCarousel Component', () => {
    const wrapper = shallow(<OutfitsList />);
    expect(wrapper.find('Outfit').exists()).toBe(true);
  })



});

describe('Render RatingBreakdown', () => {
  it('Should have a RatingBreakdown Component', () => {
    const wrapper = shallow(<Reviews />);
    expect(wrapper.find('RatingBreakdown').exists()).toBe(true);
  });

  // it('Should have a OutfitsList Component', () => {
  //   const wrapper = shallow(<RelatedItems />);
  //   expect(wrapper.find('OutfitsList').exists()).toBe(true);
  // });
});
