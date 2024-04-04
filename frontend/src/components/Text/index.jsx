import React from "react";

const sizeClasses = {
  txtInterLight10Lightblue700: "font-inter font-light",
  txtInterBold20Lightblue700: "font-bold font-inter",
  txtInterBold20Black900: "font-bold font-inter",
  txtInterExtraBold20WhiteA700: "font-extrabold font-inter",
  txtInterSemiBold15Black900: "font-inter font-semibold",
  txtInterSemiBold15: "font-inter font-semibold",
  txtInterBold16: "font-bold font-inter",
  txtInterExtraLight15: "font-inter font-thin",
  txtInterMedium15: "font-inter font-medium",
  txtInterLight15: "font-inter font-light",
  txtInterBold20: "font-bold font-inter",
  txtInterExtraBold24: "font-extrabold font-inter",
  txtInterExtraLight15WhiteA700: "font-inter font-thin",
  txtInterBlack64: "font-black font-inter",
  txtInterLight20: "font-inter font-light",
  txtInterExtraBold32: "font-extrabold font-inter",
  txtInterLight10: "font-inter font-light",
  txtInterSemiBold20: "font-inter font-semibold",
  txtInterExtraBold64: "font-extrabold font-inter",
  txtInterExtraBold20: "font-extrabold font-inter",
  txtInterRegular12: "font-inter font-normal",
  txtInterThin15: "font-hairline font-inter",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
