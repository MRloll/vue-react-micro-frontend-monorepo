import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import type { ComponentProps } from "react";
import { cn } from "cn";

type RootProps = Omit<ComponentProps<typeof TabsPrimitive.Root>, "className"> & {
  className?: string;
};

type ListProps = Omit<ComponentProps<typeof TabsPrimitive.List>, "className"> & {
  className?: string;
};

type TabProps = Omit<ComponentProps<typeof TabsPrimitive.Tab>, "className"> & {
  className?: string;
};

type PanelProps = Omit<ComponentProps<typeof TabsPrimitive.Panel>, "className"> & {
  className?: string;
};

function Tabs({ className, ...props }: RootProps) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("rx:flex rx:flex-col rx:gap-4", className)}
      {...props}
    />
  );
}

function TabsList({ className, ...props }: ListProps) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn("rx:flex rx:flex-wrap rx:items-center rx:gap-2", className)}
      {...props}
    />
  );
}

function TabsTrigger({ className, ...props }: TabProps) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        "rx:inline-flex rx:h-9 rx:items-center rx:justify-center rx:rounded-full rx:border rx:border-learnly-line rx:bg-learnly-surface rx:px-4 rx:text-sm rx:font-medium rx:text-learnly-muted rx:transition-colors rx:hover:bg-learnly-muted-surface rx:hover:text-learnly-foreground rx:focus-visible:outline-none rx:focus-visible:ring-3 rx:focus-visible:ring-learnly-ring/50 rx:disabled:pointer-events-none rx:disabled:opacity-50 rx:data-active:border-transparent rx:data-active:bg-learnly-brand rx:data-active:text-learnly-brand-foreground rx:data-active:hover:bg-learnly-brand/90",
        className,
      )}
      {...props}
    />
  );
}

function TabsContent({ className, ...props }: PanelProps) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={cn("rx:outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsContent, TabsList, TabsTrigger };
