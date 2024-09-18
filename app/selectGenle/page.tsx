"use client";

import React from 'react';
import { styled } from '@mui/material/styles';
import { Checkbox, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import Btn from "../conponemts/Button"

// スタイル付きチェックボックス
const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  display: 'none', // 元のチェックボックスを非表示にする
}));

// チェックボックスラベルのスタイル
const CustomFormControlLabel = styled(FormControlLabel, { shouldForwardProp: (prop) => prop !== 'checked' })(
  ({ theme, checked }) => ({
    display: 'flex',
    margin: '0',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'calc(50% - 20px)',
    height: '40px',
    border: '2px solid',
    borderColor: checked ? theme.palette.primary.main : theme.palette.grey[400],
    borderRadius: '4px',
    backgroundColor: checked ? theme.palette.primary.light : theme.palette.grey[100],
    cursor: 'pointer',
    transition: 'border-color 0.3s ease, background-color 0.3s ease',
    color: checked ? theme.palette.common.white : theme.palette.text.primary,
    '&:hover': {
      borderColor: theme.palette.primary.main,
    },
  })
);

// チェックボックスラベルのコンテナ
const CheckboxContainer = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '10px',
});

const sample = [
  { id: 1, label: 'Option1' },
  { id: 2, label: 'Option2' },
  { id: 3, label: 'Option3' },
  { id: 4, label: 'Option4' },
  { id: 5, label: 'Option5' },
  { id: 6, label: 'Option6' },
  { id: 7, label: 'Option7' },
  { id: 8, label: 'Option8' },
  { id: 9, label: 'Option9' },
  { id: 10, label: 'Option10' },
];

export default function SelectGenle() {
  const [checkedItems, setCheckedItems] = React.useState({});

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  return (
    <>
    <h1>初めまして！</h1>
    <h2>まずはあなたの好きなものを教えてください</h2>
    <FormControl component="fieldset" sx={{
        marginTop: '20px',
    }}>
      <FormLabel component="legend">推しジャンル</FormLabel>
      <CheckboxContainer>
        {sample.map((item) => (
          <CustomFormControlLabel
            key={item.id}
            control={
              <CustomCheckbox
                checked={!!checkedItems[item.label]}
                onChange={handleChange}
                name={item.label.toString()}
              />
            }
            label={item.label}
            checked={!!checkedItems[item.label]}
          />
        ))}
      </CheckboxContainer>
      <Btn text={"次へ"} />
    </FormControl>
    </>
  );
}
