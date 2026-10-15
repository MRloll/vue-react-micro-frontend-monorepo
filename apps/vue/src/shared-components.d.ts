export {};

declare module "vue" {
  export interface GlobalComponents {
    ActionLink: (typeof import("@repo/ui"))["ActionLink"];
    AppButton: (typeof import("@repo/ui"))["AppButton"];
    BrandLogo: (typeof import("@repo/ui"))["BrandLogo"];
    FeatureCard: (typeof import("@repo/ui"))["FeatureCard"];
    PageContainer: (typeof import("@repo/ui"))["PageContainer"];
    SectionHeading: (typeof import("@repo/ui"))["SectionHeading"];
  }
}
