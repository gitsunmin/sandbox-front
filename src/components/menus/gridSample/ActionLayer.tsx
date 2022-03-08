import { Box } from "@mui/material";
import ActionLayout from "@src/components/layouts/layers/ActionLayout";
import NormalButton from "@UIComponent/formUI/NormalButton";

const SearchLayer = () => {
  return (
    <ActionLayout>
      <NormalButton>검색</NormalButton>
      <NormalButton>초기화</NormalButton>
    </ActionLayout>
  );
};

export default SearchLayer;
