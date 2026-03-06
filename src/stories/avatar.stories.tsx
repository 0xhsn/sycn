import type { Meta, StoryObj } from "@storybook/react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

const meta: Meta<typeof Avatar> = {
  title: "Data/Avatar",
  component: Avatar,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof Avatar>

export const WithImage: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
}

export const Fallback: Story = {
  render: () => (
    <Avatar>
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
}
