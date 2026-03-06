import { render, screen } from "@testing-library/react"
import { Label } from "../label"

describe("Label", () => {
  it("renders with text", () => {
    render(<Label>Username</Label>)
    expect(screen.getByText("Username")).toBeInTheDocument()
  })

  it("renders with htmlFor attribute", () => {
    render(<Label htmlFor="email">Email</Label>)
    expect(screen.getByText("Email")).toHaveAttribute("for", "email")
  })
})
