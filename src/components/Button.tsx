import { ReactNode } from "react";

const Button = ({
  title,
  background = "bg-yellow-300",
  leftIcon,
  rightIcon,
}: {
  title: string;
  background?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}) => {
  return (
    <button
      className={`font-robert-regular flex justify-center align-center gap-4 px-4 py-2 rounded-full text-black text-xs ${background}`}
    >
      {leftIcon}
      {title}
      {rightIcon}
    </button>
  );
};

export default Button;
