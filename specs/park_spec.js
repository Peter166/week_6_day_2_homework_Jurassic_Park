const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {

    park = new Park('PARK', 5)
    dinasour1 = new Dinosaur('REX', 'MEAT', 1)
    dinasour2 = new Dinosaur('Not REX', 'More MEATY',2)

  });

  it('should have a name', function(){
    const actual = park.name
    const expected = 'PARK'
    assert.strictEqual(actual, expected)
  });
  it('should have a ticket price', function(){;
    const actual = park.ticketPrice
    const expected = 5
    assert.strictEqual(actual, expected)
  });
  it('should have a collection of dinosaurs', function(){
    park.addDinasour(dinasour1)
    const actual = park.count();
    const expected = 1;
    assert.deepEqual(actual, expected)
  });

  it('should be able to remove a dinosaur from its collection',function(){
    park.addDinasour(dinasour1)
    park.addDinasour(dinasour2)
    park.deleteDinasour(dinasour1)
    const actual = park.count();
    const expected = 1;
    assert.strictEqual(actual, expected)
  });
  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinasour(dinasour1)
    park.addDinasour(dinasour2)
    park.mostAttracts()
    const actual = dinasour2
    const expected = dinasour2
    assert.deepStrictEqual(actual, expected)
  });
  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinasour(dinasour1)
    park.addDinasour(dinasour2)
    const actual = park.findSpecie('REX')
    const expected = [dinasour1]
  });
  it('should be able to calculate the total number of visitors per day', function(){
    park.addDinasour(dinasour1)
    park.addDinasour(dinasour2)
    const actual = park.totalNumberOfVisitors()
    const expected = 3
  });

  it('should be able to calculate the total number of visitors per year', function(){
    park.addDinasour(dinasour1)
    park.addDinasour(dinasour2)
    const actual = park.totalNumberOfVisitorsPerYear()
    const expected = 1095
  });
  it('should be able to calculate total revenue for one year', function(){
    park.addDinasour(dinasour1)
    park.addDinasour(dinasour2)
    const actual = park.totalRevenueOfTheYear()
    const expected = 5475
  });
});
