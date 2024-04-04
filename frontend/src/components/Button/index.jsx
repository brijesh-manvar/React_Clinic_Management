import React from "react";
import PropTypes from "prop-types";

const shapes = { square: "rounded-none" };
const variants = {
  fill: {
    blue_300: "bg-blue-300 text-black-900",
    deep_orange_300: "bg-deep_orange-300 text-white-A700",
    light_blue_700: "bg-light_blue-700 text-white-A700",
    white_A700: "bg-white-A700 text-black-900",
    deep_orange_800: "bg-deep_orange-800 text-white-A700",
    blue_900: "bg-blue-900 text-white-A700",
  },
};
const sizes = { xs: "p-1", sm: "p-[7px]", md: "p-[18px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "square",
  size = "sm",
  variant = "fill",
  color = "blue_300",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "blue_300",
    "deep_orange_300",
    "light_blue_700",
    "white_A700",
    "deep_orange_800",
    "blue_900",
  ]),
};

export { Button };
