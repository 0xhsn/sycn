import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from "../menubar"

describe("Menubar", () => {
  it("renders menubar with triggers", () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New</MenubarItem>
            <MenubarItem>Open</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )
    expect(screen.getByText("File")).toBeInTheDocument()
  })

  it("opens menu on trigger click", async () => {
    const user = userEvent.setup()
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )
    await user.click(screen.getByText("File"))
    expect(screen.getByText("New")).toBeInTheDocument()
  })
})
