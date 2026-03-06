import { render, screen } from "@testing-library/react"
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
} from "../context-menu"

describe("ContextMenu", () => {
  it("renders trigger area", () => {
    render(
      <ContextMenu>
        <ContextMenuTrigger>Right click here</ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Action 1</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    )
    expect(screen.getByText("Right click here")).toBeInTheDocument()
  })
})
