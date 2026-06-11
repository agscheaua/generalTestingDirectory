test("reverse a string", () => {
  function reverseString(word) {
    const wordMadeAString = String(word);
    const reverseWord = ( (wordMadeAString.split("")).reverse() ).join("");
    return reverseWord; 
  };
  expect(reverseString("ale")).toBe("ela");
});