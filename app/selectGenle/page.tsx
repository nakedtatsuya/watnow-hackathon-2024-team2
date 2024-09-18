"use client";

import React from 'react';
import { styled } from '@mui/material/styles';
import { Checkbox, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import Btn from "../components/Button"

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
        width: 'calc(50% - 15px)',
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
    { id: 1, label: '音楽/Music', value:'音楽' },
    { id: 2, label: '小説/Nobels', value:'小説' },
    { id: 3, label: '漫画/manga', value:'漫画' },
    { id: 4, label: 'ラジオ/Radio Shows', value:'ラジオ' },
    { id: 5, label: 'アイドル/Idols', value:'アイドル' },
    { id: 6, label: 'お笑い/Comedy', value:'お笑い' },
    { id: 7, label: '映画/Movies', value:'映画' },
    { id: 8, label: '舞台/Theater', value:'舞台' },
    { id: 9, label: 'テレビドラマ/TV Dramas', value:'テレビドラマ' },
    { id: 10, label: 'ミュージカル/Musicals', value:'ミュージカル' },
    { id: 11, label: 'アニメ/Anime', value:'アニメ' },
    { id: 12, label: 'ダンス/Dance', value:'ダンス' },
    { id: 13, label: 'ゲーム/Video Games', value:'ゲーム' },
    { id: 14, label: 'ファッション/Fashion', value:'ファッション' },
];

export default function SelectGenle() {
    const [checkedItems, setCheckedItems] = React.useState<{ [key: string]: boolean }>({});
    const [submitData, setSubmitData] = React.useState<string[]>([]);

    const handleChange = (event) => {
        const { name, checked } = event.target;
        setCheckedItems((prev) => ({
            ...prev,
            [name]: checked,
        }));
    };

    const handleSubmit = () => {
        const selectedItems = Object.keys(checkedItems).filter((key) => checkedItems[key]);
        setSubmitData(selectedItems);
        console.log(selectedItems);
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
                                    checked={!!checkedItems[item.value]}
                                    onChange={handleChange}
                                    name={item.value.toString()}
                                />
                            }
                            label={item.label}
                            checked={!!checkedItems[item.value]}
                        />
                    ))}
                </CheckboxContainer>
                <Btn type={"button"} text={"次に進む"} onClick={handleSubmit}/>
            </FormControl>
        </>
    );
}
