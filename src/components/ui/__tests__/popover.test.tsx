import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Popover, PopoverTrigger, PopoverContent } from "../popover"

describe("Popover", () => {
  it("renders trigger", () => {
    render(
      <Popover>
        <PopoverTrigger>Open Popover</PopoverTrigger>
        <PopoverContent>Popover Content</PopoverContent>
      </Popover>
    )
    expect(screen.getByText("Open Popover")).toBeInTheDocument()
  })

  it("shows content on trigger click", async () => {
    const user = userEvent.setup()
    render(
      <Popover>
        <PopoverTrigger>Open Popover</PopoverTrigger>
        <PopoverContent>Popover Content</PopoverContent>
      </Popover>
    )
    await user.click(screen.getByText("Open Popover"))
    expect(screen.getByText("Popover Content")).toBeInTheDocument()
  })
})
