'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/').post(function(req, res)  {
    res.redirect('/api/convert')
  })

  app.route('/api/convert').get(function(req, res)  {
    
    var unitTest = req.query.input.replace(/[-/\s.0-9]/g, "");

    var numberTest = req.query.input.replace(/[a-z]/gi, "");

    var testArray = unitTest.match(/(^mi$)|(^km$)|(^kg$)|(^l$)|(^lbs$)|(^gal$)/i);
    
    
    if ( testArray == null && (numberTest <= -1 || isNaN(numberTest)))      {
      res.send('invalid number and unit')
    }
    
    else if (testArray == null)  
    {
      res.send('invalid unit')
    }   
    else   
    {

    var initNum = convertHandler.getNum(req.query)

    if (initNum == false)  {
      res.send('invalid number')
    }  else  {
    var initUnit = convertHandler.getUnit(req.query)
    var returnUnit = convertHandler.getReturnUnit(initUnit)
    var spelledReturnUnit = convertHandler.spellOutUnit(returnUnit)
    var spelledInitialUnit = convertHandler.spellOutUnit(initUnit)
    var returnNum = convertHandler.convert(initNum, initUnit)
    var string = convertHandler.getString(initNum, initUnit, spelledInitialUnit, returnNum, returnUnit, spelledReturnUnit)
    res.send(string)
    }
    }
  })


  
};
