function ConvertHandler() {

  
  this.getNum = function(input) {
    let initNum;
    
    initNum = input.input
    initNum = initNum.replace(/m|k|g|l|b|i|a|s/gi, "");

    if (initNum <= -1)  {
      return false
    }
    
    if (initNum.match('/') != null)  {
       if(initNum.match(/(\/+)/g).length > 1 || initNum.match(/(\/+)/g)[0] == '//')  
          {
          return false;
          }
      var a = initNum;
      var split = a.split('/');
      var result_one = Number(split[0]);
      var result_two = Number(split[1]);
      var result = result_one / result_two
      initNum = result;
    }
    
    initNum = Number(initNum)
      if(initNum == 0)  {  initNum = 1;  }
    return initNum;
  };
  
  this.getUnit = function(input) {
    let initUnit;
    initUnit = input.input
    initUnit = initUnit.replace(/[\s./0-9]/g, "");

    var testArray = initUnit.match(/(^mi$)|(^km$)|(^kg$)|(^l$)|(^lbs$)|(^gal$)/i);

    if (testArray == null)  {
      initUnit = null
      return initUnit
    }  

    if (initUnit != 'L')  {
      initUnit = initUnit.toLowerCase()
    }

    if (initUnit == 'l')  {
      initUnit = 'L'
    }

    return initUnit;
  };
  
  this.getReturnUnit = function(initUnit) {
    var returnUnit;

    if (initUnit == 'km' || initUnit == 'KM')  {
      returnUnit = 'mi'
    }
    if (initUnit == 'mi' || initUnit == 'MI')  {
      returnUnit = 'km'
    }
    if (initUnit == 'gal' || initUnit == 'GAL')  {
      returnUnit = 'L'
    }
    if (initUnit == 'L' || initUnit == 'l')  {
      returnUnit = 'gal'
    }
    if (initUnit == 'kg' || initUnit == 'KG')  {
      returnUnit = 'lbs'
    }
    if (initUnit == 'lbs' || initUnit == 'LBS')  {
      returnUnit = 'kg'
    }
    return returnUnit;
  };

  

  this.spellOutUnit = function(unit) {
    if(unit == 'kg' || unit == 'KG')  {
      unit = 'kilograms'
    }
    if(unit == 'mi' || unit == 'MI')  {
      unit = 'miles'
    }
    if(unit == 'gal' || unit == 'GAL')  {
      unit = 'gallons'
    }
    if(unit == 'km' || unit == 'KM')  {
      unit = 'kilometers'
    }
    if(unit == 'L' || unit == 'l')  {
      unit = 'liters'
    }
    if(unit == 'lbs' || unit == 'LBS')  {
      unit = 'pounds'
    }
    
    return unit;
  };

  
  
  this.convert = function(initNum, initUnit) {
    var returnNum;
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    
    if(initUnit == 'gal' || initUnit == 'GAL' )  {
      returnNum = initNum * 3.78541
      returnNum = (returnNum).toFixed(5)
    }
    if(initUnit == 'L' || initUnit == 'l')  {
      returnNum = initNum / 3.78541
      returnNum = (returnNum).toFixed(5)
    }
    
    if(initUnit == 'lbs' || initUnit == 'LBS' )  {
      returnNum = initNum * 0.453592
      returnNum = (returnNum).toFixed(5)
    }
    if(initUnit == 'kg' || initUnit == 'KG' )  {
      returnNum = initNum / 0.453592
      returnNum = (returnNum).toFixed(5)
    }
    const miToKm = 1.60934;
    if(initUnit == 'mi' || initUnit == 'MI' )  {
      returnNum = initNum * 1.60934
      returnNum = (returnNum).toFixed(5)
    }
    if(initUnit == 'km' || initUnit == 'KM' )  {
      returnNum = initNum / 1.60934
      returnNum = (returnNum).toFixed(5)
    }

    returnNum = Number(returnNum)
    return returnNum;
  };
  
  this.getString = function(initNum, initUnit, spelledInitialUnit, returnNum, returnUnit, spelledReturnUnit) {
    
    var newString = initNum + ' ' + spelledInitialUnit + ' converts to ' +  returnNum + ' ' + spelledReturnUnit
    
    var string = { initNum : initNum, initUnit : initUnit, returnNum: returnNum, returnUnit : returnUnit, string : newString }
    return string;
  };
  
}


module.exports = ConvertHandler;
