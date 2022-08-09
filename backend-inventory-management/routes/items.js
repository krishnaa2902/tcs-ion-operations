const router = require('express').Router();
let Item = require('../models/items.model');

router.route('/').get((req, res) => {
  Item.find()
    .then(items => res.json(items))
    .catch(err => res.status(400).json('Error: ' + err));
});




router.route('/add').post((req, res) => {
  const item_group_name = req.body.item_group_name;
  const item_name = req.body.item_name;
  const item_quantity = Number(req.body.item_quantity);
  const item_dimensions = req.body.item_dimensions;
  const item_weight = Number(req.body.item_weight);
  const item_manufacturer = req.body.item_manufacturer;
  const item_brand = req.body.item_brand;
  const item_selling_price = Number(req.body.item_selling_price);
  const item_cost_price = Number(req.body.item_cost_price);
  const item_opening_stock = Number(req.body.item_opening_stock);
  const item_reorder_point = Number(req.body.item_reorder_point);
  const item_vendor = req.body.item_vendor;

  const newItem = new Item({
    item_group_name,
    item_name,
    item_quantity,
    item_dimensions,
    item_weight,
    item_manufacturer,
    item_brand,
    item_selling_price,
    item_cost_price,
    item_opening_stock,
    item_reorder_point,
    item_vendor

  });
  newItem.save()
  .then(() => res.json('Item added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
  Item.findById(req.params.id)
    .then(item => res.json(item))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
  Item.findByIdAndDelete(req.params.id)
    .then(() => res.json('Item deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
  Item.findById(req.params.id)
    .then(item => {
      item.item_group_name = req.body.item_group_name;
      item.item_name = req.body.item_name;
      item.item_quantity = Number(req.body.item_quantity);
      item.item_dimensions = req.body.item_dimensions;
      item.item_weight = Number(req.body.item_weight);
      item.item_manufacturer = req.body.item_manufacturer;
      item.item_brand = req.body.item_brand;
      item.item_selling_price = Number(req.body.item_selling_price);
      item.item_cost_price = Number(req.body.item_cost_price);
      item.item_opening_stock = Number(req.body.item_opening_stock);
      item.item_reorder_point = Number(req.body.item_reorder_point);
      item.item_vendor = req.body.item_vendor;

      item.save()
        .then(() => res.json('Item updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;