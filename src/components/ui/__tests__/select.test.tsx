import { render, screen } from "@testing-library/react"
import { Select, SelectTrigger, SelectValue } from "../select"

describe("Select", () => {
  it("renders trigger with placeholder", () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Pick one" />
        </SelectTrigger>
      </Select>
    )
    expect(screen.getByRole("combobox")).toBeInTheDocument()
    expect(screen.getByText("Pick one")).toBeInTheDocument()
  })
})
