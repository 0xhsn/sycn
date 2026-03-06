import type { Meta, StoryObj } from "@storybook/react"
import { Input } from "@/components/ui/input"

const meta: Meta<typeof Input> = {
  title: "Form/Input",
  component: Input,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = { args: { placeholder: "Enter text..." } }
export const Email: Story = { args: { type: "email", placeholder: "Email" } }
export const Password: Story = { args: { type: "password", placeholder: "Password" } }
export const File: Story = { args: { type: "file" } }
export const Disabled: Story = { args: { placeholder: "Disabled", disabled: true } }
export const WithValue: Story = { args: { defaultValue: "Hello World" } }
