import { ButtonProps } from "./type";

export const Button = (props: ButtonProps) => {
  return <button {...props} className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg text-sm text-white " />;
};
