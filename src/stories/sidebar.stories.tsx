import type { Meta, StoryObj } from "@storybook/react"
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar"

const meta: Meta<typeof Sidebar> = {
  title: "Layout/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof Sidebar>

export const Default: Story = {
  render: () => (
    <SidebarProvider>
      <div className="flex h-[400px] w-full">
        <Sidebar>
          <SidebarHeader>
            <span className="text-sm font-semibold px-2">App</span>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem><SidebarMenuButton>Home</SidebarMenuButton></SidebarMenuItem>
                  <SidebarMenuItem><SidebarMenuButton>Settings</SidebarMenuButton></SidebarMenuItem>
                  <SidebarMenuItem><SidebarMenuButton>Profile</SidebarMenuButton></SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <span className="text-xs text-muted-foreground px-2">Footer</span>
          </SidebarFooter>
        </Sidebar>
        <main className="flex-1 p-4">
          <SidebarTrigger />
          <p className="mt-2">Main content</p>
        </main>
      </div>
    </SidebarProvider>
  ),
}
