import { render, screen } from "@testing-library/react"
import { Calendar } from "../calendar"

describe("Calendar", () => {
  it("renders calendar", () => {
    render(<Calendar />)
    expect(screen.getByText("Su")).toBeInTheDocument()
    expect(screen.getByText("Mo")).toBeInTheDocument()
  })

  it("displays the correct month", () => {
    const date = new Date(2025, 0, 15)
    render(<Calendar month={date} />)
    expect(screen.getByText("January 2025")).toBeInTheDocument()
  })

  it("renders day numbers", () => {
    const date = new Date(2025, 0, 1)
    render(<Calendar month={date} />)
    expect(screen.getByText("1")).toBeInTheDocument()
    expect(screen.getByText("31")).toBeInTheDocument()
  })
})
