import type { NextPage } from 'next'
import { Box } from "@mui/material";

interface ActionLayoutProps {
  children: JSX.Element | JSX.Element[] | string;
}

const ActionLayout: NextPage<ActionLayoutProps> = ({ children }) => {
  return <Box>
    {children}
  </Box>;
};

export default ActionLayout;
