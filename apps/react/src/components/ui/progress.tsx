import { Progress as ProgressPrimitive } from "@base-ui/react/progress";
import type { ComponentProps } from "react";
import { cn } from "cn";

type RootProps = Omit<ComponentProps<typeof ProgressPrimitive.Root>, "className"> & {
  className?: string;
};

type TrackProps = Omit<ComponentProps<typeof ProgressPrimitive.Track>, "className"> & {
  className?: string;
};

type IndicatorProps = Omit<
  ComponentProps<typeof ProgressPrimitive.Indicator>,
  "className"
> & { className?: string };

function Progress({ className, ...props }: RootProps) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn("rx:w-full", className)}
      {...props}
    />
  );
}

function ProgressTrack({ className, ...props }: TrackProps) {
  return (
    <ProgressPrimitive.Track
      data-slot="progress-track"
      className={cn(
        "rx:h-1.5 rx:w-full rx:overflow-hidden rx:rounded-full rx:bg-learnly-line",
        className,
      )}
      {...props}
    />
  );
}

function ProgressIndicator({ className, ...props }: IndicatorProps) {
  return (
    <ProgressPrimitive.Indicator
      data-slot="progress-indicator"
      className={cn(
        "rx:h-full rx:rounded-full rx:bg-learnly-brand rx:transition-[width] rx:duration-300",
        className,
      )}
      {...props}
    />
  );
}

export { Progress, ProgressIndicator, ProgressTrack };
