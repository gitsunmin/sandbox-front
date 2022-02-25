import { nanoid } from "nanoid";

export enum MenuName {
  GRID_SAMPLE = "Grid Sample",
  SAND_BOX = "놀이공간",
}

export enum MenuURL {
  GRID_SAMPLE = "/gridSample",
  SAND_BOX = "/sandbox",
}

const menuList: Menu[] = [
  {
    id: nanoid(),
    name: "메뉴",
    children: [
      {
        id: nanoid(),
        name: MenuName.GRID_SAMPLE,
        to: MenuURL.GRID_SAMPLE,
      },
    ],
  },
  {
    id: nanoid(),
    name: MenuName.SAND_BOX,
    to: MenuURL.SAND_BOX,
  },
];

export default menuList;
