import React from "react";

const InputMaskChildrenWrapper = React.forwardRef((props, ref) => {
  const { children, ...other } = props;
  return React.cloneElement(children, { ...other, ref });
});

export default InputMaskChildrenWrapper;
