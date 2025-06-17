function getElementWidth(content, padding, border) {
  let numContent = content.replace(',', '.');
  numContent = parseFloat(numContent);
  let numPadding = padding.replace(',', '.');
  numPadding = parseFloat(numPadding);
  let numBorder = border.replace(',', '.');
  numBorder = parseFloat(numBorder);
  return numContent + 2 * numPadding + 2 * numBorder;
}

console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8,5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
