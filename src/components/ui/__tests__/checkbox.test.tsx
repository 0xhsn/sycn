import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Checkbox } from "../checkbox"

describe("Checkbox", () => {
  it("renders", () => {
    render(<Checkbox />)
    expect(screen.getByRole("checkbox")).toBeInTheDocument()
  })

  it("renders unchecked by default", () => {
    render(<Checkbox />)
    expect(screen.getByRole("checkbox")).not.toBeChecked()
  })

  it("renders checked when defaultChecked", () => {
    render(<Checkbox defaultChecked />)
    expect(screen.getByRole("checkbox")).toBeChecked()
  })

  it("calls onCheckedChange when clicked", async () => {
    const onCheckedChange = jest.fn()
    render(<Checkbox onCheckedChange={onCheckedChange} />)
    await userEvent.click(screen.getByRole("checkbox"))
    expect(onCheckedChange).toHaveBeenCalledWith(true)
  })

  it("renders disabled state", () => {
    render(<Checkbox disabled />)
    expect(screen.getByRole("checkbox")).toBeDisabled()
  })
})
