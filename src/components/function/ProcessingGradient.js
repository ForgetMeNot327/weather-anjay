export const ProcessingGradient = (generalGradient) => {
  let splitGradientToArray = generalGradient.split(" ");
  let splitFirstIndexToArray = splitGradientToArray[0].split("(");
  let getGradientFromSecondIndex = splitFirstIndexToArray[1];
  let hunderPercent = splitGradientToArray[
    splitGradientToArray.length - 1
  ].slice(0, -1);

  splitGradientToArray.pop();
  splitGradientToArray.push(hunderPercent);
  splitGradientToArray.shift();
  splitGradientToArray.unshift(getGradientFromSecondIndex);

  let filteredColor = splitGradientToArray.filter((color) =>
    color.includes("#")
  );
  let filteredPercent = splitGradientToArray.filter((percent) =>
    percent.includes("%")
  );

  let mapping = filteredColor.map((el, i) => {
    return el + " " + filteredPercent[filteredPercent.length - 1 - i];
  });

  return mapping[0] + ", " + mapping[1] + " " + mapping[2].slice(0, -1);
};
