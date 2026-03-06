import { render, screen } from "@testing-library/react"
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "../table"

describe("Table", () => {
  it("renders table with header and body", () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>John</TableCell>
            <TableCell>john@example.com</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    )
    expect(screen.getByText("Name")).toBeInTheDocument()
    expect(screen.getByText("Email")).toBeInTheDocument()
    expect(screen.getByText("John")).toBeInTheDocument()
    expect(screen.getByText("john@example.com")).toBeInTheDocument()
  })
})
