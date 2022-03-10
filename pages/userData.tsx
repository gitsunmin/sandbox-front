import type { NextPage } from "next";
import TopLayer from "@src/components/menus/gridSample/TopLayer";
import SearchLayer from "@src/components/menus/gridSample/ActionLayer";
import RowsLayer from "@src/components/menus/gridSample/RowsLayer";
import Head from "next/head";
import { MenuName } from "@src/config/menuList";

const UserDataPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>{MenuName.USER_DATA}</title>
      </Head>
      <TopLayer />
      <SearchLayer />
      <RowsLayer />
    </>
  );
};

export default UserDataPage;
