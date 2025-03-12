import colors from 'colors';
const name = process.argv[2];
const profit = process.argv[3];

let pColor;
if (Number.parseInt(profit) > 0) {
  pColor = 'bgBrightGreen';
} else {
  pColor = 'bgBrightRed';
}

console.log(
  `My name is ${colors.bgBrightYellow(name)} and I made ${colors[pColor](
    profit
  )} dollars this quarter.`
);
