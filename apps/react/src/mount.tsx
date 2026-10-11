import { createRoot } from "react-dom/client";
import App from "./App.tsx";
export type MountFunction = (container: HTMLElement) => () => void;

// المضيف يملك الحاوية، وReact يدير محتواها فقط ويعيد دالة لتنظيفه.
export function mountCounter(container: HTMLElement): () => void {
  const root = createRoot(container);
  root.render(<App />);

  return () => root.unmount();
}

// Keep the original entry contract usable by older hosts.
export const mount = mountCounter;
