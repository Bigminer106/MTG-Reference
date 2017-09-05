const express = require('express');

const router = express.Router();

const queries = require('../db/queries');

function isValidId(req, res, next) {
  if(!isNaN(req.params.id)) {
    return next();
  } else {
    next(new Error('Invalid ID'));
  }
};

function validCard(card) {
  const hasName = typeof card.name == 'string' && card.title.trim() != '';
  const hasArt = typeof card.art == 'string' && card.art.trim() != '';
  const hasCost = typeof card.cost == 'number' && card.cost.trim() != isNaN;
  const hasSet = typeof card.set == 'string' && card.set.trim() != '';
  const hasColor = typeof card.color == 'string' && card.color.trim() != '';
  const hasType = typeof card.supertype == 'string' && card.supertype.trim() != '';
  const hasRare = typeof card.rarity == 'string' && card.rarity.trim() != '';
  return hasName && hasArt && hasCost && hasSet && hasColor && hasType && hasRare;
};

router.get('/', (req, res) => {
  queries.getAll().then(card-list => {
    res.json(card-list);
  })
});

router.get('/:id', isValidId, (req, res) => {
  queries.getOne(req.params.id).then(card-list => {
    res.json(card-list);
  })
});

router.get('/:color', isValidId, (req, res) => {
  queries.getColor(req.params.color).then(card-list => {
    res.json(card-list);
  })
});

router.get('/:supertype', isValidId, (req, res) => {
  queries.getType(req.params.supertype).then(card-list => {
    res.json(card-list);
  })
});

router.get('/:set', isValidId, (req, res) => {
  queries.getSet(req.params.set).then(card-list => {
    res.json(card-list);
  })
});

router.get('/:rarity', isValidId, (req, res) => {
  queries.getRare(req.params.rarity).then(card-list => {
    res.json(card-list);
  })
});

router.put('/:id', isValidId, (req, res, next) => {
  if (validCard(req.body)) {
    queries.update(req.params.id, req.body).then(card-list => {
      res.json(card-list[0]);
    })
  } else {
    next(new Error('Invalid Card'))
  }
});

router.post('/', (req, res, next) => {
  if (validCard(req.body)) {
    queries.create(req.body).then(card-list => {
      res.json(card-list[0]);
    })
  } else {
    next(new Error('Invalid Card'))
  }
});

router.delete('/:id', isValidId, (req, res) => {
  queries.delete(req.params.id).then(() => {
    res.json({
      deleted: true
    });
  });
});

module.exports = router;
