import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Switch } from "../switch"

describe("Switch", () => {
  it("renders", () => {
    render(<Switch />)
    expect(screen.getByRole("switch")).toBeInTheDocument()
  })

  it("toggles on click", async () => {
    const onCheckedChange = jest.fn()
    render(<Switch onCheckedChange={onCheckedChange} />)
    await userEvent.click(screen.getByRole("switch"))
    expect(onCheckedChange).toHaveBeenCalledWith(true)
  })

  it("toggles off when checked", async () => {
    const onCheckedChange = jest.fn()
    render(<Switch defaultChecked onCheckedChange={onCheckedChange} />)
    await userEvent.click(screen.getByRole("switch"))
    expect(onCheckedChange).toHaveBeenCalledWith(false)
  })

  it("renders disabled state", () => {
    render(<Switch disabled />)
    expect(screen.getByRole("switch")).toBeDisabled()
  })
})
