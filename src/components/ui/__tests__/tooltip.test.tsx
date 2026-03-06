import { render, screen } from "@testing-library/react"
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "../tooltip"

describe("Tooltip", () => {
  it("renders trigger", () => {
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent>Tooltip text</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
    expect(screen.getByText("Hover me")).toBeInTheDocument()
  })

  it("has accessible tooltip role", async () => {
    render(
      <TooltipProvider delayDuration={0}>
        <Tooltip defaultOpen>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent>Tooltip text</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
    expect(screen.getByRole("tooltip")).toBeInTheDocument()
  })
})
