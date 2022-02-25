import type { NextPage } from 'next'
import { Box } from "@mui/material";


interface RowsLayoutProps {
  children: JSX.Element | JSX.Element[] | string;
}

const RowsLayout: NextPage<RowsLayoutProps> = ({ children }) => {
  return <Box>
    {children}
  </Box>;
};

export default RowsLayout;
