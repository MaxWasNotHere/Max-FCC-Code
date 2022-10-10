function arrayToDiction(arr) {
    let diction = {};
    for (let elem in arr) {
      let name = arr[elem][0];
      let amount = Number(arr[elem][1]);
      diction[name] = amount;
    }
    return diction;
  }
  
  function checkCashRegister(price, cash, cid) {
    let status;
    let change = [];
    let difference = cash - price;
  
    let diction = {
      "ONE HUNDRED": 100,
      "TWENTY": 20,
      "TEN": 10,
      "FIVE": 5,
      "ONE": 1,
      "QUARTER": 0.25,
      "DIME": 0.1,
      "NICKEL": 0.05,
      "PENNY": 0.01
    }
  
    let drware = arrayToDiction(cid);
    //use the biggest denom first to find change.
    let counter = 0;
    for (let elem in Object.keys(diction)) {
      //have all inputs *100 for rounding purposes
      difference *= 100;
  
      let denom = Object.keys(diction)[elem];//the name of the bill
      let weHave = Number(drware[denom]) * 100;//what we have in CID in this denom
      let value = Number(diction[denom]) * 100;//value of the bill
      let changeInDenom = Math.floor(difference / value) * value;
      
  
      if (weHave > 0) {
        if (changeInDenom == weHave && changeInDenom != 0) {
          change.push([Object.keys(diction)[elem], weHave / 100])
          difference -= weHave;
          counter ++;
        } else if (changeInDenom > weHave && changeInDenom != 0) {
          change.push([Object.keys(diction)[elem], weHave / 100])
          difference -= weHave;
        } else if (weHave > changeInDenom && changeInDenom != 0) {
          change.push([Object.keys(diction)[elem], changeInDenom / 100])
          difference -= changeInDenom;
          
        }
        difference = Math.ceil(difference)
      }
      difference /= 100;
    }
    
    //check states
    if (difference > 0){
      status = "INSUFFICIENT_FUNDS";
      change = [];
    } else if (difference == 0 && counter > 0){
      status = "CLOSED"
      change = cid;
    } else if (difference == 0) {
      status = "OPEN";
    } 
    return { status, change };
  }