import { ComponentProps } from "react";

export type ButtonProps = Pick<ComponentProps<"button">, "children" | "onClick">;
