import title from "./images/title.png"
import Image from "next/image";
import Btn from "./conponemts/Button/page";

export default function Home() {
  return (
    <div style={{
      height: "100vh",
    }}>
    <main style={
      {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexFlow: "column",
        height: "90%",
    }}>
      <p>好きな情報をまとめて管理</p>
      <Image src={title} alt="title" width={500} height={500} />
      <div style={{
        display: "flex",
        flexFlow: "column",
      }}>
      <Btn text={"ログイン"}/>
      <Btn text={"新規登録"}/>
      </div>
    </main>
    <footer style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "10%",
      borderTop: "1px solid #ccc",
    }}>
        <p>@watnowハッカソン</p>
      </footer>
    </div>
  );
}
