import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "../collapsible"

describe("Collapsible", () => {
  it("renders trigger", () => {
    render(
      <Collapsible>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent>Hidden content</CollapsibleContent>
      </Collapsible>
    )
    expect(screen.getByText("Toggle")).toBeInTheDocument()
  })

  it("shows content when opened", async () => {
    const user = userEvent.setup()
    render(
      <Collapsible>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent>Hidden content</CollapsibleContent>
      </Collapsible>
    )
    await user.click(screen.getByText("Toggle"))
    expect(screen.getByText("Hidden content")).toBeVisible()
  })
})
