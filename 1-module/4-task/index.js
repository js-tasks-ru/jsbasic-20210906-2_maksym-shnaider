
function checkSpam(str) {
  let smallStr = str.toLowerCase();

  return smallStr.includes('1xbet now') || smallStr.includes('xxx');
}

alert( checkSpam('1XbeT now')) 
alert( checkSpam('free xxxxx')) 
alert( checkSpam('innocent rabbit')) 