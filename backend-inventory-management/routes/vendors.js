const router = require('express').Router();
let Vendor = require('../models/vendors.model');

router.route('/').get((req, res) => {
  Vendor.find()
    .then(vendors => res.json(vendors))
    .catch(err => res.status(400).json('Error: ' + err));
});




router.route('/add').post((req, res) => {
  const ven_name = req.body.ven_name;
  const ven_email = req.body.ven_email;


  const newVendor = new Vendor({
    ven_name,
    ven_email
  });

  newVendor.save()
  .then(() => res.json('Vendor added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
    Vendor.findById(req.params.id)
    .then(vendor => res.json(vendor))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
  Vendor.findByIdAndDelete(req.params.id)
    .then(() => res.json('Vendor deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
  Vendor.findById(req.params.id)
    .then(vendor => {
      vendor.ven_name = req.body.ven_name;
      vendor.ven_email = req.body.ven_email;

      vendor.save()
        .then(() => res.json('Vendor updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;