function findLargestNumeral(num) { //used to find biggest numeral that fits into given number
    let diction = {
      1000: 'M',
      900: 'CM',
      500: 'D',
      400: 'CD',
      100: 'C',
      90: 'XC',
      50: 'L',
      40: 'XL',
      10: 'X',
      9: 'IX',
      5: 'V',
      4: 'IV',
      1: 'I'
    }
    let arabic = 0;
    let roman = '';
    for (let elem in Object.keys(diction)) {
      if (Number(Object.keys(diction)[elem]) > arabic && Number(Object.keys(diction)[elem]) <= num) {
        arabic = Number(Object.keys(diction)[elem]);
        roman = diction[Object.keys(diction)[elem]];
      }
    }
    return [arabic, roman];
  }
  
  function convertToRoman(num) {
    let [number, numeral] = findLargestNumeral(num);
    let rep = 1;
    let remainder = 0;
    rep = Math.floor(num / number); //divide out the biggest numerals and see how many times it needs to be repeated
    remainder = num % number; //get remainder to pass into recursion 
    let remain = '';
  
    if (num > 0) { //need a if loop here otherwise it goes infinite recursion
      remain = convertToRoman(remainder);
    }
    
    let result = numeral.repeat(rep) + remain;
  
    return result;
  }