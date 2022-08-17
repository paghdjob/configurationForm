import React from "react";

const ElementBox = (props) => {
  const innerChild = (info) => {
    if (info.child) {
      return React.createElement(
        info.tag,
        info.id,
        info.desc,
        childElement(info.child)
      );
    } else {
      return React.createElement(info.tag, info.id, info.desc);
    }
  };
  const childElement = (info) => {
    if (info && info.length > 0) {
      let arr = info.map((data, index) => {
        return innerChild(data);
      });
      return arr;
    } else {
      return innerChild(info);
    }
  };

  if (props.info && props.info.tag) {
    return childElement(props.info);
  }
};
export { ElementBox };
