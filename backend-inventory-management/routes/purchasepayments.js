const router = require('express').Router();
let PurchasePayments = require('../models/purchasepayments.model');

router.route('/').get((req, res) => {
  PurchasePayments.find()
    .then(purchasepayments => res.json(purchasepayments))
    .catch(err => res.status(400).json('Error: ' + err));
});




router.route('/add').post((req, res) => {
    const pp_id = req.body.pp_id;
    const pp_amt = Number(req.body.pp_amt);
 

  const newPurchasePayments = new PurchasePayments({
    pp_id,
    pp_amt

  });
  newPurchasePayments.save()
  .then(() => res.json('PurchasePayments added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
  PurchasePayments.findById(req.params.id)
    .then(purchasepayments => res.json(purchasepayments))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
  PurchasePayments.findByIdAndDelete(req.params.id)
    .then(() => res.json('PurchasePayments deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
  PurchasePayments.findById(req.params.id)
    .then(purchasepayments => {
        pp_id = req.body.pp_id;
        pp_amt = Number(req.body.pp_amt);


      purchasepayments.save()
        .then(() => res.json('PurchasePayments updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;