  function reverseString(word) {
    const wordMadeAString = String(word);
    const reverseWord = ( (wordMadeAString.split("")).reverse() ).join("");
    return reverseWord; 
  };
  console.log(reverseString("121DAalex12"));