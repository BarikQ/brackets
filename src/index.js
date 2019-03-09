module.exports = function check(str, bracketsConfig) {
  var L = str.length + 1;
  var reg = /\(\)|\|\||\[\]|\{\}|[1][2]|[3][4]|[5][6]|[7][7]|[8][8]/;
  while(str = str.replace(reg, '')){
    if(L == 0) return true;
    if(L != 0 && str.length == L) return false; 
    L = str.length;
  }
  return true;
}
