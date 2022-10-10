function palindrome(str) {
    let fixed = str.match(/\w/gi);//keep only chars
    
    fixed = fixed.filter(char => char != '_')
                 .map(char => char.toLowerCase()) //make char all lower case and remove '_'
  
    if (fixed.length % 2 == 0){ //check depends on odd or even number of chars, just match first to last and move in to the middle
      for (let i = 0; i < fixed.length / 2; i++){
        if (fixed[i] != fixed[fixed.length - i - 1]){
          return false;
        }
      }
    } else if (fixed.length % 2 == 1){
      for (let i = 0; i < Math.floor(fixed.length / 2); i++){
        if (fixed[i] !== fixed[fixed.length - i -1]){
          return false;
        }
      }
    }
    return true;
  }