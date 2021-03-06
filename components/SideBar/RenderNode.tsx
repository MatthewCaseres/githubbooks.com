import { StatefulNode } from "./SideBarContext";
import Node from "./Node";

const RenderNode = ({
  node,
  pagePath
}: {
  node: StatefulNode;
  pagePath: readonly number[]
}) => {
  return (
    <div>
      <Node node={node} pagePath={pagePath}/>
      {node.children && node.open && (
        <div className="border-l border-gray-400 dark:border-gray-600 border-opacity-50"
          style={{
            margin: "2px 0px 2px 12px",
          }}
        >
          {node.children.map((nodeChild, index) => {
            return (
              <RenderNode
                key={index}
                node={nodeChild}
                pagePath={pagePath}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RenderNode;
