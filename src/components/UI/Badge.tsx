import React from "react";

type Props = {
  children: React.ReactNode;
  type: "new" | "sale";
};
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
export default function Badge({ children, type }: Props) {
  const classes = classNames(
    type === "sale"
      ? "bg-red-100 text-red-400"
      : "text-black bg-black bg-opacity-10",
    "inline-flex items-center rounded-[2px]  p-2 text-xs leading-[11px] font-medium "
  );
  return <span className={classes}>{children}</span>;
}
