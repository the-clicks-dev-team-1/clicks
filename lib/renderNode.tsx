import React from "react";

export const renderNode = (node: any): React.ReactNode => {
  if (!node) return null;

  switch (node.nodeType) {
    case "document":
      return (
        <>
          {node.content?.map((childNode: any, index: number) => (
            <React.Fragment key={index}>{renderNode(childNode)}</React.Fragment>
          ))}
        </>
      );

    case "text":
      let text = node.value || "";

      // Apply bold style if marks include 'bold'
      if (node.marks?.some((mark: any) => mark.type === "bold")) {
        text = (
          <strong
            className="text-[var(--light-blue)] light:text-[var(--gray-70)]"
            key={node.value}
          >
            {text}
          </strong>
        );
      }

      // You can add more styles here, like italic or underline
      return (
        <p className="my-0 text-[var(--gray-blue)] light:text-[var(--gray-40)]">
          {text}
        </p>
      );

    case "ordered-list":
      return (
        <ol>
          {node.content?.map((childNode: any, index: number) => (
            <React.Fragment key={index}>{renderNode(childNode)}</React.Fragment>
          ))}
        </ol>
      );

    case "unordered-list":
      return (
        <ul>
          {node.content?.map((childNode: any, index: number) => (
            <React.Fragment key={index}>{renderNode(childNode)}</React.Fragment>
          ))}
        </ul>
      );

    case "list-item":
      return (
        <li>
          {node.content?.map((childNode: any, index: number) => (
            <React.Fragment key={index}>{renderNode(childNode)}</React.Fragment>
          ))}
        </li>
      );

    case "paragraph":
      return (
        <>
          {node.content?.map((childNode: any, index: number) => (
            <React.Fragment key={index}>{renderNode(childNode)}</React.Fragment>
          ))}
        </>
      );

    default:
      // For unsupported node types, check if it has children to render
      if (node.content && Array.isArray(node.content)) {
        return (
          <>
            {node.content.map((childNode: any, index: number) => (
              <React.Fragment key={index}>
                {renderNode(childNode)}
              </React.Fragment>
            ))}
          </>
        );
      }
      return null;
  }
};
