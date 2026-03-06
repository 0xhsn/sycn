import { render, screen } from "@testing-library/react"
import { Command, CommandInput } from "../command"

describe("Command", () => {
  it("renders command wrapper", () => {
    const { container } = render(<Command />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it("renders input", () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
      </Command>
    )
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument()
  })
})
