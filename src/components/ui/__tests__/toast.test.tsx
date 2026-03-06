import { render, screen } from "@testing-library/react"
import { ToastProvider, Toast, ToastTitle, ToastDescription, ToastViewport } from "../toast"

describe("Toast", () => {
  it("renders toast with title and description", () => {
    render(
      <ToastProvider>
        <Toast open>
          <ToastTitle>Toast Title</ToastTitle>
          <ToastDescription>Toast Description</ToastDescription>
        </Toast>
        <ToastViewport />
      </ToastProvider>
    )
    expect(screen.getByText("Toast Title")).toBeInTheDocument()
    expect(screen.getByText("Toast Description")).toBeInTheDocument()
  })
})
