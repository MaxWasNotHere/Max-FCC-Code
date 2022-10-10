function minus13(char) { //finds replacement char by looking up ascii codes and shifting 13 places
    if (char.match(/\w/)) {
      let code = char.charCodeAt() - 13;
      if (code < 65) { code += 26; } //loops back into the alphabet, otherwise we git a load of weird characters
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