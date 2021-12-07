import bigDecimal from 'js-big-decimal';

export const computator = {
  add: (a, b) => {
    const A = new bigDecimal(a);
    const B = new bigDecimal(b);
    const result = A.add(B).getValue();
    return parse(result);
  },
  subtract: (a, b) => {
    const A = new bigDecimal(a);
    const B = new bigDecimal(b);
    const result = A.subtract(B).getValue();
    return parse(result);
  },
  divide: (a, b) => {
    const A = new bigDecimal(a);
    const B = new bigDecimal(b);
    const result = A.divide(B, 9).getValue();
    return parse(result);
  },
  multiply: (a, b) => {
    const A = new bigDecimal(a);
    const B = new bigDecimal(b);
    const result = A.multiply(B).getValue();
    console.log('Result', result);
    return parse(result);
  },

}

function parse(result) {
  let number: number;
  let parsedNumber: string;

  if (result.includes('.')) {
    number = Number.parseFloat(result);
    if (number.toFixed(0).length > 9) {
      parsedNumber = number.toExponential(5);
    } else {
      parsedNumber = number.toString();
    }
  } else {
    number = Number.parseInt(result);
    if (number.toString().length > 10) {
      parsedNumber = number.toExponential(5);
    } else {
      parsedNumber = number.toString();
    }
  }

  console.log('End', parsedNumber, parsedNumber.toString().length);
  return parsedNumber;
}