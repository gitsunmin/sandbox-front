import type { NextPage } from "next";
import TopLayer from "@src/components/menus/gridSample/TopLayer";
import SearchLayer from "@src/components/menus/gridSample/SearchLayer";
import RowsLayer from "@src/components/menus/gridSample/RowsLayer";


const GridSamplePage: NextPage = () => {
    return <>
        <TopLayer />
        <SearchLayer />
        <RowsLayer />
    </>;
};

export default GridSamplePage;
