import { render, screen } from "@testing-library/react"
import { Slider } from "../slider"

describe("Slider", () => {
  it("renders", () => {
    render(<Slider />)
    expect(screen.getByRole("slider")).toBeInTheDocument()
  })

  it("renders with default value", () => {
    render(<Slider defaultValue={[50]} />)
    expect(screen.getByRole("slider")).toHaveAttribute("aria-valuenow", "50")
  })

  it("renders with aria attributes", () => {
    render(<Slider defaultValue={[25]} min={0} max={100} />)
    const slider = screen.getByRole("slider")
    expect(slider).toHaveAttribute("aria-valuemin", "0")
    expect(slider).toHaveAttribute("aria-valuemax", "100")
    expect(slider).toHaveAttribute("aria-valuenow", "25")
  })
})
