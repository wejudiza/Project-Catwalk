const axios = require('axios');
const gitToken = require('../config.js');

const controllers = {

  // Products//
  getAllProducts: (req, res) => {
    // console.log(req.body)
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products', {
      headers: {
        Authorization: gitToken.TOKEN,
      },
    })
      .then((rawData) => {
        res.status(200).send(rawData.data);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
  getProductInfo: (req, res) => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${req.params.product_id}`, {
      headers: {
        Authorization: gitToken.TOKEN,
      },
    })
      .then((rawData) => {
        res.status(200).send(rawData.data);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
  getProductStyles: (req, res) => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${req.params.product_id}/styles`, {
      headers: {
        Authorization: gitToken.TOKEN,
      },
    })
      .then((rawData) => {
        res.status(200).send(rawData.data);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
  getRelatedProductIds: (req, res) => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${req.params.product_id}/related`, {
      headers: {
        Authorization: gitToken.TOKEN,
      },
    })
      .then((rawData) => {
        res.status(200).send(rawData.data);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },

  // Reviews//
  getAllReviews: (req, res) => {
    console.log(req.query)
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews/', {
      headers: {
        Authorization: gitToken.TOKEN,
      },
      params: {
        page: req.query.page || 1,
        count: req.query.count || 5,
        sort: req.query.sort || '',
        product_id: req.query.product_id,
      },
    })
      .then((rawData) => {
        res.status(200).send(rawData.data);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
  getMetadataById: (req, res) => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews/meta', {
      headers: {
        Authorization: gitToken.TOKEN,
      },
      params: {
        product_id: req.params.product_id,
      },
    })
      .then((rawData) => {
        res.status(200).send(rawData.data);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
  postReviewById: (req, res) => {
    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews/', req.body, {
      headers: {
        Authorization: gitToken.TOKEN,
      },
    })
      .then((rawData) => {
        res.status(200).send(rawData.data);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
  markReviewAsHelpful: (req, res) => {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews/${Number(req.params.review_id)}/helpful`, null, {
      headers: {
        Authorization: gitToken.TOKEN,
      },
    })
      .then(() => {
        res.status(200).send('Thank you for your feedback');
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
  reportReview: (req, res) => {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews/${Number(req.params.review_id)}/report`, null, {
      headers: {
        Authorization: gitToken.TOKEN,
      },
    })
      .then(() => {
        res.status(200).send('Thank you for your report');
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },

  // Q&A//
  getQuestionsById: () => {

  },
  getAnswersByQuestionId: () => {

  },
  postQuestionById: () => {

  },
  postAnswerByQuestionId: () => {

  },
  markQuestionAsHelpful: () => {

  },
  reportQuestion: () => {

  },
  markAnswerAsHelpful: () => {

  },
  reportAnswer: () => {

  },

  // Cart//
  getCart: (req, res) => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/cart', {
      headers: {
        Authorization: gitToken.TOKEN,
      },
    })
      .then((rawData) => {
        res.status(200).send(rawData.data);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
  postProductToCartBySkuId: (req, res) => {
    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/cart', req.body, {
      headers: {
        Authorization: gitToken.TOKEN,
      },
    })
      .then((rawData) => {
        res.status(200).send(rawData.data);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },

  // Interactions//
  postInteraction: (req, res) => {
    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/interactions', req.body, {
      headers: {
        Authorization: gitToken.TOKEN,
      },
    })
      .then((rawData) => {
        res.status(200).send(rawData.data);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
};

module.exports = controllers;
