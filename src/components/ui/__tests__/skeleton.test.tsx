import { render, screen } from "@testing-library/react"
import { Skeleton } from "../skeleton"

describe("Skeleton", () => {
  it("renders", () => {
    render(<Skeleton data-testid="skeleton" />)
    expect(screen.getByTestId("skeleton")).toBeInTheDocument()
  })

  it("has default classes", () => {
    render(<Skeleton data-testid="skeleton" />)
    expect(screen.getByTestId("skeleton")).toHaveClass("animate-pulse", "rounded-md", "bg-muted")
  })

  it("accepts custom className", () => {
    render(<Skeleton data-testid="skeleton" className="h-4 w-[250px]" />)
    const el = screen.getByTestId("skeleton")
    expect(el).toHaveClass("animate-pulse", "h-4")
  })
})
