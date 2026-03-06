import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Textarea } from "../textarea"

describe("Textarea", () => {
  it("renders", () => {
    render(<Textarea />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
  })

  it("renders with placeholder", () => {
    render(<Textarea placeholder="Enter text" />)
    expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument()
  })

  it("renders disabled state", () => {
    render(<Textarea disabled />)
    expect(screen.getByRole("textbox")).toBeDisabled()
  })

  it("handles onChange", async () => {
    const onChange = jest.fn()
    render(<Textarea onChange={onChange} />)
    await userEvent.type(screen.getByRole("textbox"), "hello")
    expect(onChange).toHaveBeenCalledTimes(5)
  })
})
