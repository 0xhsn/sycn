import { render, screen } from "@testing-library/react"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink } from "../breadcrumb"

describe("Breadcrumb", () => {
  it("renders breadcrumb with items and links", () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/about">About</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    )
    expect(screen.getByText("Home")).toBeInTheDocument()
    expect(screen.getByText("About")).toBeInTheDocument()
  })

  it("has breadcrumb aria label", () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    )
    expect(screen.getByLabelText("breadcrumb")).toBeInTheDocument()
  })
})
