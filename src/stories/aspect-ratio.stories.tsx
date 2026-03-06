import type { Meta, StoryObj } from "@storybook/react"
import { AspectRatio } from "@/components/ui/aspect-ratio"

const meta: Meta<typeof AspectRatio> = {
  title: "Layout/AspectRatio",
  component: AspectRatio,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof AspectRatio>

export const Default: Story = {
  render: () => (
    <div className="w-[450px]">
      <AspectRatio ratio={16 / 9} className="bg-muted rounded-md flex items-center justify-center">
        <span className="text-muted-foreground">16:9</span>
      </AspectRatio>
    </div>
  ),
}

export const Square: Story = {
  render: () => (
    <div className="w-[300px]">
      <AspectRatio ratio={1} className="bg-muted rounded-md flex items-center justify-center">
        <span className="text-muted-foreground">1:1</span>
      </AspectRatio>
    </div>
  ),
}
