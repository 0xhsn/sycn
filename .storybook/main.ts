import type { StorybookConfig } from "@storybook/react-vite"
import { resolve } from "path"
import tailwindcss from "@tailwindcss/vite"

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-essentials"],
  staticDirs: ["../public"],
  framework: { name: "@storybook/react-vite", options: {} },
  viteFinal: (config) => {
    config.plugins = [...(config.plugins || []), tailwindcss()]
    config.resolve = config.resolve || {}
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": resolve(__dirname, "../src"),
    }
    return config
  },
}

export default config
