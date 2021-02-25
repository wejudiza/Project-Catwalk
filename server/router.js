const router = require('express').Router();
const controllers = require('./controllers.js');

//PRODUCTS//
router
  .route('/products')
  .get(controllers.getAllProducts)

router
  .route('/products/:product_id')
  .get(controllers.getProductInfo)

router
  .route('/products/:product_id/styles')
  .get(controllers.getProductStyles)

router
  route('/products/:product_id/related')
  .get(controllers.getRelatedProductIds)

//REVIEWS//
router
  .route('/reviews/')
  .get(controllers.getAllReviews)
  .post(controllers.postReviewById)

router
  .route('/reviews/meta')
  .get(controllers.getMetadataById)

router
  .route('/reviews/:review_id/helpful')
  .put(controllers.markReviewAsHelpful)

router
  .route('/reviews/:review_id/report')
  .put(controllers.reportReview)

//Q&A//
router
  .route('/qa/questions')
  .get(controllers.getQuestionsById)
  .post(controllers.postQuestionById)

router
  .route('/qa/questions/:question_id/answers')
  .get(controllers.getAnswersByQuestionId)
  .post(controllers.postAnswerByQuestionId)

router
  .route('/qa/questions/:question_id/helpful')
  .put(controllers.markQuestionAsHelpful)

router
  .route('/qa/questions/:question_id/report')
  .put(controllers.reportQuestion)

router
  .route('/qa/answers/:answer_id/helpful')
  .put(controllers.markAnswerAsHelpful)

router
  .route('/qa/answers/:answer_id/report')
  .put(controllers.reportAnswer)

//CART//
router
  .route('/cart')
  .get(controllers.getCart)
  .post(controllers.postProductToCartBySkuId)

//INTERACTIONS//
router
  .route('/interactions')
  .post(controllers.postInteraction)