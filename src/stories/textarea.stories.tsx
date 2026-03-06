import type { Meta, StoryObj } from "@storybook/react"
import { Textarea } from "@/components/ui/textarea"

const meta: Meta<typeof Textarea> = {
  title: "Form/Textarea",
  component: Textarea,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof Textarea>

export const Default: Story = { args: { placeholder: "Type your message here." } }
export const Disabled: Story = { args: { placeholder: "Disabled", disabled: true } }
export const WithValue: Story = { args: { defaultValue: "This is some text content." } }
