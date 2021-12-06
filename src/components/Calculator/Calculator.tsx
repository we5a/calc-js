import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import styles from './Calculator.module.scss';
import classNames from 'classnames';


const useStyles = makeStyles({
  button: {
    borderRadius: 8
  }
})


const Calculator = () => {
  const [result, setResult] = useState<string>("0");
  const classes = useStyles();

  return (
    <Grid container justifyContent="center"  >
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2} p={0.5} className={styles.container} spacing={0} container direction="row" alignItems="flex-start" >
        <Grid item xs={12}>
          <Typography variant="h2" align="right">{result}</Typography>
        </Grid>
        <Grid item container xs={12} spacing={1} mb={1} alignItems="flex-start" >
          <Grid item xs={3}>
            <Button className={styles['regular-button']} fullWidth variant="contained">CC</Button>
          </Grid>
          <Grid item xs={3}>
            <Button className={styles['regular-button']} fullWidth variant="contained">&#177;</Button>
          </Grid>
          <Grid item xs={3}>
            <Button className={styles['regular-button']} fullWidth variant="contained">TIP</Button>
          </Grid>
          <Grid item xs={3}>
            <Button className={styles['regular-button']} fullWidth variant="contained">&#247;</Button>
          </Grid>
        </Grid>
        <Grid item container xs={12} mb={1} spacing={1} alignItems="flex-start" >
          <Grid item xs={3}>
            <Button className={styles['regular-button']} fullWidth variant="contained">7</Button>
          </Grid>
          <Grid item xs={3}>
            <Button className={styles['regular-button']} fullWidth variant="contained">8</Button>
          </Grid>
          <Grid item xs={3}>
            <Button className={styles['regular-button']} fullWidth variant="contained">9</Button>
          </Grid>
          <Grid item xs={3}>
            <Button className={styles['regular-button']} fullWidth variant="contained">&#215;</Button>
          </Grid>
        </Grid>
        <Grid item container xs={12} mb={1} spacing={1} alignItems="flex-start" >
          <Grid item xs={3}>
            <Button className={styles['regular-button']} fullWidth variant="contained">4</Button>
          </Grid>
          <Grid item xs={3}>
            <Button className={styles['regular-button']} fullWidth variant="contained">5</Button>
          </Grid>
          <Grid item xs={3}>
            <Button className={styles['regular-button']} fullWidth variant="contained">6</Button>
          </Grid>
          <Grid item xs={3}>
            <Button className={styles['regular-button']} fullWidth variant="contained">-</Button>
          </Grid>
        </Grid>
        <Grid item container xs={12} spacing={1} mb={1} alignItems="flex-start" >
          <Grid item xs={3}>
            <Button className={styles['regular-button']} fullWidth variant="contained">1</Button>
          </Grid>
          <Grid item xs={3}>
            <Button className={styles['regular-button']} fullWidth variant="contained">2</Button>
          </Grid>
          <Grid item xs={3}>
            <Button className={styles['regular-button']} fullWidth variant="contained">3</Button>
          </Grid>
          <Grid item xs={3}>
            <Button className={styles['regular-button']} fullWidth variant="contained">+</Button>
          </Grid>
        </Grid>
        <Grid item container xs={12} spacing={1} alignItems="flex-start" >
          <Grid item xs={6}>
            <Button className={`${styles['regular-button']} ${styles['zero-button']}`} fullWidth variant="contained">0</Button>
          </Grid>
          <Grid item xs={3}>
            <Button className={styles['regular-button']} fullWidth variant="contained">.</Button>
          </Grid>
          <Grid item xs={3}>
            <Button className={styles['regular-button']} fullWidth variant="contained">=</Button>
          </Grid>
          
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Calculator;
