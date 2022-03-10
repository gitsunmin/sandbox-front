import { Box } from "@mui/material";
import TopLayout from "@src/components/layouts/layers/TopLayout";
import { MenuName } from "@src/config/menuList";

const TitleLayer = () => {
  return <TopLayout>{MenuName.USER_DATA}</TopLayout>;
};

export default TitleLayer;
