import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const buttonVariants = cva(
  "rx:group/button rx:inline-flex rx:shrink-0 rx:items-center rx:justify-center rx:rounded-lg rx:border rx:border-transparent rx:bg-clip-padding rx:text-sm rx:font-medium rx:whitespace-nowrap rx:transition-all rx:outline-none rx:select-none rx:focus-visible:border-learnly-ring rx:focus-visible:ring-3 rx:focus-visible:ring-learnly-ring/50 rx:active:not-aria-[haspopup]:translate-y-px rx:disabled:pointer-events-none rx:disabled:opacity-50 rx:aria-invalid:border-learnly-destructive rx:aria-invalid:ring-3 rx:aria-invalid:ring-learnly-destructive/20 rx:[&_svg]:pointer-events-none rx:[&_svg]:shrink-0 rx:[&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "rx:bg-learnly-brand rx:text-learnly-brand-foreground rx:hover:bg-learnly-brand/90",
        outline:
          "rx:border-learnly-line rx:bg-learnly-surface rx:hover:bg-learnly-muted-surface rx:hover:text-learnly-foreground rx:aria-expanded:bg-learnly-muted-surface rx:aria-expanded:text-learnly-foreground",
        secondary:
          "rx:bg-learnly-secondary rx:text-learnly-secondary-foreground rx:hover:bg-learnly-secondary/90 rx:aria-expanded:bg-learnly-secondary rx:aria-expanded:text-learnly-secondary-foreground",
        ghost:
          "rx:hover:bg-learnly-muted-surface rx:hover:text-learnly-foreground rx:aria-expanded:bg-learnly-muted-surface rx:aria-expanded:text-learnly-foreground",
        destructive:
          "rx:bg-learnly-destructive rx:text-learnly-brand-foreground rx:hover:bg-learnly-destructive/90 rx:focus-visible:border-learnly-destructive/40 rx:focus-visible:ring-learnly-destructive/20",
        link: "rx:text-learnly-brand rx:underline-offset-4 rx:hover:underline",
      },
      size: {
        default:
          "rx:h-8 rx:gap-1.5 rx:px-2.5 rx:has-data-[icon=inline-end]:pr-2 rx:has-data-[icon=inline-start]:pl-2",
        xs: "rx:h-6 rx:gap-1 rx:rounded-[min(var(--radius-md),10px)] rx:px-2 rx:text-xs rx:in-data-[slot=button-group]:rounded-lg rx:has-data-[icon=inline-end]:pr-1.5 rx:has-data-[icon=inline-start]:pl-1.5 rx:[&_svg:not([class*='size-'])]:size-3",
        sm: "rx:h-7 rx:gap-1 rx:rounded-[min(var(--radius-md),12px)] rx:px-2.5 rx:text-[0.8rem] rx:in-data-[slot=button-group]:rounded-lg rx:has-data-[icon=inline-end]:pr-1.5 rx:has-data-[icon=inline-start]:pl-1.5 rx:[&_svg:not([class*='size-'])]:size-3.5",
        lg: "rx:h-9 rx:gap-1.5 rx:px-2.5 rx:has-data-[icon=inline-end]:pr-2 rx:has-data-[icon=inline-start]:pl-2",
        icon: "rx:size-8",
        "icon-xs":
          "rx:size-6 rx:rounded-[min(var(--radius-md),10px)] rx:in-data-[slot=button-group]:rounded-lg rx:[&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "rx:size-7 rx:rounded-[min(var(--radius-md),12px)] rx:in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "rx:size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
