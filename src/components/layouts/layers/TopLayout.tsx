import type { NextPage } from 'next'
import { Box, Typography } from "@mui/material";

interface TopLayoutProps {
  children: JSX.Element | JSX.Element[] | string;
}

const TopLayout: NextPage<TopLayoutProps> = ({
  children,
}) => {
  return (
    <Box py={2} sx={{ }}>
      <Typography variant="h3">{children}</Typography>
    </Box>
  );
};

export default TopLayout;
