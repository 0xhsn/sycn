import { render, screen } from "@testing-library/react"
import { Progress } from "../progress"

describe("Progress", () => {
  it("renders", () => {
    render(<Progress />)
    expect(screen.getByRole("progressbar")).toBeInTheDocument()
  })

  it("renders with value", () => {
    render(<Progress value={60} />)
    expect(screen.getByRole("progressbar")).toBeInTheDocument()
  })

  it("renders indicator with transform", () => {
    const { container } = render(<Progress value={60} />)
    const indicator = container.querySelector("[class*=bg-primary]")
    expect(indicator).toHaveStyle({ transform: "translateX(-40%)" })
  })
})
