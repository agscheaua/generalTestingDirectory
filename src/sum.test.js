 test("operating a value", () => {
  const claculator = function() {
    return {
      add(a, b) {
        return a + b;
      },
      substract(a, b) {
        return a - b;
      },
      multiply(a, b) {
        return a * b;
      },
      divide(a, b) {
        if (b === 0) {
          throw new Error("You can't divide a number with the 0 number.");
        }
        return a / b;
      },
    };
  };
  expect(claculator().divide(1,)).toBe(0);
});
