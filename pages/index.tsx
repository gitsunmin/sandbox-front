import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  return <>
    <h1>SandBox</h1>
    <p>저만의 샌드박스를 만들고 있습니다.</p>
    <p>여기서는 모든 기능을 만들어 볼 수 있어요.</p>
    <p>이상하거나 필요없더라도, 재미있어 보이는 것들을 만들면 됩니다.</p>
  </>;
};

export default Home;
