"use client";

import Image from "next/image";
import React from "react";
import { set, useForm } from "react-hook-form";
import Btn from "../components/Button"; // コンポーネントのパスを修正
import mail from "../images/reg2.png";
import key from "../images/reg3.png";
import { display, fontWeight } from "@mui/system";

const styles = {
  container: {
    fontFamily: "JPFont",
    width: "328px",
    display: "flex",
    flexDirection: "column",
    padding: "0px",
    maxWidth: "400px",
    margin: "32px",
    border: "1px solid #000",
    borderRadius: "20px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  },
  user: {
    display: "flex",
  },
  p: {
    margin: "10px",
    fontWeight: "bold",
  },
  h1: {
    fontFamily: "JPFont",
    marginLeft: "32px",
    marginTop: "165px",
    fontSize: "35px",
    fontWeight: "bold",
    marginBottom: "14px",
  },
  h2: {
    marginLeft: "32px",
    fontFamily: "JPFont",
    marginBottom: "0px",
    fontSize: "20px",
  },
  label: {
    backgroundColor: "#E6E6E6",
    width: "100%",
    borderTopRightRadius: "20px",
    display: "flex",
    paddingLeft: "10px",
    padding: "10px",
    fontsize: "14px",
    fontFamily: "JPFont",
    margin: "0 auto",
    fontWeight: "Bold",
  },
  label2: {
    backgroundColor: "#E6E6E6",
    width: "100%",
    display: "flex",
    padding: "10px",
    paddingLeft: "10px",
    fontsize: "14px",
    fontFamily: "JPFont",
    margin: "0 auto",
    fontWeight: "Bold",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #E6E6E6",
  },
  input2: {
    fontFamily: "JPFont",
    width: "100%",
    padding: "10px",
    margin: "0px 60px 0px 0px",
    border: "1px solid #E6E6E6",
    borderBottomLeftRadius: "20px",
    borderBottomRightRadius: "20px",
  },
};

const NewRegistration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [submitted, setSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const onSubmit = (data) => {
    console.log(data); // ここでデータを確認
    setFormData(data); // データを更新
    setSubmitted(true); // フォーム送信時に状態を更新
  };

  return (
    <div>
      {submitted ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1 style={styles.h1}>ログイン</h1>
          <h2 style={styles.h2}>以下の内容で保存されました</h2>
          <h2 style={styles.h2}>{formData.name}さん、おかえりなさい！</h2>
          <div style={styles.container}>
            <div style={{ padding: "19px", margin: "0px" }}>
              <p style={styles.p}>ID：{formData.email}</p>
              <p style={styles.p}>パスワード：{formData.password}</p>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Btn
              type="button"
              text="はじめる"
              onClick={() => (window.location.href = "./home")}
            />
          </div>
        </div>
      ) : (
        <>
          <h1 style={styles.h1}>ログイン</h1>
          <form
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div style={styles.container}>
              <div style={styles.user}>
                <Image
                  style={{
                    backgroundColor: "#E6E6E6",
                    padding: "13px",
                    borderTopLeftRadius: "20px",
                  }}
                  src={mail}
                  alt="mail"
                  width={50}
                />
                <label style={styles.label}>ID</label>
              </div>
              <input
                type="text"
                {...register("email", {
                  required: "メールアドレスは必須です",
                  pattern: {
                    value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                    message: "有効なメールアドレスを入力してください",
                  },
                })}
                style={styles.input}
                placeholder="メールアドレスを入力してください"
              />
              {errors.email && (
                <p style={{ color: "red", padding: "10px" }}>
                  {errors.email.message}
                </p>
              )}
              <div style={styles.user}>
                <Image
                  style={{ backgroundColor: "#E6E6E6", padding: "13px" }}
                  src={key}
                  alt="key"
                  width={50}
                />
                <label style={styles.label2}>パスワード</label>
              </div>
              <input
                type="password"
                {...register("password", {
                  required: "パスワードは必須です",
                  minLength: {
                    value: 6,
                    message: "パスワードは6文字以上でなければなりません",
                  },
                })}
                style={styles.input2}
                placeholder="パスワードを入力してください"
              />
              {errors.password && (
                <p style={{ color: "red", padding: "10px" }}>
                  {errors.password.message}
                </p>
              )}
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Btn type="submit" text="送信する" />
            </div>
          </form>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "40px",
              width: "100%",
            }}
          >
            <p style={{ fontFamily: "JPFont " }}>
              まだ登録していない方はこちら
            </p>
            <Btn
              type="button"
              text="新規登録画面へ"
              onClick={() => (window.location.href = "./newRegistration")}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default NewRegistration;
