const router = require('express').Router();
let Itemgroups = require('../models/itemgroups.model');

router.route('/').get((req, res) => {
  Itemgroups.find()
    .then(itemgroups => res.json(itemgroups))
    .catch(err => res.status(400).json('Error: ' + err));
});




router.route('/add').post((req, res) => {
  const grp_name = req.body.grp_name;


  const newItemgroup = new Itemgroups({
    grp_name
  });

  newItemgroup.save()
  .then(() => res.json('Item Group added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
    Itemgroups.findById(req.params.id)
    .then(itemgroup => res.json(itemgroup))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
    Itemgroups.findByIdAndDelete(req.params.id)
    .then(() => res.json('Item Group deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
    Itemgroups.findById(req.params.id)
    .then(itemgroup => {
      itemgroup.cust_name = req.body.cust_name;
      itemgroup.cust_email = req.body.cust_email;

      itemgroup.save()
        .then(() => res.json('Item Group updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;