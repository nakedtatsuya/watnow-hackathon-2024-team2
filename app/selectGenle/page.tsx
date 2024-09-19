"use client";

import React from "react";
import { styled } from "@mui/material/styles";
import {
  Checkbox,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import Btn from "../components/Button";

// スタイル付きチェックボックス
const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  display: "none", // 元のチェックボックスを非表示にする
}));

// チェックボックスラベルのスタイル
const CustomFormControlLabel = styled(FormControlLabel, { shouldForwardProp: (prop) => prop !== 'checked' })(
    ({ theme, checked }) => ({
      position: 'relative',
      display: 'flex',
      margin: '0',
      alignItems: 'center',
      justifyContent: 'center',
      width: 'calc(40% - 14px)',
      padding: '20px',
      marginRight: '20px',
      height: '40px',
      border: '1.8px solid #000',
      borderRadius: '20px',
      backgroundColor: theme.palette.common.white, // クリック後も最初も完全に白
      cursor: 'pointer',
      transition: 'background-color 0.6s ease, color 0.6s ease', // 背景色と文字色の遷移をゆっくり
      color: theme.palette.text.primary, // クリック後も黒文字
      '&:hover': {
        backgroundColor: theme.palette.grey[300], // ホバー時はグレー
      },
      '&::before': {
        content: '""',
        position: 'absolute',
        top: '-2px',
        right: '-2px',
        bottom: '-2px',
        left: '-2px',
        borderRadius: 'inherit',
        padding: '2.7px',
        background: 'conic-gradient(#EAC46A, #D5FCD5, #6C97EC, #0731FB, #7634DB, #FF44AA,#FF6E49,#FF8E03,#EAC463)', // 虹色ボーダー風の背景
        opacity: checked ? 1 : 0, // クリック後は透明度を変更して遷移
        transition: 'opacity 0.6s ease', // opacityに対して遷移を適用
        '-webkit-mask':
          'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', // 背景色がボーダーになるようにする
        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        maskComposite: 'exclude',
      },
    })
  );
  

//          ? 'conic-gradient(#FE6658, #FFDA85, #90FFA2, #002AFF, #7B35DA, #FF40B2, #FE6658)' // 虹色ボーダー風の背景

// チェックボックスラベルのコンテナ
const CheckboxContainer = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "29px",
});

const sample = [
  { id: 1, label: "音楽/Music", value: "音楽" },
  { id: 2, label: "小説/Nobels", value: "小説" },
  { id: 3, label: "漫画/manga", value: "漫画" },
  { id: 4, label: "ラジオ/Radio Shows", value: "ラジオ" },
  { id: 5, label: "アイドル/Idols", value: "アイドル" },
  { id: 6, label: "お笑い/Comedy", value: "お笑い" },
  { id: 7, label: "映画/Movies", value: "映画" },
  { id: 8, label: "舞台/Theater", value: "舞台" },
  { id: 9, label: "テレビドラマ/TV Dramas", value: "テレビドラマ" },
  { id: 10, label: "ミュージカル/Musicals", value: "ミュージカル" },
  { id: 11, label: "アニメ/Anime", value: "アニメ" },
  { id: 12, label: "ダンス/Dance", value: "ダンス" },
  { id: 13, label: "ゲーム/Video Games", value: "ゲーム" },
  { id: 14, label: "ファッション/Fashion", value: "ファッション" },
];

export default function SelectGenle() {
<<<<<<< HEAD
    const [checkedItems, setCheckedItems] = React.useState<{ [key: string]: boolean }>({});
    const [submitData, setSubmitData] = React.useState<{
        tags: string[], 
        email:string}>({
        tags: [],
        email: ''
        });
=======
  const [checkedItems, setCheckedItems] = React.useState<{
    [key: string]: boolean;
  }>({});
  const [submitData, setSubmitData] = React.useState<string[]>([]);
>>>>>>> develop

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

<<<<<<< HEAD
    const registerGenles = async (data) => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/select-genres`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: data.email,
                genres: data.tags,
            }),
        });
    
        if (response.ok) {
            const responseData = await response.json();
            console.log(responseData);
        } else {
            console.error('Registration failed');
        }
    };

    const handleSubmit = async () => {
        const emailData = localStorage.getItem('userEmail');
        if (emailData) {
            const selectedItems = Object.keys(checkedItems).filter((key) => checkedItems[key]);
            setSubmitData({ tags: selectedItems, email: emailData });
    
            // submitDataが更新された後にregisterGenlesを呼び出す
            const currentSubmitData = { tags: selectedItems, email: emailData };
            await registerGenles(currentSubmitData);
            window.location.href = '/selectFavorite';
        } else {
            console.log('email is not found');
        }
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
=======
  const handleSubmit = () => {
    const selectedItems = Object.keys(checkedItems).filter(
      (key) => checkedItems[key]
>>>>>>> develop
    );
    setSubmitData(selectedItems);
    console.log(selectedItems);
    window.location.href = "/selectFavorite";
  };

  return (
    <>
      <h1>初めまして！</h1>
      <h2>まずはあなたの好きなものを教えてください</h2>
      <FormControl
        component="fieldset"
        sx={{
          marginTop: "20px",
        }}
      >
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
        <Btn type={"button"} text={"次に進む"} onClick={handleSubmit} />
      </FormControl>
    </>
  );
}
