import { styled } from "@mui/material/styles";

export default function Main({
  drawerOpen,
  drawerWidth,
  children,
}: {
  drawerOpen?: boolean;
  drawerWidth: number;
  children: any;
}) {
  const StyledMain = styled("main", {
    shouldForwardProp: (prop) => prop !== "open",
  })<{
    open?: boolean;
  }>(({ theme, open }) => ({
    flexGrow: 1,
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      marginLeft: 0,
    }),
    padding: theme.spacing(0, 1),
  }));

  return <StyledMain open={drawerOpen}>{children}</StyledMain>;
}
