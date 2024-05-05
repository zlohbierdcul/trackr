"use client"

import { cn } from "~/lib/utils";

export default function BasicCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string | undefined;
}) {
  return (
    <div
      className={cn(
        className,
        "flex flex-col gap-4 overflow-hidden rounded-lg border-2 bg-card shadow-lg shadow-border",
      )}
    >
      {children}
    </div>
  );
}
