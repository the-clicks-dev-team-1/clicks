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
      let result = text;

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

      if (node.marks) {
        node.marks.forEach((mark: any) => {
          switch (mark.type) {
            case "bold":
              result = (
                <strong className="text-[var(--light-blue)] light:text-[var(--gray-70)]">
                  {result}
                </strong>
              );
              break;
            case "italic":
              result = <em>{result}</em>;
              break;
            case "underline":
              result = <u>{result}</u>;
              break;
            case "code":
              result = (
                <code className="bg-gray-100 px-1 py-0.5 rounded font-mono">
                  {result}
                </code>
              );
              break;
            case "strike":
              result = <del>{result}</del>;
              break;
          }
        });
      }

      return result;

    // You can add more styles here, like italic or underline
    // return (
    //   <p className="my-0 text-[var(--gray-blue)] light:text-[var(--gray-40)]">
    //     {text}
    //   </p>
    // );

    case "heading-1":
      return (
        <h1 className="text-3xl font-bold my-6">
          {node.content?.map((childNode: any, index: number) => (
            <React.Fragment key={index}>{renderNode(childNode)}</React.Fragment>
          ))}
        </h1>
      );

    case "heading-2":
      return (
        <h2 className="text-2xl font-bold my-5">
          {node.content?.map((childNode: any, index: number) => (
            <React.Fragment key={index}>{renderNode(childNode)}</React.Fragment>
          ))}
        </h2>
      );

    case "heading-3":
      return (
        <h3 className="text-xl font-bold my-4">
          {node.content?.map((childNode: any, index: number) => (
            <React.Fragment key={index}>{renderNode(childNode)}</React.Fragment>
          ))}
        </h3>
      );

    case "heading-4":
      return (
        <h4 className="text-lg font-bold my-3">
          {node.content?.map((childNode: any, index: number) => (
            <React.Fragment key={index}>{renderNode(childNode)}</React.Fragment>
          ))}
        </h4>
      );

    case "heading-5":
      return (
        <h5 className="text-base font-bold my-2">
          {node.content?.map((childNode: any, index: number) => (
            <React.Fragment key={index}>{renderNode(childNode)}</React.Fragment>
          ))}
        </h5>
      );

    case "heading-6":
      return (
        <h6 className="text-sm font-bold my-2">
          {node.content?.map((childNode: any, index: number) => (
            <React.Fragment key={index}>{renderNode(childNode)}</React.Fragment>
          ))}
        </h6>
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
      // Check if this paragraph is inside another block element
      const isNested =
        node.content?.length === 1 &&
        node.content[0].nodeType === "text" &&
        node.content[0].marks?.length > 0;

      // If nested, don't wrap in a paragraph
      if (isNested) {
        return node.content?.map((childNode: any, index: number) => (
          <React.Fragment key={index}>{renderNode(childNode)}</React.Fragment>
        ));
      }

      return (
        <p className="my-4 text-[var(--gray-blue)] light:text-[var(--gray-40)]">
          {node.content?.map((childNode: any, index: number) => (
            <React.Fragment key={index}>{renderNode(childNode)}</React.Fragment>
          ))}
        </p>
      );

    case "blockquote":
      return (
        <blockquote className="border-l-4 border-gray-300 pl-4 my-4 italic">
          {node.content?.map((childNode: any, index: number) => (
            <React.Fragment key={index}>{renderNode(childNode)}</React.Fragment>
          ))}
        </blockquote>
      );

    case "hr":
      return <hr className="my-8 border-t border-gray-300" />;

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
