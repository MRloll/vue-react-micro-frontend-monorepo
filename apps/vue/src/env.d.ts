declare module "*.vue" {
  import type { DefineComponent } from "vue";

  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "react_app/CoursesPage" {
  import type { ComponentType } from "react";
  const component: ComponentType;
  export default component;
}

declare module "react_app/AssignmentsPage" {
  import type { ComponentType } from "react";
  const component: ComponentType;
  export default component;
}
