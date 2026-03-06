import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Toggle } from "../toggle"

describe("Toggle", () => {
  it("renders", () => {
    render(<Toggle>Bold</Toggle>)
    expect(screen.getByText("Bold")).toBeInTheDocument()
  })

  it("toggles pressed state", async () => {
    const user = userEvent.setup()
    render(<Toggle>Bold</Toggle>)
    const toggle = screen.getByText("Bold")
    expect(toggle).toHaveAttribute("data-state", "off")
    await user.click(toggle)
    expect(toggle).toHaveAttribute("data-state", "on")
  })

  it("renders outline variant", () => {
    render(<Toggle variant="outline">Italic</Toggle>)
    expect(screen.getByText("Italic")).toBeInTheDocument()
  })

  it("renders size variants", () => {
    render(<Toggle size="sm">Small</Toggle>)
    expect(screen.getByText("Small")).toBeInTheDocument()
  })
})
