function minus13(char) {
    if (char.match(/\w/)) {
      let code = char.charCodeAt() - 13;
      if (code < 65) { code += 26; }
      return String.fromCharCode(code);
    } else {
      return char;
    }
  }
  
  
  function rot13(str) {
    let arr = str.split("");
    let arr2 = arr.map(minus13)
  
    return arr2.join('');
  }