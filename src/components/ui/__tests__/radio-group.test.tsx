import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { RadioGroup, RadioGroupItem } from "../radio-group"

describe("RadioGroup", () => {
  it("renders radio items", () => {
    render(
      <RadioGroup defaultValue="a">
        <RadioGroupItem value="a" />
        <RadioGroupItem value="b" />
      </RadioGroup>
    )
    expect(screen.getAllByRole("radio")).toHaveLength(2)
  })

  it("has default value selected", () => {
    render(
      <RadioGroup defaultValue="a">
        <RadioGroupItem value="a" />
        <RadioGroupItem value="b" />
      </RadioGroup>
    )
    const radios = screen.getAllByRole("radio")
    expect(radios[0]).toBeChecked()
    expect(radios[1]).not.toBeChecked()
  })

  it("changes selection on click", async () => {
    const onValueChange = jest.fn()
    render(
      <RadioGroup defaultValue="a" onValueChange={onValueChange}>
        <RadioGroupItem value="a" />
        <RadioGroupItem value="b" />
      </RadioGroup>
    )
    await userEvent.click(screen.getAllByRole("radio")[1])
    expect(onValueChange).toHaveBeenCalledWith("b")
  })
})
