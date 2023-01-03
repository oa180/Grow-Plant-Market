const router = require('express').Router();
const orderController = require('../app/controller/order.controller');
const { auth } = require('../app/middlewares/auth.middlewares');

router.post('/plcacitems', auth, orderController.plcacItems);
router.get(
  '/confirmorder/:orderid',
  auth,
  orderController.confirmOrder
);
router.post(
  '/orderdetails/:orderid',
  auth,
  orderController.orderDetails
);

module.exports = router;
