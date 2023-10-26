const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();


suite('Unit Tests', function(){

  // convertHandler should correctly read a whole number input.
  test('#equal, #notEqual', function () {
  assert.equal(convertHandler.getNum({input : '2mi'}), 2);
    });

  //convertHandler should correctly read a decimal number input.
  test('#equal, #notEqual', function () {
    assert.equal(convertHandler.getNum({input : '2.5mi'}), 2.5);
  })

  // convertHandler should correctly read a fractional input.
  test('#equal, #notEqual', function () {
    assert.equal(convertHandler.getNum({input : '2/5mi'}), 2/5);
  })

  //convertHandler should correctly read a fractional input with a decimal.
  test('#equal, #notEqual', function () {
    assert.equal(convertHandler.getNum({input : '2/5.5mi'}), 2/5.5);
  })

  // convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).
    test('#equal, #notEqual', function () {
    assert.equal(convertHandler.getNum({input : '2/5/5mi'}), false);
  })

  // convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.
  test('#equal, #notEqual', function () {
    assert.equal(convertHandler.getNum({input : 'mi'}), 1);
  })
  
  test('#equal, #notEqual', function () {
    assert.equal(convertHandler.getUnit({input : '2mi'}), 'mi');
    assert.equal(convertHandler.getUnit({input : '2km'}), 'km');
    assert.equal(convertHandler.getUnit({input : '2kg'}), 'kg');
    assert.equal(convertHandler.getUnit({input : '2lbs'}), 'lbs');
    assert.equal(convertHandler.getUnit({input : '2gal'}), 'gal');
    assert.equal(convertHandler.getUnit({input : '2L'}), 'L');
  })
  test('#equal, #notEqual', function () {
    assert.equal(convertHandler.getUnit({input : '2gh'}), null);
  })
  test('#equal, #notEqual', function () {
    assert.equal(convertHandler.getReturnUnit('mi'), 'km');
    assert.equal(convertHandler.getReturnUnit('km'), 'mi');
    assert.equal(convertHandler.getReturnUnit('L'), 'gal');
    assert.equal(convertHandler.getReturnUnit('gal'), 'L');
    assert.equal(convertHandler.getReturnUnit('lbs'), 'kg');
    assert.equal(convertHandler.getReturnUnit('kg'), 'lbs');
  })
  test('#equal, #notEqual', function () {
    assert.equal(convertHandler.spellOutUnit('mi'), 'miles');
    assert.equal(convertHandler.spellOutUnit('km'), 'kilometers');
    assert.equal(convertHandler.spellOutUnit('L'), 'liters');
    assert.equal(convertHandler.spellOutUnit('gal'), 'gallons');
    assert.equal(convertHandler.spellOutUnit('lbs'), 'pounds');
    assert.equal(convertHandler.spellOutUnit('kg'), 'kilograms');
  })
  test('#equal, #notEqual', function () {
    assert.equal(convertHandler.getReturnUnit('mi'), 'km');
  });
  test('#equal, #notEqual', function () {
    assert.equal(convertHandler.getReturnUnit('km'), 'mi');
  });
  test('#equal, #notEqual', function () {
    assert.equal(convertHandler.getReturnUnit('L'), 'gal');
  });
  test('#equal, #notEqual', function () {
    assert.equal(convertHandler.getReturnUnit('gal'), 'L');
  });
  test('#equal, #notEqual', function () {
    assert.equal(convertHandler.getReturnUnit('lbs'), 'kg');
  });
  test('#equal, #notEqual', function () {
    assert.equal(convertHandler.getReturnUnit('kg'), 'lbs');
  });
  
});