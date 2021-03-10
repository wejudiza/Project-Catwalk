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


<<<<<<< HEAD
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
=======
describe('Render Overview', () => {
  it('Should have a ProductInfo Component', () => {
    const wrapper = shallow(<Overview />);
    expect(wrapper.find('ProductInfo').exists()).toBe(true);
  });

  it('Should have a StyleSelector Component', () => {
    const wrapper = shallow(<Overview />);
    expect(wrapper.find('StyleSelector').exists()).toBe(true);
  });

  it('Should have a ImageGallery Component', () => {
    const wrapper = shallow(<Overview />);
    expect(wrapper.find('ImageGallery').exists()).toBe(true);
  });

  it('Should have a Description Component', () => {
    const wrapper = shallow(<Overview />);
    expect(wrapper.find('Description').exists()).toBe(true);
  });
});
>>>>>>> main

// describe('Render ProductInfo', () => {
//   it('Should have a StarRating Component', () => {
//     const wrapper = shallow(<ProductInfo />);
//     expect(wrapper.find('StarRating').exists()).toBe(true);
//   });
// });

// describe('Render StyleSelector', () => {
//   it('Should have a Style Component', () => {
//     const wrapper = shallow(<StyleSelector />);
//     expect(wrapper.find('Style').exists()).toBe(true);
//   });

//   it('Should have a AddToCart Component', () => {
//     const wrapper = shallow(<StyleSelector />);
//     expect(wrapper.find('AddToCart').exists()).toBe(true);
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

<<<<<<< HEAD
describe('Render Reviews', () => {
=======

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
  it('Should have a Outfit Component', () => {
    const wrapper = shallow(<OutfitsList />);
    expect(wrapper.find('Outfit').exists()).toBe(true);
  })

  // it('Should have a OutfitStars Component', () => {
  //   const wrapper = shallow(<Outfit />);
  //   expect(wrapper.find('OutfitStars').exists()).toBe(true);
  // })
});

describe('Render RatingBreakdown', () => {
>>>>>>> main
  it('Should have a RatingBreakdown Component', () => {
    const wrapper = shallow(<Reviews />);
    expect(wrapper.find('RatingBreakdown').exists()).toBe(true);
  });

<<<<<<< HEAD
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
=======

>>>>>>> main
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
