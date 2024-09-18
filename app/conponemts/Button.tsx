import * as React from 'react';
import Button from '@mui/material/Button';

type ButtonProps = {
    text: string;
    onClick?: () => void;
};

export default function Btn({
    text,
    onClick,
}: ButtonProps) {
  return (
    <>
      <Button variant="outlined" onClick={onClick}>{text}</Button>
    </>
  );
}
