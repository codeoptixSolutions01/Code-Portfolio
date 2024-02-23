/** @format */

import React from 'react';
import { Grid, Typography, Stack } from '@mui/material';
import styles from "../contactSection/contact.module.css";

export default function Header() {
  return (
    <>
      <Grid item xs={12}>
        <Stack direction='column' alignItems='center' justifyContent='center' textAlign='center'>
          <Typography 
          // className={styles.services}
             sx={{
              fontSize: '36px',
              fontWeight: ' 600',
              fontFamily:"Lexend"
    
            }}
          >
            
            PROJECTS

          </Typography>
          
        </Stack>
      </Grid>
    </>
  );
}
