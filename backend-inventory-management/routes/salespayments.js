const router = require('express').Router();
let SalesPayments = require('../models/salespayments.model');

router.route('/').get((req, res) => {
  SalesPayments.find()
    .then(salespayments => res.json(salespayments))
    .catch(err => res.status(400).json('Error: ' + err));
});




router.route('/add').post((req, res) => {
    const sp_id = req.body.sp_id;
    const sp_amt = Number(req.body.sp_amt);
 

  const newSalesPayments = new SalesPayments({
    sp_id,
    sp_amt

  });
  newSalesPayments.save()
  .then(() => res.json('SalesPayments added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
  SalesPayments.findById(req.params.id)
    .then(salespayments => res.json(salespayments))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
  SalesPayments.findByIdAndDelete(req.params.id)
    .then(() => res.json('SalesPayments deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
  SalesPayments.findById(req.params.id)
    .then(salespayments => {
        sp_id = req.body.sp_id;
        sp_amt = Number(req.body.sp_amt);


      salespayments.save()
        .then(() => res.json('SalesPayments updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;