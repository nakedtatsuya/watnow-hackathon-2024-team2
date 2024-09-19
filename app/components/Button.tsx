import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import {createTheme, ThemeProvider} from '@mui/material/styles'

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides:{
        root: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '40px',
          width:"255px",
          border: '1px solid #000',
          borderRadius:"50px",
          backgroundColor: '#FFF',
          color: 'black',
          marginTop: '20px',
          '&:hover': {
            backgroundColor: '#F5F5F5',
            color: '#000'
          },
        },
      }
    }
  }
});

type ButtonProps = {
  type: 'submit' | 'button';
  text: string;
  onClick?: () => void;
};

export default function Btn({
  type,
  text,
  onClick,
}: ButtonProps) {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="outlined" onClick={onClick} type={type}>
        {text}
      </Button>
    </ThemeProvider>
  );
}
