const router = require('express').Router();
let SalesInvoice = require('../models/salesinvoice.model');

router.route('/').get((req, res) => {
  SalesInvoice.find()
    .then(salesinvoice => res.json(salesinvoice))
    .catch(err => res.status(400).json('Error: ' + err));
});




router.route('/add').post((req, res) => {
    const inv_id = req.body.inv_id;
    const inv_add = req.body.inv_add;
    const inv_email = req.body.inv_email;
    const inv_amt = Number(req.body.inv_amt);
 

  const newSalesInvoice = new SalesInvoice({
    inv_id,
    inv_email,
    inv_add,
    inv_amt

  });
  newSalesInvoice.save()
  .then(() => res.json('SalesInvoice added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
  SalesInvoice.findById(req.params.id)
    .then(salesinvoice => res.json(salesinvoice))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
  SalesInvoice.findByIdAndDelete(req.params.id)
    .then(() => res.json('SalesInvoice deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
  SalesInvoice.findById(req.params.id)
    .then(salesinvoice => {
        inv_id = req.body.inv_id;
        inv_add = req.body.inv_add;


      salesinvoice.save()
        .then(() => res.json('SalesInvoice updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;