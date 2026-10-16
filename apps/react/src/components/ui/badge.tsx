import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "cn";

const badgeVariants = cva(
  "rx:inline-flex rx:w-fit rx:shrink-0 rx:items-center rx:justify-center rx:gap-1 rx:overflow-hidden rx:rounded-full rx:border rx:px-2.5 rx:py-0.5 rx:text-xs rx:font-medium rx:whitespace-nowrap rx:transition-colors rx:focus-visible:border-learnly-ring rx:focus-visible:ring-3 rx:focus-visible:ring-learnly-ring/50 rx:[&>svg]:pointer-events-none rx:[&>svg]:size-3",
  {
    variants: {
      variant: {
        default:
          "rx:border-transparent rx:bg-learnly-brand rx:text-learnly-brand-foreground",
        secondary:
          "rx:border-transparent rx:bg-learnly-secondary rx:text-learnly-secondary-foreground",
        outline: "rx:border-learnly-line rx:text-learnly-foreground",
        destructive:
          "rx:border-transparent rx:bg-learnly-destructive rx:text-learnly-brand-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type BadgeProps = ComponentProps<"span"> & VariantProps<typeof badgeVariants>;

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
