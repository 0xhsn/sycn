import { render, screen } from "@testing-library/react"
import { ScrollArea } from "../scroll-area"

describe("ScrollArea", () => {
  it("renders children", () => {
    render(
      <ScrollArea className="h-48">
        <div>Scrollable content</div>
      </ScrollArea>
    )
    expect(screen.getByText("Scrollable content")).toBeInTheDocument()
  })
})
