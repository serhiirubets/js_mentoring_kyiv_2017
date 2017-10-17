export default (input) => {
  if (!input) {
    return 0;
  }

  if (!(/\d+/.test(input))) {
    return NaN;
  }

  if ((/\*{2}/.test(input))) {
    let result = 1;
    const firstNumber = parseInt(input, 10);
    const lastIndexStart = input.lastIndexOf('*') + 1;
    const secondNumber = input.slice(lastIndexStart);

    for (let i = 0; i < secondNumber; i += 1) {
      result *= firstNumber;
    }

    return result;
  }

  return eval(input);
};
