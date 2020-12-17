const express = require('express');
const sequelize = require('./configuration/config');
const books = require ('./models/book');
const borrowers = require ('./models/borrower');
const owners = require ('./models/owner');
const app = express();
const cors=require('cors');
const book = require('./models/book');
const exchange_transaction = require('./models/exchange_transaction');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.authenticate().
then(()=>{console.log('connection has been established successfully');})
.catch((err)=>{console.log(err);});

//get all the books 

app.get('/get_books',function(req,res){

    books.findAll().then(function(result){
  
      res.send(result);
    }).catch(function(err){
      res.send(err);
    });
  
  });

  // get all owners 

  app.get('/get_owners',function(req,res){

    owners.findAll().then(function(result){
  
      res.send(result);
    }).catch(function(err){
      res.send(err);
    });
  
  });


  // get all borrowers

  app.get('/get_borrowers',function(req,res){

    borrowers.findAll().then(function(result){
  
      res.send(result);
    }).catch(function(err){
      res.send(err);
    });
  
  });
  
  //get book by ID

  

app.get('/get_book/:id',function(req,res){

  books.findByPk(req.params.id).then(function(result){

    res.send(result);
  }).catch(function(err){
    res.send(err);
  });
});


//get book owner 


app.get('/get_book_owner/:id', function(req,res){
book.findAll({
  include: [{
    model: exchange_transaction,
  required: true,
  where: {id: req.params.id}
   }]
}).then(book => {

  res.send(res)
  
});
});


//console message: display server running
app.listen(3050, function () {
    console.log("server running on port 3050");
  });
  
