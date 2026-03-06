import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { HoverCard, HoverCardTrigger, HoverCardContent } from "../hover-card"

describe("HoverCard", () => {
  it("renders trigger", () => {
    render(
      <HoverCard>
        <HoverCardTrigger>Hover me</HoverCardTrigger>
        <HoverCardContent>Card content</HoverCardContent>
      </HoverCard>
    )
    expect(screen.getByText("Hover me")).toBeInTheDocument()
  })

  it("shows content on hover", async () => {
    const user = userEvent.setup()
    render(
      <HoverCard openDelay={0}>
        <HoverCardTrigger>Hover me</HoverCardTrigger>
        <HoverCardContent>Card content</HoverCardContent>
      </HoverCard>
    )
    await user.hover(screen.getByText("Hover me"))
    expect(await screen.findByText("Card content")).toBeInTheDocument()
  })
})
