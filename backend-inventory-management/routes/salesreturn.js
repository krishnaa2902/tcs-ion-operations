const router = require('express').Router();
let SalesReturn = require('../models/salesreturn.model');

router.route('/').get((req, res) => {
  SalesReturn.find()
    .then(salesreturn => res.json(salesreturn))
    .catch(err => res.status(400).json('Error: ' + err));
});




router.route('/add').post((req, res) => {
    const sr_id = req.body.sr_id;
    const sr_reason = req.body.sr_reason;
 

  const newSalesReturn = new SalesReturn({
    sr_id,
    sr_reason

  });
  newSalesReturn.save()
  .then(() => res.json('SalesReturn added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
  SalesReturn.findById(req.params.id)
    .then(salesreturn => res.json(salesreturn))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
  SalesReturn.findByIdAndDelete(req.params.id)
    .then(() => res.json('SalesReturn deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
  SalesReturn.findById(req.params.id)
    .then(salesreturn => {
        inv_id = req.body.inv_id;
        inv_add = req.body.inv_add;


      salesreturn.save()
        .then(() => res.json('SalesReturn updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;