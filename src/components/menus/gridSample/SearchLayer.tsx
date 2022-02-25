import { Box } from "@mui/material";
import SearchLayout from "@src/components/layouts/layers/SearchLayout";
import NormalButton from "@UIComponent/formUI/NormalButton";

const SearchLayer = () => {
  return (
    <SearchLayout>
      <NormalButton>검색</NormalButton>
      <NormalButton>초기화</NormalButton>
    </SearchLayout>
  );
};

export default SearchLayer;
