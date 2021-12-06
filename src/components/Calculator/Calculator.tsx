import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import styles from './Calculator.module.scss';

const useStyles = makeStyles({
  button: {
    borderRadius: 8
  }
});

const Calculator = () => {
  const [result, setResult] = useState<string>("0");
  const classes = useStyles();

  const handleAction = (symbol) => {
    console.log('Pushed:', symbol);
  }

  const rowFactory = (symbolsRow: (string | number)[]) => {
    const diffLayoutSymbols: (number | string)[] = [0];
    return (
      <Grid item container xs={12} mb={1} spacing={1} alignItems="flex-start" >
        {
          symbolsRow.map(symbol => {
            return (
              !diffLayoutSymbols.includes(symbol) ?
                <Grid item xs={3} key={symbol}>
                  <Button
                    className={styles['regular-button']}
                    onClick={(e) => void handleAction(symbol)}
                    fullWidth
                    variant="contained">
                    {symbol}
                  </Button>
                </Grid>
                :
                <Grid item xs={6} key={symbol}>
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
          <Typography variant="h2" align="right">{result}</Typography>
        </Grid>
        {
          [
            rowFactory(['M', 'M+', '\u2190', 'C']),
            rowFactory(['M+', 'MC', "\u00B1", "\u00F7"]),
            rowFactory([7, 8, 9, "\u00D7"]),
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
