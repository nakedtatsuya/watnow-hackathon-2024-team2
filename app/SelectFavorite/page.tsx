"use client";

import React, { SetStateAction, useState } from 'react'
import SearchBar from "../conponemts/SearchBar"

const SelectFavorite = () => {
    const [inputText, setInputText] = useState<string>('');
    const handleChange = (event: { target: { value: SetStateAction<string> } }) => {
      setInputText(event.target.value);
    };
  

  return (
    <div>
        <h1>はじめまして！</h1>
        <h2>まずはあなたの好きなものを教えてください</h2>
        <SearchBar value={inputText} onChange={handleChange} />
    </div>
  )
}

export default SelectFavorite