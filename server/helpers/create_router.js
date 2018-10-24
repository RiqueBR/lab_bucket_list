const express = require('express');
const ObjectID = require('mongodb').ObjectID;


const createRouter = function (collection) {

  const router = express.Router();

  // SHOW ALL
  router.get('/', (req, res) =>{
    collection.find().toArray()
    .then((docs) => {
      res.json(docs)
    });
  })

  // SHOW ONE
  router.get('/:id', (req, res) => {
    const id = req.params.id;
    collection.findOne({ _id: ObjectID(id)}).then((doc)=> {
      res.json(doc)
    })
  })
  // CREATE ONE
  router.post('/', (req, res) => {
    collection.insertOne(req.body)
    .then(() => {
      collection.find().toArray()
      .then((docs)=> {
        res.json(docs)
      })
    })
  })

  // DELETE ONE
  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    collection.deleteOne({_id: ObjectID(id)})
    .then(() => {
      collection.find().toArray()
      .then((docs) => {
        res.json(docs)
      })
    })
  })


  return router;
}

module.exports = createRouter;
