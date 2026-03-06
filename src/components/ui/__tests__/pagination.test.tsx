import { render, screen } from "@testing-library/react"
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "../pagination"

describe("Pagination", () => {
  it("renders pagination with items", () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>3</PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
    expect(screen.getByText("1")).toBeInTheDocument()
    expect(screen.getByText("2")).toBeInTheDocument()
    expect(screen.getByText("3")).toBeInTheDocument()
  })

  it("has navigation role", () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
    expect(screen.getByRole("navigation")).toBeInTheDocument()
  })
})
