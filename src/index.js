    function capitalizeWord(word) {
      const wordMadeAString = String(word);
      const splitWord = wordMadeAString.split("");
      const regexPatternAToZ = new RegExp("[A-Za-z]");
      if (regexPatternAToZ.test(splitWord[0])) {
        const capitalizeFirstChar = splitWord[0].toUpperCase();
        splitWord[0] = capitalizeFirstChar;
        const capitalizedWord = splitWord.join("");
        return capitalizedWord;
      } else {
        throw new Error("The first character in the word is not a letter.");
      };
    }
    console.log(capitalizeWord(""));
