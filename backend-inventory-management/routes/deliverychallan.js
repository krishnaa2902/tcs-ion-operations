const router = require('express').Router();
let DeliveryChallan = require('../models/deliverychallan.model');

router.route('/').get((req, res) => {
  DeliveryChallan.find()
    .then(deliverychallan => res.json(deliverychallan))
    .catch(err => res.status(400).json('Error: ' + err));
});




router.route('/add').post((req, res) => {
    const dc_cust_email = req.body.dc_cust_email;
    const dc_date = Date(req.body.dc_date);
    const dc_status = req.body.dc_status;
 

  const newDeliveryChallan = new DeliveryChallan({
    dc_cust_email,
    dc_date,
    dc_status

  });
  newDeliveryChallan.save()
  .then(() => res.json('DeliveryChallan added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
  DeliveryChallan.findById(req.params.id)
    .then(deliverychallan => res.json(deliverychallan))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
  DeliveryChallan.findByIdAndDelete(req.params.id)
    .then(() => res.json('DeliveryChallan deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
  DeliveryChallan.findById(req.params.id)
    .then(deliverychallan => {
        dc_cust_email = req.body.dc_cust_email;
        dc_date = Date(req.body.dc_date);
        dc_status = req.body.dc_status;


        deliverychallan.save()
        .then(() => res.json('DeliveryChallan updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;