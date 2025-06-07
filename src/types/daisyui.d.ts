import type { PluginCreator } from "tailwindcss/plugin";

declare module "daisyui" {
  const daisyui: PluginCreator;
  export default daisyui;
}

declare module "tailwindcss/types/config" {
  interface Config {
    daisyui?: {
      themes?: string[] | boolean;
      darkTheme?: string;
      base?: boolean;
      styled?: boolean;
      utils?: boolean;
      prefix?: string;
      logs?: boolean;
    };
  }
} 