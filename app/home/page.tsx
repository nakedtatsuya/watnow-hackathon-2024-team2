"use client";

import React from "react";
import Header from "../components/Header";
import Link from "next/link";

const Home = () => {
  const sampleData = [
    {
      title: "YOASOBI",
      image:
        "http://www.sonymusic.co.jp/adm_image/common/artist_image/90000/90055/profile_image/56696__0_0_0.jpg",
      tag: "音楽",
    },
    {
      title: "YOASOBI",
      image:
        "http://www.sonymusic.co.jp/adm_image/common/artist_image/90000/90055/profile_image/56696__0_0_0.jpg",
      tag: "音楽",
    },
    {
      title: "YOASOBI",
      image:
        "http://www.sonymusic.co.jp/adm_image/common/artist_image/90000/90055/profile_image/56696__0_0_0.jpg",
      tag: "アニメ",
    },
  ];

  const groupedData = sampleData.reduce((acc, item) => {
    if (!acc[item.tag]) {
      acc[item.tag] = [];
    }
    acc[item.tag].push(item);
    return acc;
  }, {});

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <div
        style={{
          backgroundColor: "#F5F5F5",
          height: "calc(100vh - 90px)",
        }}
      >
        {Object.keys(groupedData).map((tag) => (
          <div key={tag} style={{ fontFamily: 'JPFont', margin: "30px 33px" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{tag}</h2>
            {groupedData[tag].map((data) => (
              <Link href={`/favoriteNote/${data.title}`}>
                <div
                  key={data.title}
                  style={{
                    height: '100px',
                    display: "flex",
                    alignItems: "center",
                    padding: "4px 0",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: 'center',
                      width: "130px",
                      height: "150px",
                    }}
                  >
                    <img
                      src={data.image}
                      alt={data.title}
                      style={{
                        maxWidth: '100%',
                        borderRadius: "10%",
                        // marginRight: "16px",
                      }}
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <p
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        margin: "4px 20px",
                      }}
                    >
                      {data.title}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div
        style={{
          height: "",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <button
          style={{
            position: "absolute",
            bottom: "20px",
            width: "76px",
            height: "76px",
            borderRadius: "50%",
            background: "white", // 背景を白に
            fontSize: "56px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            border:
              "9px solid conic-gradient(#EAC46A, #D5FCD5, #6C97EC, #0731FB, #7634DB, #FF44AA,#FF6E49,#FF8E03,#EAC463)", // 虹色のボーダー
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // 立体感
            color: "transparent", // 文字自体を透明に
            background:
              "conic-gradient(#EAC46A, #D5FCD5, #6C97EC, #0731FB, #7634DB, #FF44AA,#FF6E49,#FF8E03,#EAC463)", // 虹色の背景
            backgroundClip: "text", // テキストの部分にだけ背景を適用
            WebkitBackgroundClip: "text", // Webkit対応
            transition: "transform 0.2s",
          }}
          onClick={() => (window.location.href = "/selectFavorite")}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")} // ホバー時に拡大
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")} // 元のサイズに戻す
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Home;
