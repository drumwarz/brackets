module.exports = function check(str, bracketsConfig) {
  let arr = [];
  let brackets = Object.fromEntries(bracketsConfig);
  for (let i = 0; i < str.length; i++) {
    if (arr.length === 0) {
      arr.push(str[i]);
    } else if (str[i] == brackets[arr[arr.length - 1]]) {
      arr.pop();
    } else {
      arr.push(str[i]);
    }
  }

  return !arr.length;
};
