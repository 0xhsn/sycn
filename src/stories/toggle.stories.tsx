import type { Meta, StoryObj } from "@storybook/react"
import { Toggle } from "@/components/ui/toggle"

const meta: Meta<typeof Toggle> = {
  title: "Feedback/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["default", "outline"] },
    size: { control: "select", options: ["default", "sm", "lg"] },
  },
}
export default meta
type Story = StoryObj<typeof Toggle>

export const Default: Story = { args: { children: "Bold" } }
export const Outline: Story = { args: { children: "Italic", variant: "outline" } }
export const Small: Story = { args: { children: "S", size: "sm" } }
export const Large: Story = { args: { children: "Large", size: "lg" } }
export const Pressed: Story = { args: { children: "Bold", defaultPressed: true } }
export const Disabled: Story = { args: { children: "Disabled", disabled: true } }
