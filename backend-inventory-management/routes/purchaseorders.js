const router = require('express').Router();
let PurchaseOrder = require('../models/purchaseorders.model');

router.route('/').get((req, res) => {
  PurchaseOrder.find()
    .then(purchaseorders => res.json(purchaseorders))
    .catch(err => res.status(400).json('Error: ' + err));
});




router.route('/add').post((req, res) => {
    const po_cust_email = req.body.po_cust_email;
    const po_grp_name = req.body.po_grp_name;
    const po_item_id = req.body.po_item_id;
    const po_qty = Number(req.body.po_qty);
 

  const newPurchaseOrder = new PurchaseOrder({
    po_cust_email,
    po_grp_name,
    po_item_id,
    po_qty

  });
  newPurchaseOrder.save()
  .then(() => res.json('PurchaseOrder added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
  PurchaseOrder.findById(req.params.id)
    .then(purchaseorder => res.json(purchaseorder))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
  PurchaseOrder.findByIdAndDelete(req.params.id)
    .then(() => res.json('PurchaseOrder deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
  PurchaseOrder.findById(req.params.id)
    .then(purchaseorder => {
        po_cust_email = req.body.po_cust_email;
        po_grp_name = req.body.po_grp_name;
        po_item_id = req.body.po_item_id;
        po_qty = Number(req.body.po_qty);


      purchaseorder.save()
        .then(() => res.json('PurchaseOrder updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;