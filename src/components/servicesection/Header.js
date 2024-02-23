/** @format */
'use client'

import React from 'react';
import { Grid, Typography, Stack } from '@mui/material';
import styles from "./services.module.css";
import { StyledTypography } from '../styles/styles';

export default function Header() {
  return (
    <>
      <Grid item xs={12}>
        <Stack direction='column' alignItems='center' justifyContent='center' textAlign='center'>
          <StyledTypography 
         
          >
            SERVICES
            
          </StyledTypography>
          
        </Stack>
      </Grid>
    </>
  );
}
