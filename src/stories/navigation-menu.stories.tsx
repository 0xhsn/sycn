import type { Meta, StoryObj } from "@storybook/react"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const meta: Meta<typeof NavigationMenu> = {
  title: "Navigation/NavigationMenu",
  component: NavigationMenu,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof NavigationMenu>

export const Default: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-4 w-[400px]">
              <div className="text-sm font-medium">Introduction</div>
              <div className="text-sm text-muted-foreground">Re-usable components built using Radix UI and Tailwind CSS.</div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-4 w-[400px]">
              <div className="text-sm font-medium">Alert Dialog</div>
              <div className="text-sm font-medium">Hover Card</div>
              <div className="text-sm font-medium">Progress</div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
            Documentation
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}
