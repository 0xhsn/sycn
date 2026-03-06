import { render, screen } from "@testing-library/react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../card"

describe("Card", () => {
  it("renders Card", () => {
    render(<Card data-testid="card">Content</Card>)
    expect(screen.getByTestId("card")).toBeInTheDocument()
  })

  it("renders CardHeader", () => {
    render(<CardHeader data-testid="header">Header</CardHeader>)
    expect(screen.getByTestId("header")).toBeInTheDocument()
  })

  it("renders CardTitle", () => {
    render(<CardTitle>Title</CardTitle>)
    expect(screen.getByText("Title")).toBeInTheDocument()
  })

  it("renders CardDescription", () => {
    render(<CardDescription>Description</CardDescription>)
    expect(screen.getByText("Description")).toBeInTheDocument()
  })

  it("renders CardContent", () => {
    render(<CardContent data-testid="content">Body</CardContent>)
    expect(screen.getByTestId("content")).toBeInTheDocument()
  })

  it("renders CardFooter", () => {
    render(<CardFooter data-testid="footer">Footer</CardFooter>)
    expect(screen.getByTestId("footer")).toBeInTheDocument()
  })

  it("renders full card composition", () => {
    render(
      <Card data-testid="card">
        <CardHeader>
          <CardTitle>Title</CardTitle>
          <CardDescription>Description</CardDescription>
        </CardHeader>
        <CardContent>Body</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>
    )
    expect(screen.getByTestId("card")).toBeInTheDocument()
    expect(screen.getByText("Title")).toBeInTheDocument()
    expect(screen.getByText("Description")).toBeInTheDocument()
    expect(screen.getByText("Body")).toBeInTheDocument()
    expect(screen.getByText("Footer")).toBeInTheDocument()
  })
})
