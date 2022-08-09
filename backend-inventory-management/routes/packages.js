const router = require('express').Router();
let Package = require('../models/packages.model');

router.route('/').get((req, res) => {
  Package.find()
    .then(packages => res.json(packages))
    .catch(err => res.status(400).json('Error: ' + err));
});




router.route('/add').post((req, res) => {
    const pac_id = req.body.pac_id;
    const pac_add = req.body.pac_add;
 

  const newPackage = new Package({
    pac_id,
    pac_add

  });
  newPackage.save()
  .then(() => res.json('Package added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
  Package.findById(req.params.id)
    .then(package => res.json(package))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
  Package.findByIdAndDelete(req.params.id)
    .then(() => res.json('Package deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
  Package.findById(req.params.id)
    .then(package => {
        pac_id = req.body.pac_id;
        pac_add = req.body.pac_add;


      package.save()
        .then(() => res.json('Package updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;