const router = require('express').Router();
let VendorCredit = require('../models/vendorcredit.model');

router.route('/').get((req, res) => {
  VendorCredit.find()
    .then(vendorcredit => res.json(vendorcredit))
    .catch(err => res.status(400).json('Error: ' + err));
});




router.route('/add').post((req, res) => {
    const vc_id = req.body.vc_id;
    const vc_amt = Number(req.body.vc_amt);
 

  const newVendorCredit = new VendorCredit({
    vc_id,
    vc_amt

  });
  newVendorCredit.save()
  .then(() => res.json('VendorCredit added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
  VendorCredit.findById(req.params.id)
    .then(vendorcredit => res.json(vendorcredit))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
  VendorCredit.findByIdAndDelete(req.params.id)
    .then(() => res.json('VendorCredit deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
  VendorCredit .findById(req.params.id)
    .then(vendorcredit => {
        vc_id = req.body.vc_id;
        vc_amt = Number(req.body.vc_amt);


      vendorcredit.save()
        .then(() => res.json('VendorCredit updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;