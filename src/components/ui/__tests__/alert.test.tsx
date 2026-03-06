import { render, screen } from "@testing-library/react"
import { Alert, AlertTitle, AlertDescription } from "../alert"

describe("Alert", () => {
  it("renders with role alert", () => {
    render(<Alert>Content</Alert>)
    expect(screen.getByRole("alert")).toBeInTheDocument()
  })

  it("renders default variant", () => {
    render(<Alert>Default</Alert>)
    expect(screen.getByRole("alert")).toHaveClass("bg-background")
  })

  it("renders destructive variant", () => {
    render(<Alert variant="destructive">Error</Alert>)
    expect(screen.getByRole("alert")).toHaveClass("border-destructive/50")
  })

  it("renders AlertTitle", () => {
    render(<AlertTitle>Warning</AlertTitle>)
    expect(screen.getByText("Warning")).toBeInTheDocument()
  })

  it("renders AlertDescription", () => {
    render(<AlertDescription>Something happened</AlertDescription>)
    expect(screen.getByText("Something happened")).toBeInTheDocument()
  })

  it("renders full alert composition", () => {
    render(
      <Alert>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>You can add components.</AlertDescription>
      </Alert>
    )
    expect(screen.getByRole("alert")).toBeInTheDocument()
    expect(screen.getByText("Heads up!")).toBeInTheDocument()
    expect(screen.getByText("You can add components.")).toBeInTheDocument()
  })
})
