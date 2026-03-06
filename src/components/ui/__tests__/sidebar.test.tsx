import { render, screen } from "@testing-library/react"
import { SidebarProvider, Sidebar, SidebarContent } from "../sidebar"

describe("Sidebar", () => {
  it("renders sidebar with content", () => {
    render(
      <SidebarProvider>
        <Sidebar>
          <SidebarContent>
            <div>Sidebar Item</div>
          </SidebarContent>
        </Sidebar>
      </SidebarProvider>
    )
    expect(screen.getByText("Sidebar Item")).toBeInTheDocument()
  })

  it("renders in collapsed state", () => {
    render(
      <SidebarProvider defaultOpen={false}>
        <Sidebar>
          <SidebarContent>
            <div>Content</div>
          </SidebarContent>
        </Sidebar>
      </SidebarProvider>
    )
    expect(screen.getByText("Content")).toBeInTheDocument()
  })
})
