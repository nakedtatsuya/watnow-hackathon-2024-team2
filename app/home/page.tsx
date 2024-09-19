'use client';

import React from 'react';
import Header from '../components/Header';
import Link from 'next/link';


const Home = () => {
    const sampleData = [
        {
            title: "YOASOBI",
            image: "http://www.sonymusic.co.jp/adm_image/common/artist_image/90000/90055/profile_image/56696__0_0_0.jpg",
            tag: "音楽",
        },
        {
            title: "YOASOBI",
            image: "http://www.sonymusic.co.jp/adm_image/common/artist_image/90000/90055/profile_image/56696__0_0_0.jpg",
            tag: "音楽",
        },
        {
            title: "YOASOBI",
            image: "http://www.sonymusic.co.jp/adm_image/common/artist_image/90000/90055/profile_image/56696__0_0_0.jpg",
            tag: "アニメ",
        }
    ];

    const groupedData = sampleData.reduce((acc, item) => {
        if (!acc[item.tag]) {
            acc[item.tag] = [];
        }
        acc[item.tag].push(item);
        return acc;
    }, {});

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Header />
            <div style={{
                 backgroundColor: "#F5F5F5",
                 height: 'calc(100vh - 90px)',
            }}>
                {
                    Object.keys(groupedData).map(tag => (
                        <div key={tag} style={{ padding: '16px' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{tag}</h2>
                            {
                                groupedData[tag].map(data => (
                                    <Link href={`/favoriteNote/${data.title}`}>
                                    <div key={data.title} style={{ display: 'flex', alignItems: 'center', padding: '8px 0' }}>
                                        <img src={data.image} alt={data.title} style={{ width: '100px', height: '100px', borderRadius: '50%', marginRight: '16px' }} />
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <p style={{ fontSize: '1.2rem', fontWeight: 'bold', margin: '4px 0' }}>{data.title}</p>
                                        </div>
                                    </div>
                                    </Link>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
            }}>
            <button style={{
                position: 'absolute',
                bottom: '20px',
                width: '76px',
                height: '76px',
                borderRadius: '50%',
                color: '#ccc',
                fontSize: '56px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                border: '5px solid #ccc',
            }}
            onClick={() => window.location.href = '/selectFavorite'}
            >
                +
            </button>
            </div>
        </div>
    );
}

export default Home;
