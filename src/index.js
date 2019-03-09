module.exports = function check(str, bracketsConfig) {
  var L = str.length + 1;
  var reg = /\(\)|\|\||\[\]|\{\}|[1][2]|[3][4]|[5][6]|[7][7]|[8][8]/;
  while(str = str.replace(reg, '')){
    console.log(str);
    if(str.length == L && L != 0) return false;
    if(L == 0) return true;
    L = str.length;
  }
  return true;
}
