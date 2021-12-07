import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import styles from './Calculator.module.scss';
import { computator, parse } from '../../utils/computator';
import useLocalStorage from '../../hooks/use-local-storage';

const useStyles = makeStyles({
  button: {
    borderRadius: 8
  }
});

const MAX_REGISTER = 10;

const Calculator = () => {
  const [result, setResult] = useState<string>("0");
  const [firstOperand, setFirstOperand] = useState<number>(0);
  const [secondOperand, setSecondOperand] = useState<number>(0);
  const [operandDivider, setOperandDivider] = useState<boolean>(false);
  const [operator, setOperator] = useState('');
  const [memory, setMemory] = useLocalStorage('calc_mem', 0);

  const enterDigit = (digit) => {
    const updatedValue: string = (result === '0' || operandDivider) ? digit.toString() : result.toString() + digit;

    if (updatedValue.length <= MAX_REGISTER) {
      setResult(updatedValue);
    }

    if (operandDivider) {
      setOperandDivider(false);
    }
  }

  const parseOperand = (str: string): number => {
    return str.includes('.') ? Number.parseFloat(str) : Number.parseInt(str);
  }

  const makeOperation = (second) => {
    const result = computator[operator](firstOperand, second);
    setResult(result);
    setFirstOperand(result); // to number change
    setSecondOperand(0);
  }

  const handleAction = (symbol) => {
    if (typeof symbol === 'number') {
      enterDigit(symbol);
      return;
    }

    switch (symbol) {
      case '\u2190':    // <--
        if (result.match(/\-[1-9]{1}$/g)?.length) {
          setResult('0');
          break;
        }
        setResult(result.slice(0, -1) || '0');
        break;
      case 'C':
        setResult('0');
        break;
      case '\u00B1':
        if (result === '0') {
          break;
        } else if (result[0] !== '-') {
          setResult('-'.concat(result));
          break;
        } else {
          setResult(result.slice(1));
        }
        break;
      case '.':
        if (result.includes('.')) break;
        setResult(result + '.');
        break;
      case '\u00F7':    // divide
        setOperandDivider(true);
        setFirstOperand(parseOperand(result));
        setOperator('divide');
        break;
      case '\u00D7':    // multiply
        setOperandDivider(true);
        setFirstOperand(parseOperand(result));
        setOperator('multiply');
        break;
      case '+':
        setOperandDivider(true);
        setFirstOperand(parseOperand(result));
        setOperator('add');
        break;
      case '-':
        setOperandDivider(true);
        setFirstOperand(parseOperand(result));
        setOperator('subtract');
        break;
      case '=':
        const displayValue = parseOperand(result);
        makeOperation(displayValue);
        setSecondOperand(displayValue);
        break;
      case 'M':
        setMemory(+result);
        setOperandDivider(true);
        break;
      case 'MC':
        setMemory(0);
        break;
      case 'MR':
        setResult(parse(memory.toString()));
        break;
      case 'M+':
        setOperandDivider(true);
        setMemory(memory + +result);
        break;
    }
  }

  const rowFactory = (symbolsRow: (string | number)[]) => {
    const diffLayoutSymbols: (number | string)[] = [0];
    return (
      <Grid item container xs={12} mb={1} spacing={1} alignItems="flex-start" key={symbolsRow.join()} >
        {
          symbolsRow.map(symbol => {
            return (
              !diffLayoutSymbols.includes(symbol) ?
                <Grid item xs={3} key={symbol.toString() + Math.random()} className={styles['button-container']}>
                  <Button
                    className={styles['regular-button']}
                    onClick={(e) => void handleAction(symbol)}
                    fullWidth
                    variant="contained">
                    {symbol}
                  </Button>
                </Grid>
                :
                <Grid item xs={6} key={symbol.toString()}>
                  <Button className={`${styles['regular-button']} ${styles['double-button']}`} onClick={(e) => void handleAction(symbol)} fullWidth variant="contained">0</Button>
                </Grid>
            )
          })
        }
      </Grid>
    )
  }

  return (
    <Grid container justifyContent="center"  >
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2} p={0.5} className={styles.container} spacing={0} container direction="row" alignItems="flex-start" >
        <Grid item xs={12}>
          <Typography className={styles.indicator}>{memory ? 'M' : ''}</Typography>
          <Typography className={styles.indicator}>E</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" align="right" className={styles.display}>{result}</Typography>
        </Grid>
        {
          [
            rowFactory(['M', 'MR', '\u2190', 'C']),
            rowFactory(['M+', 'MC', '\u00B1', '\u00F7']),
            rowFactory([7, 8, 9, '\u00D7']),
            rowFactory([4, 5, 6, '-']),
            rowFactory([1, 2, 3, '+']),
            rowFactory([0, '.', '='])
          ]
        }
      </Grid>
    </Grid>
  )
}

export default Calculator;
