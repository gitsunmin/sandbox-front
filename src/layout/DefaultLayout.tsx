import React, { useState, forwardRef } from "react";
import { useRouter } from "next/router";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import TreeView from "@mui/lab/TreeView";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import CustomTreeItem from "../components/custom/CustomTreeItem";
import StyledMain from "../components/custom/styled/StyledMain";
import MENU_LIST from "../utils/menuList";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  fontSize: '2rem',
  fontWeight: 'bold',
}));

export default function DefaultLayout({ children }: { children: any }) {
  const [open, setOpen] = useState(true);

  const renderTree = (menu: Menu) => {
    return (
      <CustomTreeItem
        key={menu.id}
        nodeId={menu.id}
        label={menu.name}
        to={menu.to}
      >
        {Array.isArray(menu.children)
          ? menu.children.map((node) => renderTree(node))
          : null}
      </CustomTreeItem>
    );
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          Sandbox
        </DrawerHeader>
        <Divider />

        <TreeView
          sx={{
            height: 110,
            flexGrow: 1,
            maxWidth: 400,
            overflowY: "auto",
            margin: 1,
          }}
        >
          {MENU_LIST.map((node) => renderTree(node))}
        </TreeView>
      </Drawer>
      <StyledMain drawerOpen={open} drawerWidth={drawerWidth}>
        {children}
      </StyledMain>
    </Box>
  );
}
