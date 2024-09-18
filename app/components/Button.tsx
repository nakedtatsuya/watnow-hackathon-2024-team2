import * as React from 'react';
import Button from '@mui/material/Button';

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
    <>
      <Button variant="outlined" onClick={onClick} type={type}>{text}</Button>
    </>
  );
}
