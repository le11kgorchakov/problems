decodeMorse = function (morseCode) {
  //one liner with map
  //return morseCode.split('  ').map(currentValue  => currentValue.split(' ').map(code => MORSE_CODE[code]).join(' ')).join('  ')
  //using reduce
  return morseCode.split("   ").reduce((acc, current, index, arr) => {
    return (
      acc +
      current.split(" ").reduce((acc2, current2) => {
        return acc2 + MORSE_CODE[current2];
      }, "") +
      (index < arr.length - 1 ? " " : "")
    );
  }, "");
};

decodeMorse(".... . -.--   .--- ..- -.. .");

Test.describe("Example from description", function () {
  Test.assertEquals(decodeMorse(".... . -.--   .--- ..- -.. ."), "HEY JUDE");
});

Test.describe("Your own tests", function () {
  // Add more tests here
});
