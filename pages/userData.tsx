import type { NextPage } from "next";
import TopLayer from "@src/components/menus/gridSample/TopLayer";
import SearchLayer from "@src/components/menus/gridSample/ActionLayer";
import RowsLayer from "@src/components/menus/gridSample/RowsLayer";


const UserDataPage: NextPage = () => {
    return <>
        <TopLayer />
        <SearchLayer />
        <RowsLayer />
    </>;
};

export default UserDataPage;
