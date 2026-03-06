import { render, screen } from "@testing-library/react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "../sheet"

describe("Sheet", () => {
  it("renders when open with default side", () => {
    render(
      <Sheet open>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Sheet Title</SheetTitle>
            <SheetDescription>Sheet Description</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    )
    expect(screen.getByText("Sheet Title")).toBeInTheDocument()
    expect(screen.getByText("Sheet Description")).toBeInTheDocument()
  })

  it("renders with left side variant", () => {
    render(
      <Sheet open>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Left Sheet</SheetTitle>
            <SheetDescription>Left side</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    )
    expect(screen.getByText("Left Sheet")).toBeInTheDocument()
  })

  it("renders with top side variant", () => {
    render(
      <Sheet open>
        <SheetContent side="top">
          <SheetHeader>
            <SheetTitle>Top Sheet</SheetTitle>
            <SheetDescription>Top side</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    )
    expect(screen.getByText("Top Sheet")).toBeInTheDocument()
  })
})
