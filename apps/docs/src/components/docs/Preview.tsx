import * as React from "react";

export default function Preview({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-slate-200 rounded-md">
      <header className="border-b flex justify-between items-center gap-5 rounded-t-md bg-slate-50 border-slate-200 px-4 py-3">
        <p className="text-xs lg:text-sm text-gray-700 font-medium">{title}</p>

        <div className="gap-2 flex">
          {Array.from(Array(3).keys()).map((item) => (
            <div
              key={item}
              className="size-2 border border-slate-300 rounded-full"
            />
          ))}
        </div>
      </header>
      <div className="p-4">{children}</div>
    </div>
  );
}
