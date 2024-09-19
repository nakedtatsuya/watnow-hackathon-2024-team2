"use client";

import React, { useEffect, useState } from 'react';
import SearchBar from "../components/SearchBar";
import Link from 'next/link';

const SelectFavorite = () => {
    const [inputText, setInputText] = useState<string>('');
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [genles, setGenles] = useState<string[]>([]);
    const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(null);

    const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputText(value);

        // Clear previous timeout if it exists
        if (debounceTimeout) {
            clearTimeout(debounceTimeout);
        }

        // Set a new timeout for the debounce
        const newTimeout = setTimeout(async () => {
            if (value) {
                try {
                    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search-oshi`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ query: value }),
                    });

                    if (response.ok) {
                        const suggestionsData = await response.json();
                        setSuggestions(suggestionsData.titles);
                    } else {
                        console.error('Failed to fetch suggestions');
                        setSuggestions([]);
                    }
                } catch (error) {
                    console.error('Error fetching suggestions:', error);
                    setSuggestions([]);
                }
            } else {
                setSuggestions([]);
            }
        }, 600); // 300ms debounce delay

        setDebounceTimeout(newTimeout);
    };

    useEffect(() => {
        const fetchGenres = async () => {
            const userEmail = localStorage.getItem('userEmail');
            if (userEmail) {
                await getGenles({ email: userEmail });
            }
        };
        fetchGenres();
    }, []);

    const getGenles = async (data) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get-user-genres`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: data.email,
                }),
            });

            if (response.ok) {
                const responseData = await response.json();
                setGenles(responseData);
            } else {
                console.error('Failed to fetch genres');
                setGenles([]);
            }
        } catch (error) {
            console.error('Error fetching genres:', error);
            setGenles([]);
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
            <div style={{ textAlign: 'center' }}>
                <h2>あなたの好きなアーティストや</h2>
                <h2>推しを教えてください</h2>
            </div>
            <div style={{ position: 'relative', width: '100%', maxWidth: '400px', marginBottom: "100px" }}>
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
                {genles.map((tag) => (
                    <span key={tag} style={{
                        backgroundColor: 'white',
                        color: 'black',
                        border: '1px solid #ccc',
                        borderRadius: '20px',
                        display: 'flex',
                        margin: '0',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 'calc(50% - 15px)',
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
