interface Menu {
  id: readonly string;
  name: readonly string;
  children?: readonly Menu[];
  to?: readonly string;
}
