import type { Preview } from "@storybook/react"
import "../src/globals.css"

const preview: Preview = {
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
  },
  globalTypes: {
    theme: {
      description: "SYID Theme",
      toolbar: {
        title: "Theme",
        icon: "paintbrush",
        items: [
          { value: "", title: "Forest (Default)" },
          { value: "golden-wheat", title: "Golden Wheat" },
          { value: "deep-umber", title: "Deep Umber" },
          { value: "charcoal", title: "Charcoal" },
        ],
        dynamicTitle: true,
      },
    },
    mode: {
      description: "Dark mode",
      toolbar: {
        title: "Mode",
        icon: "moon",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
        ],
        dynamicTitle: true,
      },
    },
    direction: {
      description: "Direction",
      toolbar: {
        title: "Direction",
        icon: "transfer",
        items: [
          { value: "ltr", title: "LTR" },
          { value: "rtl", title: "RTL" },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || ""
      const mode = context.globals.mode || "light"
      const direction = context.globals.direction || "ltr"
      return (
        <div data-theme={theme || undefined} className={mode === "dark" ? "dark" : ""} dir={direction} style={{ padding: "2rem", background: "var(--background)", color: "var(--foreground)" }}>
          <Story />
        </div>
      )
    },
  ],
}

export default preview
