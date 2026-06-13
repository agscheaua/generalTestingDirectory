// create the normal alphabet and the shifted alphabet properties in an obj;
const createBothAlphabet = (function() { 
  const lettersAlphabet = "abcdefghijklmnopqrstuvwxyz";
  return {
    normalAlphabet: [...lettersAlphabet],
    shiftedAplhabet: [...lettersAlphabet],
  };
})();

// shift the array containing the shifted alphabet;
function shiftArray(num) {
  const varShiftedAplhabet = createBothAlphabet.shiftedAplhabet;
  for (let i = 0; i < num; i++) {
    const firstElementArray = varShiftedAplhabet[0];
    varShiftedAplhabet.push(firstElementArray);
    varShiftedAplhabet.shift();
  };
  console.log(varShiftedAplhabet);
};

test("Caesar Cipher", () => {
  function ciperText(text, shift) {
  shiftArray(shift);
  const varNormalAlphabet = createBothAlphabet.normalAlphabet;
  const varShiftedAplhabet = createBothAlphabet.shiftedAplhabet;

  const parseCipherPhrase = (String(text)).split("");
  const wordsFormatCapitalizedOrNot = [];
  for (let i = 0; i <= parseCipherPhrase.length -1; i++) {
    if (varNormalAlphabet.includes(parseCipherPhrase[i].toLowerCase())){
      if (parseCipherPhrase[i] === parseCipherPhrase[i].toUpperCase()) {
        wordsFormatCapitalizedOrNot.push("capitalized");
      } else {
        wordsFormatCapitalizedOrNot.push("small");
      };
    } else {
      wordsFormatCapitalizedOrNot.push("conex");
    };
  } 

  const containerForCiperIndex = [];
  for (let i = 0; i <= parseCipherPhrase.length - 1; i++) {
    const ciperTextLetter = varNormalAlphabet.indexOf(parseCipherPhrase[i].toLowerCase());
    if (ciperTextLetter === -1) {
      containerForCiperIndex.push(parseCipherPhrase[i])
    } else {
      containerForCiperIndex.push(ciperTextLetter);
    };
  };

  const ciperWordParsed = [];
  for (let i = 0; i <= containerForCiperIndex.length - 1; i++) {
    const ciperLetter = varShiftedAplhabet[containerForCiperIndex[i]];
    if (varShiftedAplhabet.includes(ciperLetter) && typeof containerForCiperIndex[i] === "number") {
      ciperWordParsed.push(ciperLetter);
    } else {
      ciperWordParsed.push(containerForCiperIndex[i]);
    };
  };

  for (let i = 0; i <= ciperWordParsed.length-1; i++) {
    if (wordsFormatCapitalizedOrNot[i] === "capitalized") {
      ciperWordParsed[i] = ciperWordParsed[i].toUpperCase();
    } else if (wordsFormatCapitalizedOrNot[i] === "small") {
      ciperWordParsed[i] = ciperWordParsed[i].toLowerCase();
    } else {
      console.log(i);
    }
  };

  const ciperSentence = ciperWordParsed.join("");

  console.log(containerForCiperIndex);
  console.log(ciperWordParsed);
  console.log(ciperSentence);

  return console.log(wordsFormatCapitalizedOrNot);
};  
  expect(ciperText("HEllo world 1 ! 1212", 3)).toBe(1);
});