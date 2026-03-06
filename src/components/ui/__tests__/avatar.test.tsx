import { render, screen } from "@testing-library/react"
import { Avatar, AvatarFallback } from "../avatar"

describe("Avatar", () => {
  it("renders fallback", () => {
    render(
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    )
    expect(screen.getByText("JD")).toBeInTheDocument()
  })

  it("renders with custom className", () => {
    render(
      <Avatar className="custom-class">
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
    )
    expect(screen.getByText("AB")).toBeInTheDocument()
  })
})
