function palindrome(str) {
    let fixed = str.match(/\w/gi);
    
    fixed = fixed.filter(char => char != '_')
                 .map(char => char.toLowerCase())
  
    if (fixed.length % 2 == 0){
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