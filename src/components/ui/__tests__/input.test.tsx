import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Input } from "../input"

describe("Input", () => {
  it("renders", () => {
    render(<Input />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
  })

  it("renders with placeholder", () => {
    render(<Input placeholder="Enter text" />)
    expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument()
  })

  it("renders disabled state", () => {
    render(<Input disabled />)
    expect(screen.getByRole("textbox")).toBeDisabled()
  })

  it("renders with type prop", () => {
    render(<Input type="email" data-testid="email-input" />)
    expect(screen.getByTestId("email-input")).toHaveAttribute("type", "email")
  })

  it("handles onChange", async () => {
    const onChange = jest.fn()
    render(<Input onChange={onChange} />)
    await userEvent.type(screen.getByRole("textbox"), "hello")
    expect(onChange).toHaveBeenCalledTimes(5)
  })
})
