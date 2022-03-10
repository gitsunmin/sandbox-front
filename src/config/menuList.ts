import { nanoid } from "nanoid";

export enum MenuName {
  MAIN = "샌드박스",
  USER_DATA = "사용자 데이터",
  SAND_BOX = "놀이공간",
}

export enum MenuURL {
  USER_DATA = "/userData",
  SAND_BOX = "/sandbox",
}

const menuList: Menu[] = [
  {
    id: nanoid(),
    name: MenuName.MAIN,
    children: [
      {
        id: nanoid(),
        name: MenuName.USER_DATA,
        to: MenuURL.USER_DATA,
      },
      {
        id: nanoid(),
        name: MenuName.SAND_BOX,
        to: MenuURL.SAND_BOX,
      },
    ],
  },
];

export default menuList;
