import React from "react";
import { useRouter } from "next/router";
import TreeItem, {
  useTreeItem,
  TreeItemProps,
  TreeItemContentProps,
} from "@mui/lab/TreeItem";
import Typography from "@mui/material/Typography";

/**
 * * customTreeItem의 ContentProps
 * * MUI의 TreeItem의 props에서 추가로 입력 받은 props의 타입을 명시하였음
 */
interface CustomPropsType {
  to?: string;
}

/**
 * * Tree에 content를 편하게 수정하기 위해서 MUI의 TreeItem을 커스텀 wrapping하여 만들었음
 */
const CustomContent = ({ to }: CustomPropsType) => {
  return React.forwardRef(function CustomContent(
    props: TreeItemContentProps,
    ref
  ) {
    const router = useRouter();
    const componentProps = props as TreeItemContentProps;
    const { nodeId } = componentProps;

    /**
     * @link http://react-material.fusetheme.com/documentation/material-ui-components/tree-view
     */
    const { handleExpansion } = useTreeItem(nodeId);

    const handleExpansionClick = (event: React.SyntheticEvent) => {
      handleExpansion(event);
      to && router.push(to);
    };
    return (
      <div
        ref={ref as React.Ref<HTMLDivElement>}
        onClick={handleExpansionClick}
      >
        {props.label}
      </div>
    );
  });
};

const CustomTreeItem = (props: TreeItemContentProps | CustomPropsType) => {
  const treeItemProps = props as TreeItemProps;
  const customAttributes = { to: props.to };
  return (
    <TreeItem
      ContentComponent={CustomContent(customAttributes)}
      {...treeItemProps}
    />
  );
};

export default CustomTreeItem;
