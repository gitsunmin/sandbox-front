import type { NextPage } from 'next'
import { Box } from "@mui/material";

interface SearchLayoutProps {
  children: JSX.Element | JSX.Element[] | string;
}

const SearchLayout: NextPage<SearchLayoutProps> = ({ children }) => {
  return <Box>
    {children}
  </Box>;
};

export default SearchLayout;
