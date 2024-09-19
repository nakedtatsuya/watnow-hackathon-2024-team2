"use client";

import React, { useState } from 'react';
import SearchBar from "../components/SearchBar";
import Link from 'next/link';

const SelectFavorite = () => {
    const [inputText, setInputText] = useState<string>('');
    const [suggestions, setSuggestions] = useState<string[]>([]);

    const sampleTags = ["音楽", "小説", "漫画", "ラジオ"];
    const sampleSuggestions = ["アーティストA", "アーティストB", "小説C", "漫画D"];

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputText(value);

        if (value) {
            const filteredSuggestions = sampleSuggestions.filter(suggestion =>
                suggestion.includes(value)
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div style={{
                textAlign: 'center',
            }}>
                <h2 style={{fontFamily: 'JPFont', fontSize: '20px'}}>あなたの好きなアーティストや</h2>
                <h2 style={{fontFamily: 'JPFont', fontSize: '20px'}}>推しを教えてください</h2>
            </div>
            <div style={{ position: 'relative', width: '100%', maxWidth: '328px', margin: "32px 0 100px 0" }}>
                <SearchBar value={inputText} onChange={handleChange} />
                {suggestions.length > 0 && (
                    <div style={{
                        position: 'absolute',
                        top: '100%',
                        left: '0',
                        right: '0',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        backgroundColor: '#fff',
                        zIndex: 1,
                    }}>
                        <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
                            {suggestions.map((suggestion) => (
                                <li key={suggestion} style={{
                                    width: '328px',
                                    padding: '10px',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.3s',
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0f0f0'}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                >
                                    <Link href={`/preview/${suggestion}`}>
                                        {suggestion}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '10px',
                margin: "0"
            }}>
                {sampleTags.map((tag) => (
                    <span key={tag} style={{
                        fontFamily: 'JPFont',
                        backgroundColor: 'white',
                        color: 'black',
                        border: '1px solid #ccc',
                        borderRadius: '20px',
                        display: 'flex',
                        margin: '5px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '150px',
                        height: '40px',
                    }}>
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default SelectFavorite;
