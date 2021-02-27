import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './components/Overview/Overview';
import RelatedItems from './components/RelatedItems/RelatedItems';
import Reviews from './components/reviews/Reviews';

ReactDOM.render(<Overview />, document.getElementById('products'));

ReactDOM.render(<RelatedItems />, document.getElementById('relatedItems'));

ReactDOM.render(<Reviews />, document.getElementById('reviews'));
