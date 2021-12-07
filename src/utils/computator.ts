import bigDecimal from 'js-big-decimal';

// todo add constructor with calculation parameters
class Computator {
  private operands: bigDecimal[];

  private setOperands(ops) {
    this.operands = ops.map(o => {
      return new bigDecimal(o);
    });
  }

  public add(a, b) {
    this.setOperands(Array.from(arguments));
    const result = this.operands[0].add(this.operands[1]).getValue();
    return parse(result);
  }

  public subtract(a, b) {
    this.setOperands(Array.from(arguments));
    const result = this.operands[0].subtract(this.operands[1]).getValue();
    return parse(result);
  }

  public divide(a, b) {
    this.setOperands(Array.from(arguments));
    const result = this.operands[0].divide(this.operands[1], 9).getValue();
    return parse(result);
  }

  public multiply(a, b) {
    this.setOperands(Array.from(arguments));
    const result = this.operands[0].multiply(this.operands[1]).getValue();
    return parse(result);
  }
}

export const computator = new Computator();

export function parse(result: string): string {
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