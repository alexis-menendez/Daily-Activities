import colors from 'colors';

// change the color of text
console.log(colors.magenta('Hello World!'));
// bright text color
console.log(colors.brightMagenta('Hello World!'));
// change the background color
console.log(colors.bgMagenta('Hello World!'));
// bright background color
console.log(colors.bgBrightMagenta('Hello World!'));
// styles
console.log(colors.underline('Hello World!'));
// extras
console.log(colors.rainbow('Hello World!'));

// combine styles and colors
console.log(colors.magenta.strikethrough('Hello World!'));
console.log(colors.red.bgWhite.strikethrough('Hello World!'));
