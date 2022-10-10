function telephoneCheck(str) {
    let arr = str.split('');
    const goodNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const acceptable = [
      "xxx-xxx-xxxx", 
      "1 xxx-xxx-xxxx", 
      "1 xxx xxx xxxx", 
      "1 (xxx) xxx-xxxx", 
      "1xxxxxxxxxx",
      "1(xxx)xxx-xxxx",
      "(xxx)xxx-xxxx",
      "xxxxxxxxxx"
    ];
    for (let i in acceptable) {
      //check every format in acceptable against arr
      let arr2 = acceptable[i].split('');
      let badCount = 0;
  
      if (arr2.length == arr.length){
        for (let i in arr2) {
        //match all the array characters, break if mismatch, return true if match
        switch (arr2[i] === 'x') {
          case false:
            if (arr2[i] !== arr[i]) {
              badCount++;
            }
            break;
          case true:
            if (!goodNumbers.includes(arr[i])) {
              badCount++
            }
            break;
        }
      }
      if (badCount === 0) {return true}
      }
  
      
    }
    return false;
  }
  
  