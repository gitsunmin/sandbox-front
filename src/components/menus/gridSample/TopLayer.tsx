import { Box } from "@mui/material";
import TopLayout from "@src/components/layouts/layers/TopLayout";
import { MenuName } from "@src/layout/menuList";

const TitleLayer = () => {
  return <TopLayout>{MenuName.ADJUSTMENT_MANAGEMENT}</TopLayout>;
};

export default TitleLayer;
