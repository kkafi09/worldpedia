import { Children } from "react";
import { Fragment } from "react";

const Breadcrumb = ({ children }) => {
  const childrenArray = Children.toArray(children);

  const childrenWtihSeperator = childrenArray.map((child, index) => {
    if (index !== childrenArray.length - 1) {
      return <Fragment key={index}>{child}</Fragment>;
    }
    return child;
  });

  return (
    <nav className="text-sm breadcrumbs" aria-label="breadcrumb">
      <ul>{childrenWtihSeperator}</ul>
    </nav>
  );
};

export default Breadcrumb;
