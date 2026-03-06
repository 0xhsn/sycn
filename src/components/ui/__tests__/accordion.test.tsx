import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../accordion"

describe("Accordion", () => {
  it("renders accordion with items", () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Trigger 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    )
    expect(screen.getByText("Trigger 1")).toBeInTheDocument()
  })

  it("expands on click", async () => {
    const user = userEvent.setup()
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Trigger 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    )
    await user.click(screen.getByText("Trigger 1"))
    expect(screen.getByText("Content 1")).toBeInTheDocument()
  })
})
