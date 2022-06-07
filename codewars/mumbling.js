const accum = (string) => {
  const arrayString = string.split("");
  const getFormattedArray = arrayString.map(
    (currentLetter, index, array) =>
      currentLetter.toUpperCase() + currentLetter.toLowerCase().repeat(index)
  );
  const getFormattedString = getFormattedArray.join("-");
  return getFormattedString;
};

accum("test");
//const temp = [...string].map((currentLetter, index) => currentLetter.toUpperCase() + currentLetter.toLowerCase().repeat(index)).join('-')
