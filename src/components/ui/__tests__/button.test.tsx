import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Button } from "../button"

describe("Button", () => {
  it("renders with text", () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument()
  })

  it("renders default variant", () => {
    render(<Button variant="default">Default</Button>)
    expect(screen.getByRole("button")).toHaveClass("bg-primary")
  })

  it("renders destructive variant", () => {
    render(<Button variant="destructive">Destructive</Button>)
    expect(screen.getByRole("button")).toHaveClass("bg-destructive")
  })

  it("renders outline variant", () => {
    render(<Button variant="outline">Outline</Button>)
    expect(screen.getByRole("button")).toHaveClass("border")
  })

  it("renders secondary variant", () => {
    render(<Button variant="secondary">Secondary</Button>)
    expect(screen.getByRole("button")).toHaveClass("bg-secondary")
  })

  it("renders ghost variant", () => {
    render(<Button variant="ghost">Ghost</Button>)
    expect(screen.getByRole("button")).toHaveClass("hover:bg-accent")
  })

  it("renders link variant", () => {
    render(<Button variant="link">Link</Button>)
    expect(screen.getByRole("button")).toHaveClass("underline-offset-4")
  })

  it("renders default size", () => {
    render(<Button size="default">Default</Button>)
    expect(screen.getByRole("button")).toHaveClass("h-10", "px-4", "py-2")
  })

  it("renders sm size", () => {
    render(<Button size="sm">Small</Button>)
    expect(screen.getByRole("button")).toHaveClass("h-9", "px-3")
  })

  it("renders lg size", () => {
    render(<Button size="lg">Large</Button>)
    expect(screen.getByRole("button")).toHaveClass("h-11", "px-8")
  })

  it("renders icon size", () => {
    render(<Button size="icon">X</Button>)
    expect(screen.getByRole("button")).toHaveClass("h-10", "w-10")
  })

  it("renders disabled state", () => {
    render(<Button disabled>Disabled</Button>)
    expect(screen.getByRole("button")).toBeDisabled()
  })

  it("handles click events", async () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>Click</Button>)
    await userEvent.click(screen.getByRole("button"))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it("does not fire click when disabled", async () => {
    const onClick = jest.fn()
    render(<Button disabled onClick={onClick}>Click</Button>)
    await userEvent.click(screen.getByRole("button"))
    expect(onClick).not.toHaveBeenCalled()
  })

  it("renders as child element with asChild", () => {
    render(
      <Button asChild>
        <a href="/test">Link Button</a>
      </Button>
    )
    const link = screen.getByRole("link", { name: "Link Button" })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute("href", "/test")
  })
})
