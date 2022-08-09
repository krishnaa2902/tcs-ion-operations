const router = require('express').Router();
let SalesOrder = require('../models/salesorders.model');

router.route('/').get((req, res) => {
  SalesOrder.find()
    .then(salesorders => res.json(salesorders))
    .catch(err => res.status(400).json('Error: ' + err));
});




router.route('/add').post((req, res) => {
    const so_cust_email = req.body.so_cust_email;
    const so_cust_add = req.body.so_cust_add;
    const so_grp_name = req.body.so_grp_name;
    const so_item_id = req.body.so_item_id;
    const so_qty = Number(req.body.so_qty);
 

  const newSalesOrder = new SalesOrder({
    so_cust_email,
    so_cust_add,
    so_grp_name,
    so_item_id,
    so_qty

  });
  newSalesOrder.save()
  .then(() => res.json('SalesOrder added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
  SalesOrder.findById(req.params.id)
    .then(salesorder => res.json(salesorder))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
  SalesOrder.findByIdAndDelete(req.params.id)
    .then(() => res.json('SalesOrder deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
  SalesOrder.findById(req.params.id)
    .then(salesorder => {
        so_cust_email = req.body.so_cust_email;
        so_cust_add = req.body.so_cust_add;
        so_grp_name = req.body.so_grp_name;
        so_item_id = req.body.so_item_id;
        so_qty = Number(req.body.so_qty);


      salesorder.save()
        .then(() => res.json('SalesOrder updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;