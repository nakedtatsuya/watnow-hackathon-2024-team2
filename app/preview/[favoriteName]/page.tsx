"use client";

import React from 'react';
import xIcon from "../../images/x.png"; // Ensure this path is correct
import spotifyIcon from "../../images/spotify.png"; // Ensure this path is correct
import Image from 'next/image';
import { Height, Widgets } from '@mui/icons-material';
import Btn from '@/app/components/Button';
import { colors } from '@mui/material';

const Preview = ({ params }: { params: { favoriteName: string } }) => {
    const decodedFavoriteName = decodeURIComponent(params.favoriteName);

    const sampleData = {
        title: "YOASOBI",
        genre: "音楽ユニット",
        description: "YOASOBIは、日本の音楽ユニット。メンバーは、コンポーザーのAyaseとボーカルのikura。2019年に、ソニーミュージックが運営する小説&イラスト投稿サイト「monogatary.com」に投稿された小説を楽曲化するプロジェクトから誕生した",
        image: "http://www.sonymusic.co.jp/adm_image/common/artist_image/90000/90055/profile_image/56696__0_0_0.jpg",
        officialUrl: "https://www.yoasobi-music.jp/",
        SNSlinks: [
            {
                name: "YouTube",
                url: "https://www.youtube.com/c/YOASOBI",
            },
            {
                name: "Spotify",
                url: "https://open.spotify.com/artist/4nKm1uTqP8I0Kt3Iy6c9hY",
            },
            {
                name: "X",
                url: "https://x.com/YOASOBI_staff",
            },
            {
                name: "Instagram",
                url: "https://www.instagram.com/yoasobi_staff/",
            }
        ]
    };

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '600px',
            height: '100vh',
            color: '#4F4F4F',
        },
        title: {
            width: "80%",
            fontSize: '3rem',
            fontWeight: 'bold',
            textAlign: "left"
        },
        titleContainer: {
            width: "100%",
            display: 'flex',
            justifyContent: 'center',
        },
        genre: {
            width: "80%",
            fontSize: '1.25rem',
            textAlign: "left"
        },
        descriptionContainer: {
            display: 'flex',
            justifyContent: 'center',
        },
        description: {
            width: "80%",
            fontSize: '0.875rem',
            margin: '15px 0',
            textAlign: "left",
        },
        image: {
            maxWidth: '100%',
            borderRadius: '8px',
        },
        officialLinkLabel: {
            width: "74%",
            fontSize: '0.875rem',
            marginTop: '15px',
            textAlign: "left",
        },
        officialLink: {
            width: "74%",
            fontSize: '0.875rem',
            textDecoration: 'underline',
            textAlign: "left",
        },
        snsContainerLabel: {
            width: "80%",
            fontSize: '0.875rem',
            marginTop: '15px',
            textAlign: "left",
        },
        snsContainer: {
            width: "75%",
            display: 'flex',
            fontSize: '0.875rem',
            textAlign: "left",
        },
        snsButton: {
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            marginRight: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            border: '1px solid #ccc',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.titleContainer}>
                <h1 style={styles.title}>{sampleData.title}</h1>
            </div>
            <div style={styles.titleContainer}>
                <h2 style={styles.genre}>{sampleData.genre}</h2>
            </div>
            <div style={styles.descriptionContainer}>
                <p style={styles.description}>{sampleData.description}</p>
            </div>
            <img src={sampleData.image} alt="YOASOBI" style={styles.image} />
            <div style={styles.titleContainer}>
                <p style={styles.officialLinkLabel}>officialサイト</p>
            </div>
            <div style={styles.titleContainer}>
                <a href={`${sampleData.officialUrl}`} style={styles.officialLink}>{sampleData.officialUrl}</a>
            </div>
            <div style={styles.titleContainer}>
                <p style={styles.officialLinkLabel}>SNSリンク</p>
            </div>
            <div style={styles.titleContainer}>
                <div style={styles.snsContainer}>
                    {sampleData.SNSlinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.snsButton}
                        >
                            {link.name === "YouTube" ? <Image
                                src={"https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"}
                                alt={link.name}
                                width={25}
                                height={25}
                                unoptimized // This allows using external URLs without optimization
                            /> :
                                link.name === "Spotify" ? <Image
                                    src={spotifyIcon}
                                    alt={link.name}
                                    width={25}
                                    height={25}
                                    unoptimized // This allows using external URLs without optimization
                                /> :
                                    link.name === "X" ? <Image
                                        src={xIcon}
                                        alt={link.name}
                                        width={25}
                                        height={25}
                                        unoptimized // This allows using external URLs without optimization
                                    /> :
                                        link.name === "Instagram" ?  <Image
                                        src={"https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"}
                                        alt={link.name}
                                        width={25}
                                        height={25}
                                        unoptimized // This allows using external URLs without optimization
                                    /> : null}
                        </a>
                    ))}
                </div>
            </div>
            <div style={{
                margin: '30px 0 10px 0',
            }}>
                <Btn type={"button"} text={"ノートを作成"} onClick={() => window.location.href = "../home"}/>
            </div>
            <Btn type={"button"} text={"検索画面に戻る"} onClick={() => window.location.href = "/selectFavorite"}/>
        </div>
    );
};

export default Preview;
