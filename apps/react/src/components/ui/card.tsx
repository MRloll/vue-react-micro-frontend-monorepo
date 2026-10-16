import type { ComponentProps } from "react";
import { cn } from "cn";

function Card({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "rx:flex rx:flex-col rx:gap-6 rx:rounded-xl rx:border rx:border-learnly-line rx:bg-learnly-surface rx:py-6 rx:text-learnly-surface-foreground rx:shadow-sm",
        className,
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn("rx:grid rx:auto-rows-min rx:gap-1.5 rx:px-6", className)}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: ComponentProps<"h2">) {
  return (
    <h2
      data-slot="card-title"
      className={cn("rx:font-semibold rx:leading-none", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: ComponentProps<"p">) {
  return (
    <p
      data-slot="card-description"
      className={cn("rx:text-sm rx:text-learnly-muted", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("rx:px-6", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("rx:flex rx:items-center rx:px-6", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};
