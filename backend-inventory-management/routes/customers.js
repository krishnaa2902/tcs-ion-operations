const router = require('express').Router();
let Customer = require('../models/customers.model');

router.route('/').get((req, res) => {
  Customer.find()
    .then(customers => res.json(customers))
    .catch(err => res.status(400).json('Error: ' + err));
});




router.route('/add').post((req, res) => {
  const cust_name = req.body.cust_name;
  const cust_email = req.body.cust_email;
  const cust_add = req.body.cust_add;



  const newCustomer = new Customer({
    cust_name,
    cust_email,
    cust_add 
  });

  newCustomer.save()
  .then(() => res.json('Customer added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
    Customer.findById(req.params.id)
    .then(customer => res.json(customer))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
  Customer.findByIdAndDelete(req.params.id)
    .then(() => res.json('Customer deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
  Customer.findById(req.params.id)
    .then(customer => {
      customer.cust_name = req.body.cust_name;
      customer.cust_email = req.body.cust_email;
      customer.cust_add = req.body.cust_add;

      customer.save()
        .then(() => res.json('Customer updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;