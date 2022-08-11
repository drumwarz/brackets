module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
    return false;
  } 

  let arr = [];

  for (let i = 0; i < str.length; i++) {

    let activeBracket = str[i];

    for (let a = 0; a < bracketsConfig.length; a++) {

      let element = arr[arr.length - 1];

      if (bracketsConfig[a][1] == activeBracket && bracketsConfig[a][0] == element) {
        arr.pop();
      } else if (bracketsConfig[a][0] == activeBracket) {
        arr.push(activeBracket);
      }
    }
  }

  if (arr.length == 0) {
    return true;
  } else {
    return false;
  }
}
