import { Box } from "@mui/material";
import TopLayout from "@src/components/layouts/layers/TopLayout";
import { MenuName } from "@src/utils/menuList";

const TitleLayer = () => {
  return <TopLayout>{MenuName.USER_DATA}</TopLayout>;
};

export default TitleLayer;
