import React from "react";

const ElementBox = (props) => {
  if (props.info && props.info.tag && props.info.id && props.info.desc) {
    return React.createElement(props.info.tag, props.info.id, props.info.desc);
  }
  // } else if (props && props.info) {
  //   console.log("props ==>", props)
  //   return React.createElement(props.info)
  // }
};
export { ElementBox };
