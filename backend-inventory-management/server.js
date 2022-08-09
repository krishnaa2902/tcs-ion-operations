
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
}) 

const itemsRouter = require('./routes/items');
app.use('/items', itemsRouter);

const customersRouter = require('./routes/customers');
app.use('/customers', customersRouter);

const itemgroupsRouter = require('./routes/itemgroups');
app.use('/itemgroups', itemgroupsRouter);

const salesordersRouter = require('./routes/salesorders');
app.use('/salesorders', salesordersRouter);

const packagesRouter = require('./routes/packages');
app.use('/packages', packagesRouter);

const deliverychallanRouter = require('./routes/deliverychallan');
app.use('/deliverychallan', deliverychallanRouter);

const salesinvoiceRouter = require('./routes/salesinvoice');
app.use('/salesinvoice', salesinvoiceRouter);

const salesreturnRouter = require('./routes/salesreturn');
app.use('/salesreturn', salesreturnRouter);

const salespaymentsRouter = require('./routes/salespayments');
app.use('/salespayments', salespaymentsRouter);

const creditnotesRouter = require('./routes/creditnotes');
app.use('/creditnotes', creditnotesRouter);

const vendorsRouter = require('./routes/vendors');
app.use('/vendors', vendorsRouter);

const purchaseordersRouter = require('./routes/purchaseorders');
app.use('/purchaseorders', purchaseordersRouter);

const purchasepaymentsRouter = require('./routes/purchasepayments');
app.use('/purchasepayments', purchasepaymentsRouter);

const vendorcreditRouter = require('./routes/vendorcredit');
app.use('/vendorcredit', vendorcreditRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});