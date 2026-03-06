import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ToggleGroup, ToggleGroupItem } from "../toggle-group"

describe("ToggleGroup", () => {
  it("renders items", () => {
    render(
      <ToggleGroup type="single">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
      </ToggleGroup>
    )
    expect(screen.getByText("A")).toBeInTheDocument()
    expect(screen.getByText("B")).toBeInTheDocument()
  })

  it("handles single selection", async () => {
    const user = userEvent.setup()
    render(
      <ToggleGroup type="single">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
      </ToggleGroup>
    )
    await user.click(screen.getByText("A"))
    expect(screen.getByText("A")).toHaveAttribute("data-state", "on")
    expect(screen.getByText("B")).toHaveAttribute("data-state", "off")
  })

  it("handles multiple selection", async () => {
    const user = userEvent.setup()
    render(
      <ToggleGroup type="multiple">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
      </ToggleGroup>
    )
    await user.click(screen.getByText("A"))
    await user.click(screen.getByText("B"))
    expect(screen.getByText("A")).toHaveAttribute("data-state", "on")
    expect(screen.getByText("B")).toHaveAttribute("data-state", "on")
  })
})
