import { ComponentPropsWithRef, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const Input = forwardRef<HTMLInputElement, ComponentPropsWithRef<"input">>(
  (props, ref) => {
    const { className, ...rest } = props;
    return (
      <input
        ref={ref}
        className={twMerge(
          "w-full sm:w-2/3 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none",
          className
        )}
        {...rest}
      />
    );
  }
);

Input.displayName = "Input";
export default Input;
