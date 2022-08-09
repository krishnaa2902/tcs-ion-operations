const router = require('express').Router();
let CreditNotes = require('../models/creditnotes.model');

router.route('/').get((req, res) => {
  CreditNotes.find()
    .then(creditnotes => res.json(creditnotes))
    .catch(err => res.status(400).json('Error: ' + err));
});




router.route('/add').post((req, res) => {
    const cn_id = req.body.cn_id;
    const cn_amt = Number(req.body.cn_amt);
 

  const newCreditNotes = new CreditNotes({
    cn_id,
    cn_amt

  });
  newCreditNotes.save()
  .then(() => res.json('CreditNotes added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
  CreditNotes.findById(req.params.id)
    .then(creditnotes => res.json(creditnotes))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
  CreditNotes.findByIdAndDelete(req.params.id)
    .then(() => res.json('CreditNotes deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
  CreditNotes.findById(req.params.id)
    .then(creditnotes => {
        cn_id = req.body.cn_id;
        cn_amt = Number(req.body.cn_amt);


      creditnotes.save()
        .then(() => res.json('CreditNotes updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;