import { render, screen } from "@testing-library/react"
import { AspectRatio } from "../aspect-ratio"

describe("AspectRatio", () => {
  it("renders children", () => {
    render(
      <AspectRatio ratio={16 / 9}>
        <div data-testid="child">Content</div>
      </AspectRatio>
    )
    expect(screen.getByTestId("child")).toBeInTheDocument()
  })
})
