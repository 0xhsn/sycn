import { render, screen } from "@testing-library/react"
import { Separator } from "../separator"

describe("Separator", () => {
  it("renders", () => {
    render(<Separator />)
    expect(screen.getByRole("none")).toBeInTheDocument()
  })

  it("renders horizontal orientation", () => {
    render(<Separator orientation="horizontal" />)
    expect(screen.getByRole("none")).toHaveAttribute("data-orientation", "horizontal")
  })

  it("renders vertical orientation", () => {
    render(<Separator orientation="vertical" />)
    expect(screen.getByRole("none")).toHaveAttribute("data-orientation", "vertical")
  })
})
