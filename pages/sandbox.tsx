import type { NextPage } from "next";
import Head from "next/head";
import { MenuName } from "@src/config/menuList";

const SandBoxPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>{MenuName.SAND_BOX}</title>
      </Head>
      <h1>SandBox page입니다.</h1>
    </>
  );
};

export default SandBoxPage;
